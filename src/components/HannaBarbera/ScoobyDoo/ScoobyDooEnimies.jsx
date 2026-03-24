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
      <button onClick={() => navigate('/scoobydoo')}>Main</button>
      <button onClick={() => navigate('/scoobydooalies')}>Allies</button>
      <button onClick={() => navigate('/scoobydooenimies')}>Enemies</button>
    </nav>
  );
}

function ScoobyDooEnimies() {
  const enemies = [
    'Ghost Clown', 'Creeper', 'Space Kook', 'Phantom Shadow',
    'Ghost of Redbeard', '10,000 Volt Ghost', 'Spooky Space Kook', 'Crystal Creature',
    'Scrappy (villain arc)', 'Demonic Entities', 'Revelations', 'Darkness',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Scooby-Doo Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ScoobyDooEnimies;
