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
      <button onClick={() => navigate('/flash')}>Main</button>
      <button onClick={() => navigate('/flashalies')}>Allies</button>
      <button onClick={() => navigate('/flashenimies')}>Enemies</button>
    </nav>
  );
}

function FlashAlies() {
  const allies = [
    'Kid Flash', 'Iris West', 'Flash Family',
    'Justice League', 'Green Lantern', 'Batman',
    'Barry Allen (legacy)', 'Jay Garrick', 'Max Mercury',
    'Jesse Quick', 'Impulse', 'Captain Cold (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Flash Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default FlashAlies;
