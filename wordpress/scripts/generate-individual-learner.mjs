import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/individual-learner/index.html',
);
const outDir = path.resolve(root, 'src');

const INDIVIDUAL_LEARNER_SECTIONS = [
  { id: '4b56eac', name: 'IndividualLearnerHeroSection', file: 'components/sections/individual-learner/IndividualLearnerHeroSection.jsx' },
  { id: 'ec99486', name: 'IndividualLearnerJourneySection', file: 'components/sections/individual-learner/IndividualLearnerJourneySection.jsx' },
  { id: 'c9708c0', name: 'IndividualLearnerWhyHeadingSection', file: 'components/sections/individual-learner/IndividualLearnerWhyHeadingSection.jsx' },
  { id: 'ef11ebc', name: 'IndividualLearnerFeaturesSection', file: 'components/sections/individual-learner/IndividualLearnerFeaturesSection.jsx' },
  { id: '498a3eb6', name: 'IndividualLearnerBlendedLearningSection', file: 'components/sections/individual-learner/IndividualLearnerBlendedLearningSection.jsx' },
  { id: '30cf7609', name: 'IndividualLearnerCtaSection', file: 'components/sections/individual-learner/IndividualLearnerCtaSection.jsx' },
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

const pageStart = html.indexOf('class="elementor elementor-33"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

INDIVIDUAL_LEARNER_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = INDIVIDUAL_LEARNER_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = INDIVIDUAL_LEARNER_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/IndividualLearner/IndividualLearner.jsx',
  `import { Helmet } from 'react-helmet-async';
${imports}

function IndividualLearner() {
  return (
    <>
      <Helmet>
        <title>Individual learner - iBridge360</title>
        <meta
          name="description"
          content="At iBridge360, we help graduates and career changers gain in-demand skills so they're job-ready and productive from day one."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="33" className="elementor elementor-33" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default IndividualLearner;
`,
);

console.log('Individual Learner page generation complete.');
