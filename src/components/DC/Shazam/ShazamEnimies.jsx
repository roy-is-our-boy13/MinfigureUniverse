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
      <button onClick={() => navigate('/shazam')}>Main</button>
      <button onClick={() => navigate('/shazamalies')}>Allies</button>
      <button onClick={() => navigate('/shazamenimies')}>Enemies</button>
    </nav>
  );
}

function ShazamEnimies() {
  const enemies = [
    'Doctor Sivana', 'Black Adam', 'Mister Mind',
    'Captain Nazi', 'Ibac', 'Seven Deadly Sins',
    'Monster Society', 'Kronos', 'Blaze',
    'Neron', 'Superman (evil)', 'Darkseid',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Shazam Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ShazamEnimies;
