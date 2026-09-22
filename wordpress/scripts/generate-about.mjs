import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/about-us/index.html',
);
const outDir = path.resolve(root, 'src');

const ABOUT_SECTIONS = [
  { id: '5fe13dd', name: 'AboutHeroSection', file: 'components/sections/about/AboutHeroSection.jsx' },
  { id: '77b4110', name: 'FoundingStorySection', file: 'components/sections/about/FoundingStorySection.jsx' },
  { id: '1f022805', name: 'AiPlatformHeadingSection', file: 'components/sections/about/AiPlatformHeadingSection.jsx' },
  { id: '21ed5f7', name: 'AiPlatformFeaturesSection', file: 'components/sections/about/AiPlatformFeaturesSection.jsx' },
  { id: '6cc8da7f', name: 'MentorsSection', file: 'components/sections/about/MentorsSection.jsx' },
  { id: '92988ca', name: 'PartnershipsSection', file: 'components/sections/about/PartnershipsSection.jsx' },
  { id: '59126561', name: 'AboutCtaSection', file: 'components/sections/about/AboutCtaSection.jsx' },
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

const pageStart = html.indexOf('class="elementor elementor-23"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

ABOUT_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = ABOUT_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = ABOUT_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/AboutUs/AboutUs.jsx',
  `import { Helmet } from 'react-helmet-async';
import useHomeCarousels from '../../hooks/useHomeCarousels';
import useMentorsSlider from '../../hooks/useMentorsSlider';
${imports}

function AboutUs() {
  useHomeCarousels();
  useMentorsSlider();

  return (
    <>
      <Helmet>
        <title>About Us - iBridge360</title>
        <meta
          name="description"
          content="We bridge the skill gap with ML-AI-powered corporate learning solutions that boost productivity and upskill future-ready talent."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="23" className="elementor elementor-23" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default AboutUs;
`,
);

console.log('About Us page generation complete.');
