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
      <button onClick={() => navigate('/drfate')}>Main</button>
      <button onClick={() => navigate('/drfatealies')}>Allies</button>
      <button onClick={() => navigate('/drfateenimies')}>Enemies</button>
    </nav>
  );
}

function DrFateEnimies() {
  const enemies = [
    'Wotan', 'Klarion', 'Lord of Order (complex)',
    'Mordru', 'Neron', 'Felix Faust',
    'Abnegazar', 'Rath', 'Ghast',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Doctor Fate Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default DrFateEnimies;
