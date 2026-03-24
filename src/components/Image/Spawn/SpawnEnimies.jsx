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
      <button onClick={() => navigate('/spawn')}>Main</button>
      <button onClick={() => navigate('/spawnalies')}>Allies</button>
      <button onClick={() => navigate('/spawnenimies')}>Enemies</button>
    </nav>
  );
}

function SpawnEnimies() {
  const enemies = [
    'Malebolgia', 'Violator', 'Jason Wynn',
    'Billy Kincaid', 'Freak', 'Overt-Kill',
    'Clown', 'Angela (complex)', 'Cogliostro (complex)',
    'Heaven', 'Anti-Spawn', 'Redeemer',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spawn Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SpawnEnimies;
