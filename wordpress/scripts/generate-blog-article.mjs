import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const mirrorRoot = path.resolve(root, '../../iBridge360_converted/ibridge360.com');
const outDir = path.resolve(root, 'src');

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/generate-blog-article.mjs <slug>');
  process.exit(1);
}

function slugToPascal(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const componentBase = slugToPascal(slug);
const sectionName = `${componentBase}BlogSection`;
const pageName = componentBase;
const sectionFile = `components/sections/blog-articles/${slug}/${sectionName}.jsx`;
const pageFile = `pages/blog-articles/${componentBase}/${pageName}.jsx`;

function extractSinglePost(html) {
  const startMarker = 'class="elementor elementor-16187';
  const endMarker = '<div data-elementor-type="footer"';
  const start = html.indexOf(startMarker);
  if (start === -1) return '';
  const sectionStart = html.lastIndexOf('<div', start);
  const end = html.indexOf(endMarker, start);
  if (end === -1) return '';
  return html.slice(sectionStart, end);
}

function wrapComponent(name, jsxBody) {
  const indented = jsxBody
    .split('\n')
    .map((line) => (line.trim() ? `      ${line}` : ''))
    .join('\n');

  const needsLink = jsxBody.includes('<Link ');
  const importLine = needsLink ? "import { Link } from 'react-router-dom';\n\n" : '';

  return `${importLine}function ${name}() {
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

function parseMeta(html) {
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*-\s*iBridge360\s*$/i, '').trim() || componentBase;
  const description =
    html.match(/<meta property="og:description" content="([^"]*)"/)?.[1]
      ?.replace(/&hellip;/g, '…')
      ?.replace(/&[^;]+;/g, ' ')
      ?.trim() || title;
  const postClass = html.match(/class="elementor elementor-16187[^"]*post-(\d+)/)?.[1] || '';
  return { title, description, postClass };
}

const sourceHtml = path.join(mirrorRoot, slug, 'index.html');
if (!fs.existsSync(sourceHtml)) {
  console.error('Mirror HTML not found:', sourceHtml);
  process.exit(1);
}

const html = fs.readFileSync(sourceHtml, 'utf8');
const postHtml = extractSinglePost(html);
if (!postHtml) {
  console.error('Could not extract single-post template from', slug);
  process.exit(1);
}

const meta = parseMeta(html);
write(sectionFile, wrapComponent(sectionName, htmlToJsx(postHtml)));

write(
  pageFile,
  `import { Helmet } from 'react-helmet-async';
import ${sectionName} from '../../../${sectionFile.replace('.jsx', '')}';

function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${meta.title} - iBridge360</title>
        <meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />
      </Helmet>
      <${sectionName} />
    </>
  );
}

export default ${pageName};
`,
);

console.log(`Blog article "${slug}" generation complete.`);
