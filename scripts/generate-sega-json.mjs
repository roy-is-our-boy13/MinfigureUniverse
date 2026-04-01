/**
 * Extract allies/enemies from Sega *Alies.jsx / *Enimies.jsx, write src/data/sega/*.json,
 * and update components to use CharacterPhotoGrid items={...}.
 * Run: node scripts/generate-sega-json.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const franchiseRoot = path.join(root, 'src', 'components', 'Sega');
const dataSlug = 'sega';
const dataDir = path.join(root, 'src', 'data', dataSlug);

const PLACEHOLDER_URL =
  'https://t4.ftcdn.net/jpg/03/76/40/81/360_F_376408140_kiazgwOvkEy0e50oxgF5kllIl7j2q1SQ.jpg';

function extractStringLiterals(arrayBody) {
  const strings = [];
  const strRe = /'((?:\\'|[^'])*)'/g;
  let m;
  while ((m = strRe.exec(arrayBody)) !== null) {
    strings.push(m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'));
  }
  return strings;
}

function extractArray(content, varName) {
  const re = new RegExp(`const ${varName} = \\[([\\s\\S]*?)\\];`);
  const match = content.match(re);
  if (!match) return [];
  return extractStringLiterals(match[1]);
}

function toJsonEntries(titles, startId) {
  return titles.map((title, i) => ({
    id: startId + i,
    title,
    url: PLACEHOLDER_URL,
  }));
}

function updateJsxFile(filePath, importLine, itemsExpr) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('items={mdata.')) return false;

  if (!c.includes(`import mdata from '../../../data/${dataSlug}/`)) {
    c = c.replace(
      /import CharacterPhotoGrid from '\.\.\/\.\.\/CharacterPhotoGrid';/,
      `import CharacterPhotoGrid from '../../CharacterPhotoGrid';\n${importLine}`
    );
  }

  c = c.replace(/\n  const (allies|enemies) = \[[\s\S]*?\];\r?\n/g, '\n');

  c = c.replace(
    /<CharacterPhotoGrid names=\{(allies|enemies)\} \/>/,
    `<CharacterPhotoGrid ${itemsExpr} />`
  );

  fs.writeFileSync(filePath, c, 'utf8');
  return true;
}

fs.mkdirSync(dataDir, { recursive: true });

const franchises = fs
  .readdirSync(franchiseRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const folder of franchises) {
  const base = path.join(franchiseRoot, folder);
  const aliesPath = fs.readdirSync(base).find((f) => f.endsWith('Alies.jsx'));
  const enimiesPath = fs.readdirSync(base).find((f) => f.endsWith('Enimies.jsx'));
  if (!aliesPath || !enimiesPath) continue;

  const aliesFull = path.join(base, aliesPath);
  const enimiesFull = path.join(base, enimiesPath);
  const aliesContent = fs.readFileSync(aliesFull, 'utf8');
  const enimiesContent = fs.readFileSync(enimiesFull, 'utf8');

  const allyTitles = extractArray(aliesContent, 'allies');
  const enemyTitles = extractArray(enimiesContent, 'enemies');

  if (allyTitles.length === 0 && enemyTitles.length === 0) continue;

  const allies = toJsonEntries(allyTitles, 1);
  const enemies = toJsonEntries(enemyTitles, allies.length + 1);

  const jsonName = `${folder}.json`;
  const jsonPath = path.join(dataDir, jsonName);
  fs.writeFileSync(
    jsonPath,
    JSON.stringify({ allies, enemies }, null, 2) + '\n',
    'utf8'
  );

  const importLine = `import mdata from '../../../data/${dataSlug}/${jsonName}';`;
  updateJsxFile(aliesFull, importLine, 'items={mdata.allies}');
  updateJsxFile(enimiesFull, importLine, 'items={mdata.enemies}');

  console.log(jsonName, allies.length, 'allies,', enemies.length, 'enemies');
}

console.log('Done. Output:', dataDir);
