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
      <button onClick={() => navigate('/mortalkombat')}>Main</button>
      <button onClick={() => navigate('/mortalkombatalies')}>Allies</button>
      <button onClick={() => navigate('/mortalkombatenimies')}>Enemies</button>
    </nav>
  );
}

function MortalKombatEnimies() {
  const enemies = [
    'Shang Tsung', 'Shao Kahn', 'Quan Chi', 'Shinnok',
    'Mileena', 'Outworld', 'Netherrealm', 'Kronika',
    'Sindel', 'Kotal Kahn', 'Reptile', 'Baraka',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Mortal Kombat Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default MortalKombatEnimies;
