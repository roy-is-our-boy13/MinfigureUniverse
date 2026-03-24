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
      <button onClick={() => navigate('/alphaflight')}>Main</button>
      <button onClick={() => navigate('/alphaflightalies')}>Allies</button>
      <button onClick={() => navigate('/alphaflightenimies')}>Enemies</button>
    </nav>
  );
}

function AlphaFlightAlies() {
  const allies = [
    'Guardian', 'Vindicator', 'Sasquatch',
    'Shaman', 'Snowbird', 'Puck',
    'Northstar', 'Aurora', 'Marrina',
    'Talisman', 'Box', 'Diamond Lil',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Alpha Flight Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default AlphaFlightAlies;
