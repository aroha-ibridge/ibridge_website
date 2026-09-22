import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/index.html',
);
const outDir = path.resolve(root, 'src');

const HOME_SECTIONS = [
  { id: '8704afb', name: 'HeroSection', file: 'components/sections/home/HeroSection.jsx' },
  { id: '065f797', name: 'AlumniSection', file: 'components/sections/home/AlumniSection.jsx' },
  { id: '1425e34', name: 'AboutSection', file: 'components/sections/home/AboutSection.jsx' },
  { id: '6e53f05', name: 'IbridgeForHeadingSection', file: 'components/sections/home/IbridgeForHeadingSection.jsx' },
  { id: 'd7459de', name: 'LearnerTypeCardsSection', file: 'components/sections/home/LearnerTypeCardsSection.jsx' },
  { id: 'fa3d4da', name: 'CareerPathSection', file: 'components/sections/home/CareerPathSection.jsx' },
  // fbfdc4e, 2fb7028, fd205f9 are nested inside CareerPathSection tabs — not standalone sections.
  { id: '561d9b6', name: 'InterviewPrepHeadingSection', file: 'components/sections/home/InterviewPrepHeadingSection.jsx' },
  { id: '1619673', name: 'AiApproachTabsSection', file: 'components/sections/home/AiApproachTabsSection.jsx' },
  { id: '58d20749', name: 'ProgramStepSection', file: 'components/sections/home/ProgramStepSection.jsx' },
  { id: '1cdabbc7', name: 'HintStepSection', file: 'components/sections/home/HintStepSection.jsx' },
  { id: '3c91ea5f', name: 'OutputStepSection', file: 'components/sections/home/OutputStepSection.jsx' },
  { id: 'cd4dc16', name: 'FaqSection', file: 'components/sections/home/FaqSection.jsx' },
  { id: '90d36b0', name: 'StatsCtaSection', file: 'components/sections/home/StatsCtaSection.jsx' },
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

function extractDivByMarker(html, marker) {
  const start = html.indexOf(marker);
  if (start === -1) return '';

  let depth = 0;
  let i = start;
  while (i < html.length) {
    const openDiv = html.indexOf('<div', i);
    const closeDiv = html.indexOf('</div>', i);
    if (openDiv !== -1 && openDiv < closeDiv) {
      depth += 1;
      i = openDiv + 4;
      continue;
    }
    if (closeDiv !== -1) {
      depth -= 1;
      i = closeDiv + 6;
      if (depth === 0) {
        return html.slice(start, i);
      }
      continue;
    }
    break;
  }
  return '';
}

function extractBlock(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) return '';
  const end = html.indexOf(endMarker, start + startMarker.length);
  return html.slice(start, end === -1 ? undefined : end);
}

function convertLinksToJsx(jsx) {
  return jsx;
}

function wrapComponent(name, jsxBody, extraImports = []) {
  const imports = [
    "import { Link } from 'react-router-dom';",
    ...extraImports,
  ];

  const indented = jsxBody
    .split('\n')
    .map((line) => (line.trim() ? `      ${line}` : ''))
    .join('\n');

  return `${imports.join('\n')}

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
  console.log('Wrote', fileRelative);
}

const html = fs.readFileSync(sourceHtml, 'utf8');

// Header
const headerHtml = extractDivByMarker(
  html,
  '<div data-elementor-type="header" data-elementor-id="21071"',
);
write(
  'components/layout/Header.jsx',
  wrapComponent('Header', htmlToJsx(headerHtml)),
);

execSync('node scripts/patch-header-navbar.mjs', { stdio: 'inherit', cwd: root });

// Footer
const footerHtml = extractDivByMarker(
  html,
  '<div data-elementor-type="footer" data-elementor-id="72"',
);
write(
  'components/layout/Footer.jsx',
  wrapComponent('Footer', htmlToJsx(footerHtml)),
);

// Popups needed on home
const explorePopup = extractDivByMarker(
  html,
  '<div data-elementor-type="popup" data-elementor-id="17162"',
);
write(
  'components/modals/ExplorePopup.jsx',
  wrapComponent('ExplorePopup', htmlToJsx(explorePopup)),
);

const promoPopup = extractDivByMarker(
  html,
  '<div data-elementor-type="popup" data-elementor-id="21557"',
);
write(
  'components/modals/PromoPopup.jsx',
  wrapComponent('PromoPopup', htmlToJsx(promoPopup)),
);

const loginPopup = extractDivByMarker(
  html,
  '<div data-elementor-type="popup" data-elementor-id="446"',
);
write(
  'components/modals/LoginPopup.jsx',
  wrapComponent('LoginPopup', htmlToJsx(loginPopup)),
);

// Home sections
const homeWrapperStart = html.indexOf('class="elementor elementor-9"');
const homeWrapperEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const homeHtml = html.slice(homeWrapperStart, homeWrapperEnd);

HOME_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(homeHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

// Home page composer
const imports = HOME_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = HOME_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/Home/Home.jsx',
  `import { Helmet } from 'react-helmet-async';
import useHomeCarousels from '../../hooks/useHomeCarousels';
import useElementorCounters from '../../hooks/useElementorCounters';
import useEaelTabs from '../../hooks/useEaelTabs';
import useElementorToggle from '../../hooks/useElementorToggle';
${imports}

function Home() {
  useHomeCarousels();
  useElementorCounters();
  useEaelTabs();
  useElementorToggle();

  return (
    <>
      <Helmet>
        <title>iBridge360 | Innovative ML-AI Powered Learning Solutions</title>
        <meta
          name="description"
          content="iBridge360 offers AI and ML-powered learning to boost productivity and leadership with blended training for real-world skills."
        />
      </Helmet>
      <div data-elementor-type="wp-post" data-elementor-id="9" className="elementor elementor-9" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default Home;
`,
);

console.log('Home page generation complete.');
