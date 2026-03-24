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
      <button onClick={() => navigate('/streetfighter')}>Main</button>
      <button onClick={() => navigate('/streetfighteralies')}>Allies</button>
      <button onClick={() => navigate('/streetfighterenimies')}>Enemies</button>
    </nav>
  );
}

function StreetFighterAlies() {
  const allies = [
    'Ryu', 'Ken', 'Chun-Li', 'Guile',
    'Cammy', 'Sakura', 'Dan', 'E. Honda',
    'Blanka', 'Dhalsim', 'Zangief', 'T. Hawk',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Street Fighter Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default StreetFighterAlies;
