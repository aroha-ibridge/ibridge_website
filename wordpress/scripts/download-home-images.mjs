import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/index.html'),
  'utf8',
);

const urls = new Set();
const pattern = /src="wp-content\/uploads\/([^"]+)"/g;
let match = pattern.exec(html);
while (match) {
  urls.add(match[1]);
  match = pattern.exec(html);
}

const base = 'https://ibridge360.com/wp-content/uploads/';

function download(rel) {
  return new Promise((resolve) => {
    const local = path.resolve(__dirname, '../public/wp-content/uploads', rel);
    if (fs.existsSync(local)) {
      resolve('skip');
      return;
    }

    fs.mkdirSync(path.dirname(local), { recursive: true });
    const file = fs.createWriteStream(local);

    https
      .get(`${base}${rel}`, (response) => {
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

const list = [...urls];
let ok = 0;
let skip = 0;
let fail = 0;

for (const rel of list) {
  const result = await download(rel);
  if (result === 'ok') ok += 1;
  else if (result === 'skip') skip += 1;
  else fail += 1;
}

console.log(`Images: ${ok} downloaded, ${skip} skipped, ${fail} failed, ${list.length} total`);
