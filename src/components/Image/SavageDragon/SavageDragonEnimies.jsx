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
      <button onClick={() => navigate('/savagedragon')}>Main</button>
      <button onClick={() => navigate('/savagedragonalies')}>Allies</button>
      <button onClick={() => navigate('/savagedragonenimies')}>Enemies</button>
    </nav>
  );
}

function SavageDragonEnimies() {
  const enemies = [
    'Overlord', 'Mako', 'Cyberface',
    'Abner Cadaver', 'Vanguard (complex)', 'Damian',
    'Scourge', 'Mister Glum', 'Ant',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Savage Dragon Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SavageDragonEnimies;
