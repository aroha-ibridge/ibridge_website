import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/data-engineering-program/index.html',
);
const outDir = path.resolve(root, 'src');

const DE_SECTIONS = [
  {
    id: 'a2db022',
    name: 'DataEngineeringHeroSection',
    file: 'components/sections/data-engineering-program/DataEngineeringHeroSection.jsx',
  },
  {
    id: '5313ca5',
    name: 'DataEngineeringTabsSection',
    file: 'components/sections/data-engineering-program/DataEngineeringTabsSection.jsx',
  },
  {
    id: '6ef8997',
    name: 'DataEngineeringKeyHighlightsSection',
    file: 'components/sections/data-engineering-program/DataEngineeringKeyHighlightsSection.jsx',
  },
  {
    id: '99510ba',
    name: 'DataEngineeringProjectsSection',
    file: 'components/sections/data-engineering-program/DataEngineeringProjectsSection.jsx',
  },
  {
    id: '8472908',
    name: 'DataEngineeringToolsSection',
    file: 'components/sections/data-engineering-program/DataEngineeringToolsSection.jsx',
  },
  {
    id: '6e58bbf',
    name: 'DataEngineeringFaqSection',
    file: 'components/sections/data-engineering-program/DataEngineeringFaqSection.jsx',
  },
  {
    id: '6ec8401',
    name: 'DataEngineeringStickyCtaSection',
    file: 'components/sections/data-engineering-program/DataEngineeringStickyCtaSection.jsx',
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

  return `function ${name}() {
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

const pageStart = html.indexOf('class="elementor elementor-508"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

DE_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = DE_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = DE_SECTIONS.map(({ name }) => `        <${name} />`).join('\n');

write(
  'pages/DataEngineeringProgram/DataEngineeringProgram.jsx',
  `import { Helmet } from 'react-helmet-async';
import useHomeCarousels from '../../hooks/useHomeCarousels';
import useEaelTabs from '../../hooks/useEaelTabs';
import useElementorToggle from '../../hooks/useElementorToggle';
import useEaelAccordion from '../../hooks/useEaelAccordion';
import useProgramEnquiryForm from '../../hooks/useProgramEnquiryForm';
import useStickyBottomBar from '../../hooks/useStickyBottomBar';
${imports}

function DataEngineeringProgram() {
  useHomeCarousels();
  useEaelTabs();
  useElementorToggle();
  useEaelAccordion();
  useProgramEnquiryForm();
  useStickyBottomBar();

  return (
    <>
      <Helmet>
        <title>Data Engineering Program - iBridge360</title>
        <meta
          name="description"
          content="Become an in-demand Data Engineer with iBridge360's hands-on program covering SQL, Python, cloud, pipelines, and industry projects."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="508" className="elementor elementor-508" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default DataEngineeringProgram;
`,
);

console.log('Data Engineering Program page generation complete.');
