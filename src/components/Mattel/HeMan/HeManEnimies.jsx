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
      <button onClick={() => navigate('/HeMan')}>Main</button>
      <button onClick={() => navigate('/HeManalies')}>Allies</button>
      <button onClick={() => navigate('/HeManenimies')}>Enemies</button>
    </nav>
  );
}

function HeManEnimies() {
  const enemies = [
    'Skeletor', 'Evil-Lyn', 'Beast Man', 'Trap Jaw',
    'Mer-Man', 'Tri-Klops', 'Clawful', 'Whiplash',
    'Scare Glow', 'Hordak', 'Shadow Weaver', 'Snake Mountain',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>He-Man Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default HeManEnimies;
