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
      <button onClick={() => navigate('/ironfist')}>Main</button>
      <button onClick={() => navigate('/ironfistalies')}>Allies</button>
      <button onClick={() => navigate('/ironfistenimies')}>Enemies</button>
    </nav>
  );
}

function IronFistEnimies() {
  const enemies = [
    'Steel Serpent', 'Hydra', 'Hand',
    'Zhou Cheng', 'Davos', 'Master Khan',
    "Rand-K'ai", 'Sabretooth', 'Bride of Nine Spiders',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Iron Fist Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default IronFistEnimies;
