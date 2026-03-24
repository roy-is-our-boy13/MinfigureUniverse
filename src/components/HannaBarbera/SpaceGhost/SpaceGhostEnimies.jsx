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
      <button onClick={() => navigate('/spaceghost')}>Main</button>
      <button onClick={() => navigate('/spaceghostalies')}>Allies</button>
      <button onClick={() => navigate('/spaceghostenimies')}>Enemies</button>
    </nav>
  );
}

function SpaceGhostEnimies() {
  const enemies = [
    'Zorak', 'Moltar', 'Brak', 'Spider-Woman',
    'Crusher', 'Lokar', 'Metallus', 'Creature King',
    'Tansut', 'Mirage', 'Space Pirates', 'Phantom Zone',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Space Ghost Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SpaceGhostEnimies;
