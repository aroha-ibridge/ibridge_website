import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/corporate/index.html',
);
const outDir = path.resolve(root, 'src');

const CORPORATE_SECTIONS = [
  { id: '63008bc7', name: 'CorporateHeroSection', file: 'components/sections/corporate/CorporateHeroSection.jsx' },
  { id: 'b790b91', name: 'CorporateVideoSection', file: 'components/sections/corporate/CorporateVideoSection.jsx' },
  { id: 'd420e80', name: 'CorporateServicesHeadingSection', file: 'components/sections/corporate/CorporateServicesHeadingSection.jsx' },
  { id: 'f3460b9', name: 'CorporateServicesCardsSection', file: 'components/sections/corporate/CorporateServicesCardsSection.jsx' },
  { id: '00a0530', name: 'CorporateCustomProgramSection', file: 'components/sections/corporate/CorporateCustomProgramSection.jsx' },
  { id: '28e37f3a', name: 'CorporateHowSection', file: 'components/sections/corporate/CorporateHowSection.jsx' },
  { id: 'fd7a0c1', name: 'CorporateCtaSection', file: 'components/sections/corporate/CorporateCtaSection.jsx' },
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

function extractPopup(html, popupId) {
  const marker = `data-elementor-id="${popupId}"`;
  const startIdx = html.indexOf(marker);
  if (startIdx === -1) return '';

  const divStart = html.lastIndexOf('<div', startIdx);
  if (divStart === -1) return '';

  let depth = 0;
  let i = divStart;
  while (i < html.length) {
    const open = html.indexOf('<div', i);
    const close = html.indexOf('</div>', i);
    if (open !== -1 && open < close) {
      depth += 1;
      i = open + 4;
      continue;
    }
    if (close !== -1) {
      depth -= 1;
      i = close + 6;
      if (depth === 0) {
        return html.slice(divStart, i);
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

const pageStart = html.indexOf('class="elementor elementor-20245"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

CORPORATE_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const popupHtml = extractPopup(html, '17267');
if (popupHtml) {
  write(
    'components/modals/CorporateVideoPopup.jsx',
    wrapComponent('CorporateVideoPopup', htmlToJsx(popupHtml)),
  );
}

const imports = CORPORATE_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = CORPORATE_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/Corporate/Corporate.jsx',
  `import { Helmet } from 'react-helmet-async';
${imports}

function Corporate() {
  return (
    <>
      <Helmet>
        <title>Corporate - iBridge360</title>
        <meta
          name="description"
          content="iBridge360 offers custom L&D solutions and bootcamps to close talent gaps, upskill teams, and track staff performance with evidence-based insights."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="20245" className="elementor elementor-20245" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default Corporate;
`,
);

console.log('Corporate page generation complete.');
