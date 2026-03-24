/**
 * One-time migration: replace placeholder character grids with CharacterPhotoGrid.
 * Run: node scripts/apply-character-photo-grid.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'src', 'components');

const STYLE_BLOCK = `const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  maxWidth: '800px',
  margin: '1rem auto',
  padding: '0 20px',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

`;

const ALLIES_GRID = `      <div style={gridContainerStyle}>
        {allies.map((ally, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{ally}</h3>
            <div style={{ height: '100px', background: '#ddd', borderRadius: '4px' }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>`;

const ENEMIES_GRID = `      <div style={gridContainerStyle}>
        {enemies.map((enemy, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{enemy}</h3>
            <div style={{ height: '100px', background: '#ddd', borderRadius: '4px' }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>`;

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/Alies\.jsx$|Enimies\.jsx$/i.test(ent.name)) acc.push(p);
  }
  return acc;
}

function relImport(fromFile) {
  const fromDir = path.dirname(fromFile);
  const target = path.join(componentsDir, 'CharacterPhotoGrid.jsx');
  let rel = path.relative(fromDir, target).replace(/\\/g, '/').replace(/\.jsx$/, '');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

let updated = 0;
for (const filePath of walk(componentsDir)) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes('Image Placeholder')) continue;
  if (c.includes('CharacterPhotoGrid')) continue;

  const rel = relImport(filePath);
  if (!c.includes(`import CharacterPhotoGrid from '${rel}'`) && !c.includes(`import CharacterPhotoGrid from "${rel}"`)) {
    c = c.replace(
      /import React from 'react';\nimport \{ useNavigate \} from 'react-router-dom';\n/,
      `import React from 'react';\nimport { useNavigate } from 'react-router-dom';\nimport CharacterPhotoGrid from '${rel}';\n`
    );
  }

  if (!c.includes('CharacterPhotoGrid')) {
    console.warn('Skip (import pattern mismatch):', filePath);
    continue;
  }

  if (!c.includes(STYLE_BLOCK)) {
    console.warn('Skip (style block mismatch):', filePath);
    continue;
  }

  c = c.replace(STYLE_BLOCK, '');

  if (c.includes(ALLIES_GRID)) {
    c = c.replace(ALLIES_GRID, '      <CharacterPhotoGrid names={allies} />');
  } else if (c.includes(ENEMIES_GRID)) {
    c = c.replace(ENEMIES_GRID, '      <CharacterPhotoGrid names={enemies} />');
  } else {
    console.warn('Skip (grid block mismatch):', filePath);
    continue;
  }

  fs.writeFileSync(filePath, c, 'utf8');
  updated++;
  console.log('Updated:', path.relative(componentsDir, filePath));
}

console.log('Done. Updated', updated, 'files.');
