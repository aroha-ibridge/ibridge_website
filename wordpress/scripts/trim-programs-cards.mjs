import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../src/components/sections/programs/ProgramsTabsSection.jsx');

let lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

function findDivBlockEnd(startIndex) {
  let depth = 0;
  for (let i = startIndex; i < lines.length; i += 1) {
    const opens = (lines[i].match(/<div/g) || []).length;
    const closes = (lines[i].match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (i > startIndex && depth === 0) return i;
  }
  return -1;
}

function removeDivBlock(matchFn) {
  const start = lines.findIndex(matchFn);
  if (start === -1) return;
  const end = findDivBlockEnd(start);
  if (end === -1) return;
  lines.splice(start, end - start + 1);
}

// Remove Corporate L&D and Institution Learner tab nav items.
const corpNav = lines.findIndex((l) => l.includes('id="corporate-ld"') && l.includes('eael-tab-nav-item'));
const instNav = lines.findIndex((l) => l.includes('id="institution-learner"') && l.includes('eael-tab-nav-item'));
if (corpNav !== -1 && instNav !== -1) {
  const instEnd = lines.findIndex((l, i) => i >= instNav && l.includes('</li>'));
  lines.splice(corpNav, instEnd - corpNav + 1);
}

// Use full-width column; card grid layout is handled in programs-cards-grid.css.
const colLine = lines.findIndex(
  (l) => l.includes('elementor-element-647c5c5c') && l.includes('elementor-col-50'),
);
if (colLine !== -1) {
  lines[colLine] = lines[colLine].replace('elementor-col-50', 'elementor-col-100');
}

// Remove the right column of extra program cards.
removeDivBlock((l) => l.includes('elementor-element-793fcd58'));

// Remove corporate and institution tab panels.
removeDivBlock((l) => l.includes('id="corporate-ld-tab"'));
removeDivBlock((l) => l.includes('id="institution-learner-tab"'));

fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
console.log(`Trimmed ProgramsTabsSection.jsx to ${lines.length} lines.`);
