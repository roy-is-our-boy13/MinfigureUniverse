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
      <button onClick={() => navigate('/lukecage')}>Main</button>
      <button onClick={() => navigate('/lukecagealies')}>Allies</button>
      <button onClick={() => navigate('/lukecageenimies')}>Enemies</button>
    </nav>
  );
}

function LukeCageEnimies() {
  const enemies = [
    'Diamondback', 'Bushmaster', 'Cottonmouth',
    'Black Mariah', 'Shades', 'Comanche',
    'Willis Stryker', 'Rackham', 'Chemistro',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Luke Cage Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default LukeCageEnimies;
