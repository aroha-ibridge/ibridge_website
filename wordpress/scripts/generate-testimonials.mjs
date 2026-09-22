import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/testimonials/index.html',
);
const outDir = path.resolve(root, 'src');

const TESTIMONIALS_SECTIONS = [
  { id: 'f3741c8', name: 'TestimonialsHeroSection', file: 'components/sections/testimonials/TestimonialsHeroSection.jsx' },
  { id: 'a9f1e4a', name: 'TestimonialsRow1Section', file: 'components/sections/testimonials/TestimonialsRow1Section.jsx' },
  { id: '31b63b1', name: 'TestimonialsRow2Section', file: 'components/sections/testimonials/TestimonialsRow2Section.jsx' },
  { id: '9c0785f', name: 'TestimonialsRow3Section', file: 'components/sections/testimonials/TestimonialsRow3Section.jsx' },
  { id: 'a2b5b05', name: 'TestimonialsRow4Section', file: 'components/sections/testimonials/TestimonialsRow4Section.jsx' },
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

  return `import { Link } from 'react-router-dom';

function ${name}() {
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

const pageStart = html.indexOf('class="elementor elementor-17365"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

TESTIMONIALS_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = TESTIMONIALS_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = TESTIMONIALS_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/Testimonials/Testimonials.jsx',
  `import { Helmet } from 'react-helmet-async';
${imports}

function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials - iBridge360</title>
        <meta
          name="description"
          content="Discover real success stories from learners, professionals, and institutional partners who have transformed their futures with iBridge360."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="17365" className="elementor elementor-17365" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default Testimonials;
`,
);

console.log('Testimonials page generation complete.');
