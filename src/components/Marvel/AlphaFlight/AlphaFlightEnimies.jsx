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
      <button onClick={() => navigate('/alphaflight')}>Main</button>
      <button onClick={() => navigate('/alphaflightalies')}>Allies</button>
      <button onClick={() => navigate('/alphaflightenimies')}>Enemies</button>
    </nav>
  );
}

function AlphaFlightEnimies() {
  const enemies = [
    'Master of the World', 'Wendigo', 'Omega Flight',
    'Great Beasts', 'Dreamqueen', 'Pestilence',
    'Roxxon', 'Weapon X', 'Scourge',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Alpha Flight Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default AlphaFlightEnimies;
