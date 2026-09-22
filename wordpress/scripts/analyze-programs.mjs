import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/programs/index.html'),
  'utf8',
);

const pageStart = html.indexOf('class="elementor elementor-21"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

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
      if (depth === 0) return html.slice(sectionStart, i);
      continue;
    }
    break;
  }
  return '';
}

const ids = ['6665188', '26d4b858', 'c099af7'];
for (const id of ids) {
  const section = extractByDataId(pageHtml, id);
  const headings = [...section.matchAll(/<h[12][^>]*>([^<]+)</g)].map((m) => m[1].trim()).slice(0, 5);
  const tabs = [...section.matchAll(/eael-tab-title[^>]*>([^<]+)</g)].map((m) => m[1].trim());
  console.log('\n===', id, 'len', section.length, '===');
  console.log('headings:', headings);
  console.log('tabs:', tabs);
  console.log('hidden:', section.includes('elementor-hidden-desktop'));
}
