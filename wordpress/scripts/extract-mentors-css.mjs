import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/about-us/index.html'),
  'utf8',
);

const match = html.match(/<style data-related="n2-ss-3">([\s\S]*?)<\/style>/);
if (!match) {
  console.error('Mentors slider CSS not found in source HTML');
  process.exit(1);
}

const out = path.resolve(__dirname, '../public/wp-content/css/mentors-n2-ss-3.css');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, match[1], 'utf8');
console.log(`Wrote ${out} (${match[1].length} bytes)`);
