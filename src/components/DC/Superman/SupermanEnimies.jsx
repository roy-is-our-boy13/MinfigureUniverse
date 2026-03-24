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
      <button onClick={() => navigate('/superman')}>Main</button>
      <button onClick={() => navigate('/supermanalies')}>Allies</button>
      <button onClick={() => navigate('/supermanenimies')}>Enemies</button>
    </nav>
  );
}

function SupermanEnimies() {
  const enemies = [
    'Lex Luthor', 'General Zod', 'Brainiac',
    'Darkseid', 'Doomsday', 'Metallo',
    'Bizarro', 'Parasite', 'Toyman',
    'Mxyzptlk', 'Cyborg Superman', 'Manchester Black',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Superman Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SupermanEnimies;
