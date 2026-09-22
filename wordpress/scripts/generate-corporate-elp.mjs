import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/corporate-elp/index.html',
);
const outDir = path.resolve(root, 'src');

const SECTIONS = [
  {
    id: '306a8d61',
    name: 'CorporateElpHeroSection',
    file: 'components/sections/corporate-elp/CorporateElpHeroSection.jsx',
  },
  {
    id: '8522b38',
    name: 'CorporateElpMainSection',
    file: 'components/sections/corporate-elp/CorporateElpMainSection.jsx',
  },
];

function extractByDataId(html, dataId) {
  const marker = `data-id="${dataId}"`;
  const startIdx = html.indexOf(marker);
  if (startIdx === -1) return '';

  const sectionStart = html.lastIndexOf('<section', startIdx);
  if (sectionStart === -1) return '';

  let depth = 0;
  let i = sectionStart;
  while (i < html.length) {
    const open = html.indexOf('<section', i);
    const close = html.indexOf('</section>', i);
    if (open !== -1 && open < close) {
      depth += 1;
      i = open + 8;
      continue;
    }
    if (close !== -1) {
      depth -= 1;
      i = close + 10;
      if (depth === 0) {
        return html.slice(sectionStart, i);
      }
      continue;
    }
    break;
  }
  return '';
}

function wrapComponent(name, jsxBody) {
  const indented = jsxBody
    .split('\n')
    .map((line) => (line.trim() ? `      ${line}` : ''))
    .join('\n');

  const needsLink = jsxBody.includes('<Link ');
  const importLine = needsLink ? "import { Link } from 'react-router-dom';\n\n" : '';

  return `${importLine}function ${name}() {
  return (
    <>
${indented}
    </>
  );
}

export default ${name};
`;
}

function write(fileRelative, content) {
  const filePath = path.join(outDir, fileRelative);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Wrote', fileRelative, `(${(content.length / 1024).toFixed(0)} KB)`);
}

const html = fs.readFileSync(sourceHtml, 'utf8');

const pageStart = html.indexOf('class="elementor elementor-20234"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = SECTIONS.map(({ name }) => `        <${name} />`).join('\n');

write(
  'pages/CorporateElp/CorporateElp.jsx',
  `import { Helmet } from 'react-helmet-async';
import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
${imports}

function CorporateElp() {
  useCorporateTrainingScrollPanels();

  return (
    <>
      <Helmet>
        <title>Experiential Learning Platform (ELP) - iBridge360</title>
        <meta
          name="description"
          content="Redefine corporate training with iBridge360's Experiential Learning Platform — a 70/30 blended model combining self-paced modules with hands-on workshops."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="20234" className="elementor elementor-20234" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default CorporateElp;
`,
);

console.log('Corporate ELP page generation complete.');
