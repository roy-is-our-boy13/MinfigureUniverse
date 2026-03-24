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
      <button onClick={() => navigate('/shadownhawk')}>Main</button>
      <button onClick={() => navigate('/shadownhawkalies')}>Allies</button>
      <button onClick={() => navigate('/shadownhawkenimies')}>Enemies</button>
    </nav>
  );
}

function ShadownhawkEnimies() {
  const enemies = [
    'Sydrian', 'Dreadlox', 'Mafia',
    'Street gangs', 'Corrupt officials', 'Symbiont hosts',
    'Darkness', 'Overlord', 'Symbiont (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Shadowhawk Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ShadownhawkEnimies;
