import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/moonknight')}>Main</button>
      <button onClick={() => navigate('/moonknightalies')}>Allies</button>
      <button onClick={() => navigate('/moonknightenimies')}>Enemies</button>
    </nav>
  );
}

function MoonKnightEnimies() {
  const enemies = [
    'Raoul Bushman', 'Sun King', 'Khonshu (complex)',
    'Morphus', 'Black Spectre', 'Midnight Man',
    'Committee', 'Crawley (past)', 'Stained Glass Scarlet',
    'Hate-Monger', 'Shadow Knight', 'Jackal',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Moon Knight Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default MoonKnightEnimies;
