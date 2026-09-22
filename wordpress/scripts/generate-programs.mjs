import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/programs/index.html',
);
const outDir = path.resolve(root, 'src');

const PROGRAMS_SECTIONS = [
  {
    id: '6665188',
    name: 'ProgramsTabsSection',
    file: 'components/sections/programs/ProgramsTabsSection.jsx',
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

function wrapComponent(name, jsxBody, options = {}) {
  const indented = jsxBody
    .split('\n')
    .map((line) => (line.trim() ? `      ${line}` : ''))
    .join('\n');

  const ctaWrapper = options.ctaWrapper
    ? `      <div
        data-elementor-type="section"
        data-elementor-id="16694"
        className="elementor elementor-16694"
        data-elementor-post-type="elementor_library"
      >
${indented}
      </div>`
    : indented;

  return `import { Link } from 'react-router-dom';

function ${name}() {
  return (
    <>
${ctaWrapper}
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

function stripEmbeddedStyleTags(html) {
  return html.replace(/<style>[\s\S]*?<\/style>/gi, '');
}

const TAB_TEMPLATE_CSS = {
  'individual-learner-tab': '/wp-content/uploads/elementor/css/post-4970581.css',
  'corporate-ld-tab': '/wp-content/uploads/elementor/css/post-16692a5a5.css',
  'institution-learner-tab': '/wp-content/uploads/elementor/css/post-1669407de.css',
};

function injectTabStylesheets(html) {
  let output = html;
  Object.entries(TAB_TEMPLATE_CSS).forEach(([tabId, href]) => {
    const marker = `id="${tabId}"`;
    const idx = output.indexOf(marker);
    if (idx === -1) return;
    const insertAt = output.indexOf('>', idx) + 1;
    const linkTag = `\n<link rel="stylesheet" href="${href}" />\n`;
    if (output.slice(insertAt, insertAt + 60).includes(href)) return;
    output = output.slice(0, insertAt) + linkTag + output.slice(insertAt);
  });
  return output;
}

const html = fs.readFileSync(sourceHtml, 'utf8');

const pageStart = html.indexOf('class="elementor elementor-21"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

PROGRAMS_SECTIONS.forEach(({ id, name, file, ctaWrapper }) => {
  let sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  if (id === '6665188') {
    sectionHtml = injectTabStylesheets(stripEmbeddedStyleTags(sectionHtml));
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml), { ctaWrapper }));
});

const imports = PROGRAMS_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = PROGRAMS_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/Programs/Programs.jsx',
  `import { Helmet } from 'react-helmet-async';
import useEaelTabs from '../../hooks/useEaelTabs';
${imports}

function Programs() {
  useEaelTabs();

  return (
    <>
      <Helmet>
        <title>Programs - iBridge360</title>
        <meta
          name="description"
          content="Explore iBridge360's industry-aligned programs designed to upskill graduates, professionals, and teams through experiential, job-ready learning paths."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="21" className="elementor elementor-21" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default Programs;
`,
);

console.log('Programs page generation complete.');
execSync('node scripts/trim-programs-cards.mjs', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
