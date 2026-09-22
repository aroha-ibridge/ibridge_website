import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mirrorRoot = path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com');
const html = fs.readFileSync(path.join(mirrorRoot, 'blogs/index.html'), 'utf8');
const feedHtml = fs.readFileSync(path.join(mirrorRoot, 'feed/index.html'), 'utf8');

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)(\?|$)/i;
const paths = new Set();

const patterns = [
  /(?:\.\.\/)?wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)/gi,
  /https?:\/\/ibridge360\.com\/wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)/gi,
];

[patterns[0], patterns[1]].forEach((pattern) => {
  const source = html + feedHtml;
  let match = pattern.exec(source);
  while (match) {
    const raw = match[0].replace(/^(\.\.\/)?/, '').replace(/^https?:\/\/ibridge360\.com\//, '');
    const clean = raw.split('?')[0];
    if (IMAGE_EXT.test(clean)) {
      paths.add(clean);
    }
    match = pattern.exec(source);
  }
});

const feedSlugs = [...feedHtml.matchAll(/<link>https:\/\/ibridge360\.com\/([^<]+)\/<\/link>/g)].map(
  (m) => m[1],
);
feedSlugs.forEach((slug) => {
  const postPath = path.join(mirrorRoot, slug, 'index.html');
  if (!fs.existsSync(postPath)) return;
  const postHtml = fs.readFileSync(postPath, 'utf8');
  const image = postHtml.match(/property="og:image" content="([^"]+)"/)?.[1];
  if (image) {
    const clean = image.replace(/^\.\.\//, '').replace(/^https?:\/\/ibridge360\.com\//, '').split('?')[0];
    if (IMAGE_EXT.test(clean)) paths.add(clean);
  }
});

['wp-content/uploads/elementor/css/post-16176708a.css'].forEach((file) => paths.add(file));

const base = 'https://ibridge360.com/';

function copyFromMirror(relPath, local) {
  const mirrorPath = path.join(mirrorRoot, relPath);
  if (!fs.existsSync(mirrorPath)) return false;
  fs.mkdirSync(path.dirname(local), { recursive: true });
  fs.copyFileSync(mirrorPath, local);
  return true;
}

function download(relPath) {
  return new Promise((resolve) => {
    const local = path.resolve(__dirname, '../public', relPath);
    if (fs.existsSync(local)) {
      resolve('skip');
      return;
    }

    if (copyFromMirror(relPath, local)) {
      resolve('mirror');
      return;
    }

    fs.mkdirSync(path.dirname(local), { recursive: true });
    const file = fs.createWriteStream(local);

    https
      .get(`${base}${relPath}`, (response) => {
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(local, () => resolve('fail'));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve('ok');
        });
      })
      .on('error', () => resolve('fail'));
  });
}

const list = [...paths].sort();
let ok = 0;
let skip = 0;
let mirror = 0;
let fail = 0;

for (const relPath of list) {
  const result = await download(relPath);
  if (result === 'ok') ok += 1;
  else if (result === 'skip') skip += 1;
  else if (result === 'mirror') mirror += 1;
  else fail += 1;
}

console.log(
  `Blogs assets: ${ok} downloaded, ${mirror} from mirror, ${skip} skipped, ${fail} failed (${list.length} unique paths)`,
);
