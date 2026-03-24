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
      <button onClick={() => navigate('/megaman')}>Main</button>
      <button onClick={() => navigate('/megamanalies')}>Allies</button>
      <button onClick={() => navigate('/megamanenimies')}>Enemies</button>
    </nav>
  );
}

function MegaManEnimies() {
  const enemies = [
    'Dr. Wily', 'Metall', 'Bass', 'Sigma',
    'Vile', 'Copy X', 'Omega', 'Yellow Devil',
    'Cut Man', 'Guts Man', 'Robot Masters', 'Reploids',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Mega Man Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default MegaManEnimies;
