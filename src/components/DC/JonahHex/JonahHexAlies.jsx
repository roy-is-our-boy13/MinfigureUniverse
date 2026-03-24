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
      <button onClick={() => navigate('/jonahhex')}>Main</button>
      <button onClick={() => navigate('/jonahhexalies')}>Allies</button>
      <button onClick={() => navigate('/jonahhexenimies')}>Enemies</button>
    </nav>
  );
}

function JonahHexAlies() {
  const allies = [
    'Tallulah Black', 'Bat Lash', 'El Diablo',
    'Scalphunter', 'Nighthawk', 'Hex (future)',
    'Bounty hunters', 'Apache', 'Settlers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Jonah Hex Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JonahHexAlies;
