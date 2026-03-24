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
      <button onClick={() => navigate('/theboys')}>Main</button>
      <button onClick={() => navigate('/theboysalies')}>Allies</button>
      <button onClick={() => navigate('/theboysenimies')}>Enemies</button>
    </nav>
  );
}

function TheBoysEnimies() {
  const enemies = [
    'Homelander', 'Stormfront', 'A-Train', 'The Deep',
    'Black Noir', 'Queen Maeve', 'Vought', 'Stan Edgar',
    'Soldier Boy', 'Victoria Neuman', 'Crimson Countess', 'Payback',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>The Boys Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default TheBoysEnimies;
