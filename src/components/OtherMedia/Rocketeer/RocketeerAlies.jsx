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
      <button onClick={() => navigate('/rocketeer')}>Main</button>
      <button onClick={() => navigate('/rocketeeralies')}>Allies</button>
      <button onClick={() => navigate('/rocketeerenimies')}>Enemies</button>
    </nav>
  );
}

function RocketeerAlies() {
  const allies = [
    'Cliff Secord', 'Jenny Blake', 'Peevy', 'Howard Hughes',
    'Bullet', 'FBI', 'Lothar', 'Sally',
    'Malcolm', 'South Seas', 'Circus', 'Gang',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Rocketeer Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default RocketeerAlies;
