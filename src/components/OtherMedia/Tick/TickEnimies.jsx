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
      <button onClick={() => navigate('/tick')}>Main</button>
      <button onClick={() => navigate('/tickalies')}>Allies</button>
      <button onClick={() => navigate('/tickenimies')}>Enemies</button>
    </nav>
  );
}

function TickEnimies() {
  const enemies = [
    'The Terror', 'Chairface Chippendale', 'El Seed', 'Multiple Santa',
    'Barry', 'The Brain', 'Ramses', 'Casanova',
    'Lunatic', 'Lint', 'The Fiend', 'Evil',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Tick Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default TickEnimies;
