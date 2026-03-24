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
      <button onClick={() => navigate('/avengers')}>Main</button>
      <button onClick={() => navigate('/avengersalies')}>Allies</button>
      <button onClick={() => navigate('/avengersenimies')}>Enemies</button>
    </nav>
  );
}

function AvengersEnimies() {
  const enemies = [
    'Ultron', 'Thanos', 'Loki',
    'Kang', 'Red Skull', 'Baron Zemo',
    'Graviton', 'Masters of Evil', 'Korvac',
    'Count Nefaria', 'Taskmaster', 'Absorbing Man',
    'Enchantress', 'Kree', 'Skrulls',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Avengers Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default AvengersEnimies;
