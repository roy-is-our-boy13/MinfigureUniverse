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
      <button onClick={() => navigate('/donkeykong')}>Main</button>
      <button onClick={() => navigate('/donkeykongalies')}>Allies</button>
      <button onClick={() => navigate('/donkeykongenimies')}>Enemies</button>
    </nav>
  );
}

function DonkeyKongAlies() {
  const allies = [
    'Diddy Kong', 'Dixie Kong', 'Cranky Kong', 'Funky Kong',
    'Lanky Kong', 'Tiny Kong', 'Chunky Kong', 'Donkey Kong Jr.',
    'Swanky Kong', 'Wrinkly Kong', 'Candy Kong', 'Rambi',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Donkey Kong Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default DonkeyKongAlies;
