import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { htmlToJsx } from './html-to-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const mirrorRoot = path.resolve(root, '../../iBridge360_converted/ibridge360.com');
const sourceHtml = path.resolve(mirrorRoot, 'blogs/index.html');
const feedHtml = path.resolve(mirrorRoot, 'feed/index.html');
const outDir = path.resolve(root, 'src');

const BLOGS_SECTIONS = [
  { id: '40187910', name: 'BlogsSection', file: 'components/sections/blogs/BlogsSection.jsx' },
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

function parseFeedItems() {
  const feed = fs.readFileSync(feedHtml, 'utf8');
  const items = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  return items.map((match) => {
    const block = match[1];
    const title = block.match(/<title>([^<]+)/)?.[1]?.trim() || '';
    const link = block.match(/<link>([^<]+)/)?.[1]?.trim() || '';
    const pubDate = block.match(/<pubDate>([^<]+)/)?.[1]?.trim() || '';
    const slug = link.replace('https://ibridge360.com/', '').replace(/\/$/, '');
    const description = block
      .match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
      ?.replace(/<p>The post[\s\S]*$/i, '')
      ?.replace(/<[^>]+>/g, ' ')
      ?.replace(/\s+/g, ' ')
      ?.trim()
      ?.slice(0, 280);
    return { title, slug, pubDate, description };
  });
}

function formatPostDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getPostImage(slug) {
  const postPath = path.join(mirrorRoot, slug, 'index.html');
  if (!fs.existsSync(postPath)) return null;
  const html = fs.readFileSync(postPath, 'utf8');
  const image = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  if (!image) return null;
  return image.replace(/^\.\.\//, '').replace(/^https?:\/\/ibridge360\.com\//, '');
}

function extractInitialSlugs(blogsHtml) {
  return [...blogsHtml.matchAll(/href="\.\.\/([^"/]+)\/index\.html"/g)].map((m) => m[1]);
}

function buildArticleHtml({ title, slug, pubDate, description }) {
  const image = getPostImage(slug);
  const dateLabel = formatPostDate(pubDate);
  const excerpt = description || '';
  const imgPath = image.startsWith('wp-content/') ? `../${image}` : `../wp-content/uploads/${image}`;
  const imgTag = image
    ? `<img loading="lazy" decoding="async" src="${imgPath}" class="attachment-full size-full" alt="${title}" />`
    : '';

  return `<article class="elementor-post elementor-grid-item post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
\t\t\t<div class="elementor-post__card">
\t\t\t\t<a class="elementor-post__thumbnail__link" href="../${slug}/index.html" tabindex="-1" ><div class="elementor-post__thumbnail">${imgTag}</div></a>
\t\t\t\t<div class="elementor-post__text">
\t\t\t\t<h3 class="elementor-post__title">
\t\t\t<a href="../${slug}/index.html" >
\t\t\t\t${title}\t\t\t</a>
\t\t</h3>
\t\t\t\t<div class="elementor-post__excerpt">
\t\t\t<p>${excerpt}</p>
\t\t</div>
\t\t\t\t\t<div class="elementor-post__read-more-wrapper">
\t\t\t
\t\t<a class="elementor-post__read-more" href="../${slug}/index.html" aria-label="Read more about ${title}" tabindex="-1" >
\t\t\tRead More »\t\t</a>

\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="elementor-post__meta-data">
\t\t\t\t\t<span class="elementor-post-date">
\t\t\t${dateLabel}\t\t</span>
\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t</article>`;
}

const html = fs.readFileSync(sourceHtml, 'utf8');
const pageStart = html.indexOf('class="elementor elementor-16176"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

let sectionHtml = extractByDataId(pageHtml, '40187910');
const feedItems = parseFeedItems();
const initialSlugs = new Set(extractInitialSlugs(sectionHtml));
const extraPosts = feedItems.filter((item) => !initialSlugs.has(item.slug));
const totalPosts = feedItems.length;
const maxPage = Math.max(1, Math.ceil(totalPosts / 6));

sectionHtml = sectionHtml.replace(/data-max-page="\d+"/, `data-max-page="${maxPage}"`);
sectionHtml = sectionHtml.replace(
  /data-next-page="[^"]*"/,
  'data-next-page="/data/blogs-extra.json"',
);

const extraArticlesHtml = extraPosts.map(buildArticleHtml).join('\n\t\t\t\t');
const extraJson = JSON.stringify({ articles: extraArticlesHtml });

const publicDataDir = path.resolve(root, 'public/data');
fs.mkdirSync(publicDataDir, { recursive: true });
fs.writeFileSync(path.join(publicDataDir, 'blogs-extra.json'), extraJson, 'utf8');
console.log(`Wrote public/data/blogs-extra.json (${extraPosts.length} extra posts, ${totalPosts} total)`);

BLOGS_SECTIONS.forEach(({ id, name, file }) => {
  if (!sectionHtml) {
    console.warn('Missing section', id, name);
    return;
  }
  write(file, wrapComponent(name, htmlToJsx(sectionHtml)));
});

write(
  'pages/Blogs/Blogs.jsx',
  `import { Helmet } from 'react-helmet-async';
import useBlogsInfiniteScroll from '../../hooks/useBlogsInfiniteScroll';
import BlogsSection from '../../components/sections/blogs/BlogsSection';

function Blogs() {
  useBlogsInfiniteScroll();

  return (
    <>
      <Helmet>
        <title>Blogs - iBridge360</title>
        <meta name="description" content="Blogs" />
      </Helmet>
      <div data-elementor-type="wp-page" data-elementor-id="16176" className="elementor elementor-16176" data-elementor-post-type="page">
      <BlogsSection />
      </div>
    </>
  );
}

export default Blogs;
`,
);

console.log('Blogs page generation complete.');
