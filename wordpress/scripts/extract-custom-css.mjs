import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/index.html'),
  'utf8',
);

const start = html.indexOf('<style id="wp-custom-css">');
const end = html.indexOf('</style>', start);
const css = html.slice(start + '<style id="wp-custom-css">'.length, end);

const out = path.resolve(__dirname, '../src/styles/wp-custom.css');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, css, 'utf8');
console.log('Wrote wp-custom.css', css.length, 'bytes');
