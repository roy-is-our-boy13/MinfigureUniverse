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
      <button onClick={() => navigate('/invincible')}>Main</button>
      <button onClick={() => navigate('/invinciblealies')}>Allies</button>
      <button onClick={() => navigate('/invincibleenimies')}>Enemies</button>
    </nav>
  );
}

function InvincibleEnimies() {
  const enemies = [
    'Omni-Man', 'Conquest', 'Thragg',
    'Dinosaurus', 'Angstrom Levy', 'Machine Head',
    'Doc Seismic', 'Flaxans', 'Viltrumites',
    'Mauler Twins', 'Battle Beast', 'Darkwing',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Invincible Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default InvincibleEnimies;
