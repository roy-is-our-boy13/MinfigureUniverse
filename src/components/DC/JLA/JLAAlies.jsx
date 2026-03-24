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
      <button onClick={() => navigate('/jla')}>Main</button>
      <button onClick={() => navigate('/jlaalies')}>Allies</button>
      <button onClick={() => navigate('/jlaenimies')}>Enemies</button>
    </nav>
  );
}

function JLAAlies() {
  const allies = [
    'Superman', 'Batman', 'Wonder Woman',
    'Flash', 'Green Lantern', 'Aquaman',
    'Martian Manhunter', 'Cyborg', 'Hawkgirl',
    'Green Arrow', 'Black Canary', 'Plastic Man',
    'Zatanna', 'Firestorm', 'Shazam',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Justice League Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JLAAlies;
