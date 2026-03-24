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

function LukeCageAlies() {
  const allies = [
    'Iron Fist', 'Jessica Jones', 'Daredevil',
    'Heroes for Hire', 'Misty Knight', 'Colleen Wing',
    'Defenders', 'Claire Temple', 'Danny Rand',
    'Captain America', 'Spider-Man', 'Falcon',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Luke Cage Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default LukeCageAlies;
