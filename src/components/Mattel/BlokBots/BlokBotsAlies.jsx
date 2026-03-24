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
      <button onClick={() => navigate('/blokbots')}>Main</button>
      <button onClick={() => navigate('/blokbotsalies')}>Allies</button>
      <button onClick={() => navigate('/blokbotsenimies')}>Enemies</button>
    </nav>
  );
}

function BlokBotsAlies() {
  const allies = [
    'Blaze', 'Titan', 'Storm', 'Nova',
    'Echo', 'Blitz', 'Apex', 'Volt',
    'Cipher', 'Flux', 'Razor', 'Guardian',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Blok Bots Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default BlokBotsAlies;
