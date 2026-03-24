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
      <button onClick={() => navigate('/hulk')}>Main</button>
      <button onClick={() => navigate('/hulkalies')}>Allies</button>
      <button onClick={() => navigate('/hulkenimies')}>Enemies</button>
    </nav>
  );
}

function HulkEnimies() {
  const enemies = [
    'Leader', 'Abomination', 'General Ross',
    'Absorbing Man', 'Wendigo', 'Zzzax',
    'Maestro', 'Red Hulk', 'U-Foes',
    'Titanium Man', 'Biotron', 'Ravage',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Hulk Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default HulkEnimies;
