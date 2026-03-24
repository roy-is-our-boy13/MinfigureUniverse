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
      <button onClick={() => navigate('/captainamerica')}>Main</button>
      <button onClick={() => navigate('/captainamericaalies')}>Allies</button>
      <button onClick={() => navigate('/captainamericaenimies')}>Enemies</button>
    </nav>
  );
}

function CaptainAmericaAlies() {
  const allies = [
    'Bucky Barnes', 'Falcon', 'Black Widow',
    'Sharon Carter', 'Nick Fury', 'Iron Man',
    'Hawkeye', 'Agent 13', 'Peggy Carter',
    'Winter Soldier', 'Maria Hill', 'Avengers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Captain America Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default CaptainAmericaAlies;
