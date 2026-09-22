import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/corporate/index.html'),
  'utf8',
);

const pageStart = html.indexOf('class="elementor elementor-20245"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const page = html.slice(pageStart, pageEnd);

const re = /class="elementor-section elementor-top-section elementor-element elementor-element-([a-f0-9]+)[^"]*"[^>]*data-id="\1"[^>]*>/g;
const ids = [];
let m = re.exec(page);
while (m) {
  const idx = page.indexOf(m[0]);
  const hidden =
    m[0].includes('elementor-hidden-desktop') &&
    m[0].includes('elementor-hidden-tablet') &&
    m[0].includes('elementor-hidden-mobile');
  ids.push({ id: m[1], hidden, snippet: m[0].slice(0, 100) });
  m = re.exec(page);
}

console.log('sections:', ids.length);
ids.forEach((s, i) => {
  const section = extractByDataId(page, s.id);
  const headings = [...section.matchAll(/<h[12][^>]*>([^<]+)</g)]
    .map((x) => x[1].trim())
    .slice(0, 3);
  console.log(i + 1, s.id, s.hidden ? '[HIDDEN]' : '', headings.join(' | '));
});

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
