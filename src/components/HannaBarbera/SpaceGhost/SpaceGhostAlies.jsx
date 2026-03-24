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

function SpaceGhostAlies() {
  const allies = [
    'Jan', 'Jace', 'Blip', 'Zorak',
    'Moltar', 'Brak', 'Loki', 'Space Ghost Coast to Coast',
    'Birdman', 'Thundarr', 'Herculoids', 'Galaxy Trio',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Space Ghost Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default SpaceGhostAlies;
