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
      <button onClick={() => navigate('/starfox')}>Main</button>
      <button onClick={() => navigate('/starfoxalies')}>Allies</button>
      <button onClick={() => navigate('/starfoxenimies')}>Enemies</button>
    </nav>
  );
}

function StarFoxEnimies() {
  const enemies = [
    'Andross', "Wolf O'Donnell", 'Leon Powalski', 'Pigma Dengar',
    'Andrew Oikonny', 'Star Wolf', 'Aparoids', 'Anglar Emperor',
    'General Scales', 'Venom Army', 'Grif', 'Caiman',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Star Fox Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default StarFoxEnimies;
