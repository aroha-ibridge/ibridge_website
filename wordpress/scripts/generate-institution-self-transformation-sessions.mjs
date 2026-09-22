import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/institution-self-transformation-sessions-for-students-and-faculty/index.html',
);
const outDir = path.resolve(root, 'src');

const SECTIONS = [
  {
    id: '306a8d61',
    name: 'InstitutionSelfTransformationHeroSection',
    file: 'components/sections/institution-self-transformation-sessions/InstitutionSelfTransformationHeroSection.jsx',
  },
  {
    id: '8522b38',
    name: 'InstitutionSelfTransformationMainSection',
    file: 'components/sections/institution-self-transformation-sessions/InstitutionSelfTransformationMainSection.jsx',
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

const pageStart = html.indexOf('class="elementor elementor-19434"');
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
  'pages/InstitutionSelfTransformationSessions/InstitutionSelfTransformationSessions.jsx',
  `import { Helmet } from 'react-helmet-async';
import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
${imports}

function InstitutionSelfTransformationSessions() {
  useCorporateTrainingScrollPanels();

  return (
    <>
      <Helmet>
        <title>Self-Transformation Sessions - iBridge360</title>
        <meta
          name="description"
          content="Transformative self-transformation sessions for students and faculty — programs for personal and professional excellence."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="19434" className="elementor elementor-19434" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default InstitutionSelfTransformationSessions;
`,
);

console.log('Institution Self-Transformation Sessions page generation complete.');
