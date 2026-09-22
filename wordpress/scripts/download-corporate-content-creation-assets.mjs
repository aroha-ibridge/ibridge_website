import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mirrorRoot = path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com');
const html = fs.readFileSync(path.join(mirrorRoot, 'corporate-content-creation/index.html'), 'utf8');

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)(\?|$)/i;
const paths = new Set();

const patterns = [
  /(?:\.\.\/)?wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)/gi,
  /https?:\/\/ibridge360\.com\/wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico|jpg)/gi,
];

[patterns[0], patterns[1]].forEach((pattern) => {
  let match = pattern.exec(html);
  while (match) {
    const raw = match[0].replace(/^(\.\.\/)?/, '').replace(/^https?:\/\/ibridge360\.com\//, '');
    const clean = raw.split('?')[0];
    if (IMAGE_EXT.test(clean)) {
      paths.add(clean);
    }
    match = pattern.exec(html);
  }
});

const cssPath = 'wp-content/uploads/elementor/css/post-202370d44.css';
paths.add(cssPath);

const cssLocal = path.resolve(__dirname, '../public', cssPath);
if (fs.existsSync(cssLocal)) {
  const css = fs.readFileSync(cssLocal, 'utf8');
  const relPattern = /\.\.\/\.\.\/([0-9]{4}\/[0-9]{2}\/[^)"']+\.(png|jpe?g|gif|webp|svg))/gi;
  let match = relPattern.exec(css);
  while (match) {
    paths.add(`wp-content/uploads/${match[1].split('?')[0]}`);
    match = relPattern.exec(css);
  }
}

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
let mirror = 0;
let skip = 0;
let fail = 0;

for (const relPath of list) {
  // eslint-disable-next-line no-await-in-loop
  const result = await download(relPath);
  if (result === 'ok') ok += 1;
  else if (result === 'mirror') mirror += 1;
  else if (result === 'skip') skip += 1;
  else fail += 1;
  console.log(result.padEnd(6), relPath);
}

console.log(`Done: ${ok} downloaded, ${mirror} from mirror, ${skip} skipped, ${fail} failed (${list.length} total)`);
