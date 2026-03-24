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

function StreetFighterEnimies() {
  const enemies = [
    'M. Bison', 'Vega', 'Sagat', 'Balrog',
    'Akuma', 'Gill', 'Seth', 'F.A.N.G.',
    'Juri', 'Bison Dolls', 'Shadaloo', 'S.I.N.',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Street Fighter Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default StreetFighterEnimies;
