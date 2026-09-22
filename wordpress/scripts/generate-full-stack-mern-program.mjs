import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/full-stack-development-mern-program-2/index.html',
);
const outDir = path.resolve(root, 'src');

const FS_SECTIONS = [
  {
    id: '34e08277',
    name: 'FullStackMernHeroSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernHeroSection.jsx',
  },
  {
    id: '7955b67f',
    name: 'FullStackMernTabsSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernTabsSection.jsx',
    stripStyles: true,
    tabTemplateCss: '/wp-content/uploads/elementor/css/post-16959.css',
  },
  {
    id: '05cc39c',
    name: 'FullStackMernCtaSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernCtaSection.jsx',
  },
  {
    id: '68ad37a5',
    name: 'FullStackMernKeyHighlightsSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernKeyHighlightsSection.jsx',
  },
  {
    id: '32e6d5ad',
    name: 'FullStackMernProjectsSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernProjectsSection.jsx',
  },
  {
    id: 'b9fb8b3',
    name: 'FullStackMernTestimonialsSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernTestimonialsSection.jsx',
  },
  {
    id: '7dbb1f1',
    name: 'FullStackMernFaqSection',
    file: 'components/sections/full-stack-mern-program/FullStackMernFaqSection.jsx',
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

function cleanProgramHtml(html) {
  const heroParagraph =
    'Master the MERN Stack by building modern, scalable web applications from scratch. This intensive 12-week program covers frontend development, backend development, databases, APIs, authentication, cloud deployment, and DevOps fundamentals through hands-on projects and real-world applications. With <strong>9 learning phases, 10 modules, and 60+ industry-relevant topics</strong>, you\'ll gain the practical skills needed to become a job-ready Full Stack Developer.';

  return html
    .replace(/<style>[\s\S]*?<\/style>/gi, '')
    .replace(
      /<div class="qMYqUG_convSearchResultHighlightRoot">[\s\S]*?<\/div>\s*<\/div>/gi,
      `<p>${heroParagraph}</p>`,
    )
    .replace(/ class="PDq2pG_selectionAnchorContainer"/gi, '')
    .replace(/ data-start="[^"]*"/gi, '')
    .replace(/ data-end="[^"]*"/gi, '')
    .replace(/ data-section-id="[^"]*"/gi, '')
    .replace(/ data-is-last-node="[^"]*"/gi, '')
    .replace(/ data-is-only-node="[^"]*"/gi, '');
}

function injectTabStylesheet(html, href) {
  const marker = 'id="program-path-tab"';
  const idx = html.indexOf(marker);
  if (idx === -1) return html;
  const insertAt = html.indexOf('>', idx) + 1;
  const linkTag = `\n<link rel="stylesheet" href="${href}" />\n`;
  if (html.slice(insertAt, insertAt + 80).includes(href)) return html;
  return html.slice(0, insertAt) + linkTag + html.slice(insertAt);
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

const pageStart = html.indexOf('class="elementor elementor-16948"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

FS_SECTIONS.forEach(({ id, name, file, stripStyles, tabTemplateCss }) => {
  let sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  sectionHtml = cleanProgramHtml(sectionHtml);
  if (stripStyles && tabTemplateCss) {
    sectionHtml = injectTabStylesheet(sectionHtml, tabTemplateCss);
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = FS_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = FS_SECTIONS.map(({ name }) => `        <${name} />`).join('\n');

write(
  'pages/FullStackMernProgram/FullStackMernProgram.jsx',
  `import { Helmet } from 'react-helmet-async';
import useHomeCarousels from '../../hooks/useHomeCarousels';
import useEaelTabs from '../../hooks/useEaelTabs';
import useElementorToggle from '../../hooks/useElementorToggle';
import useEaelAccordion from '../../hooks/useEaelAccordion';
import useProgramEnquiryForm from '../../hooks/useProgramEnquiryForm';
${imports}

function FullStackMernProgram() {
  useHomeCarousels();
  useEaelTabs();
  useElementorToggle();
  useEaelAccordion();
  useProgramEnquiryForm();

  return (
    <>
      <Helmet>
        <title>Full Stack MERN Development - iBridge360</title>
        <meta
          name="description"
          content="Master the MERN stack with iBridge360's hands-on Full Stack Development program covering React, Node.js, Express, MongoDB, and cloud deployment."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="16948" className="elementor elementor-16948" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default FullStackMernProgram;
`,
);

console.log('Full Stack MERN Program page generation complete.');
