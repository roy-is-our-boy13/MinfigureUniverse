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
      <button onClick={() => navigate('/powerrangers')}>Main</button>
      <button onClick={() => navigate('/powerrangersalies')}>Allies</button>
      <button onClick={() => navigate('/powerrangersenimies')}>Enemies</button>
    </nav>
  );
}

function PowerRangersAlies() {
  const allies = [
    'Red Ranger', 'Blue Ranger', 'Pink Ranger', 'Yellow Ranger',
    'Black Ranger', 'Green Ranger', 'White Ranger', 'Zordon',
    'Alpha 5', 'Tommy Oliver', 'Jason Lee Scott', 'Kimberly Hart',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Power Rangers Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default PowerRangersAlies;
