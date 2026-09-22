import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/programs/index.html'),
  'utf8',
);

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|mp4|ico)(\?|$)/i;
const mirrorRoot = path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com');

const paths = new Set();

const patterns = [
  /(?:\.\.\/)?wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico)/gi,
  /https?:\/\/ibridge360\.com\/wp-content\/uploads\/[a-zA-Z0-9_./%-]+\.(png|jpe?g|gif|webp|svg|mp4|ico)/gi,
];

patterns.forEach((pattern) => {
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

const cssFiles = [
  'wp-content/uploads/elementor/css/post-21b3df.css',
  'wp-content/uploads/essential-addons-elementor/eael-210c3c.css',
  'wp-content/uploads/elementor/css/post-4970581.css',
  'wp-content/uploads/elementor/css/post-16692a5a5.css',
  'wp-content/uploads/elementor/css/post-1669407de.css',
];

const cardBackgrounds = [
  'wp-content/uploads/2024/03/Business-Administration-2.png',
  'wp-content/uploads/2024/03/Communication-Self-Development-1.png',
  'wp-content/uploads/2024/03/Arts-and-Others-1.png',
  'wp-content/uploads/2024/03/Back-end-1.png',
  'wp-content/uploads/2024/03/Commerce-2.png',
  'wp-content/uploads/2024/03/Aroha-White-1.png',
  'wp-content/uploads/2024/03/By.png',
];

cardBackgrounds.forEach((file) => paths.add(file));

cssFiles.forEach((file) => paths.add(file));

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
  `Programs assets: ${ok} downloaded, ${mirror} from mirror, ${skip} skipped, ${fail} failed (${list.length} unique paths)`,
);
