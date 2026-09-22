import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceHtml = path.resolve(
  root,
  '../../iBridge360_converted/ibridge360.com/contact-us/index.html',
);
const outDir = path.resolve(root, 'src');

const CONTACT_SECTIONS = [
  {
    id: '54c23f16',
    name: 'ContactReachUsSection',
    file: 'components/sections/contact-us/ContactReachUsSection.jsx',
  },
  {
    id: '7c6e03f',
    name: 'ContactAppMapSection',
    file: 'components/sections/contact-us/ContactAppMapSection.jsx',
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

const pageStart = html.indexOf('class="elementor elementor-29"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

CONTACT_SECTIONS.forEach(({ id, name, file }) => {
  const sectionHtml = extractByDataId(pageHtml, id);
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

const imports = CONTACT_SECTIONS.map(
  ({ name, file }) => `import ${name} from '../../${file.replace('.jsx', '')}';`,
).join('\n');

const sectionsRender = CONTACT_SECTIONS.map(({ name }) => `      <${name} />`).join('\n');

write(
  'pages/ContactUs/ContactUs.jsx',
  `import { Helmet } from 'react-helmet-async';
import useContactForm from '../../hooks/useContactForm';
${imports}

function ContactUs() {
  useContactForm();

  return (
    <>
      <Helmet>
        <title>Contact Us - iBridge360</title>
        <meta
          name="description"
          content="Get in touch with iBridge360. Reach us by email, phone, or send a message through our contact form."
        />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="29" className="elementor elementor-29" data-elementor-post-type="page">
${sectionsRender}
      </div>
    </>
  );
}

export default ContactUs;
`,
);

console.log('Contact Us page generation complete.');
