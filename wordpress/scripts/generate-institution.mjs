import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/institution/index.html',
);
const outDir = path.resolve(root, 'src');

const INSTITUTION_SECTIONS = [
  { id: '306a8d61', name: 'InstitutionHeroSection', file: 'components/sections/institution/InstitutionHeroSection.jsx' },
  { id: '23518739', name: 'InstitutionJourneySection', file: 'components/sections/institution/InstitutionJourneySection.jsx' },
  { id: '210bdb5a', name: 'InstitutionServicesHeadingSection', file: 'components/sections/institution/InstitutionServicesHeadingSection.jsx' },
  { id: 'd1989d4', name: 'InstitutionExpertTalksSection', file: 'components/sections/institution/InstitutionExpertTalksSection.jsx' },
  { id: '0bb5af6', name: 'InstitutionSoftSkillsSection', file: 'components/sections/institution/InstitutionSoftSkillsSection.jsx' },
  { id: '84b9dd3', name: 'InstitutionProgramsSection', file: 'components/sections/institution/InstitutionProgramsSection.jsx' },
  { id: '3735ad4', name: 'InstitutionTechExcellenceSection', file: 'components/sections/institution/InstitutionTechExcellenceSection.jsx' },
  { id: '2558b187', name: 'InstitutionTechnologySection', file: 'components/sections/institution/InstitutionTechnologySection.jsx' },
  { id: '72b834db', name: 'InstitutionEmpoweringSection', file: 'components/sections/institution/InstitutionEmpoweringSection.jsx' },
  { id: '9b3409c', name: 'InstitutionMentorsSection', file: 'components/sections/institution/InstitutionMentorsSection.jsx' },
  { id: '41dea1f6', name: 'InstitutionCtaSection', file: 'components/sections/institution/InstitutionCtaSection.jsx' },
  { id: '9c981e4', name: 'InstitutionTestimonialsSection', file: 'components/sections/institution/InstitutionTestimonialsSection.jsx' },
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

const pageStart = html.indexOf('class="elementor elementor-18722"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

INSTITUTION_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const popupHtml = extractPopup(html, '19428');
if (popupHtml) {
  write(
    'components/modals/InstitutionVideoPopup.jsx',
    wrapComponent('InstitutionVideoPopup', htmlToJsx(popupHtml)),
  );
}

const imports = INSTITUTION_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = INSTITUTION_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/Institution/Institution.jsx',
  `import { Helmet } from 'react-helmet-async';
import useMentorsSlider from '../../hooks/useMentorsSlider';
import useTestimonialCarousel from '../../hooks/useTestimonialCarousel';
${imports}

function Institution() {
  useMentorsSlider();
  useTestimonialCarousel();

  return (
    <>
      <Helmet>
        <title>Institution - iBridge360</title>
        <meta
          name="description"
          content="iBridge360 supports institutions with NAAC-aligned training, faculty development, and industry-ready learning to drive academic excellence and innovation."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="18722" className="elementor elementor-18722" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default Institution;
`,
);

console.log('Institution page generation complete.');
