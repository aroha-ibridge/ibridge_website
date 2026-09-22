import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.resolve(__dirname, '../../../iBridge360_converted/ibridge360.com/institution/index.html'),
  'utf8',
);

const pageStart = html.indexOf('class="elementor elementor-18722"');
const pageEnd = html.indexOf('class="elementor elementor-72 elementor-location-footer"');
const pageHtml = html.slice(pageStart, pageEnd);

function extractByDataId(htmlContent, dataId) {
  const marker = `data-id="${dataId}"`;
  const startIdx = htmlContent.indexOf(marker);
  if (startIdx === -1) return '';

  const sectionStart = htmlContent.lastIndexOf('<section', startIdx);
  if (sectionStart === -1) return '';

  let depth = 0;
  let i = sectionStart;
  while (i < htmlContent.length) {
    const open = htmlContent.indexOf('<section', i);
    const close = htmlContent.indexOf('</section>', i);
    if (open !== -1 && open < close) {
      depth += 1;
      i = open + 8;
      continue;
    }
    if (close !== -1) {
      depth -= 1;
      i = close + 10;
      if (depth === 0) {
        return htmlContent.slice(sectionStart, i);
      }
      continue;
    }
    break;
  }
  return '';
}

const re =
  /<section[^>]*class="elementor-section elementor-top-section[^"]*"[^>]*data-id="([a-f0-9]+)"/g;
const ids = [];
let match = re.exec(pageHtml);
while (match) {
  if (!ids.includes(match[1])) ids.push(match[1]);
  match = re.exec(pageHtml);
}

ids.forEach((id) => {
  const section = extractByDataId(pageHtml, id);
  const hidden = section.includes('elementor-hidden-desktop') && section.includes('elementor-hidden-tablet') && section.includes('elementor-hidden-mobile');
  const title = section.match(/elementor-heading-title[^>]*>([^<]{0,80})/)?.[1]?.replace(/\s+/g, ' ').trim() || '';
  console.log(`${id}${hidden ? ' (hidden)' : ''} — ${title}`);
});
