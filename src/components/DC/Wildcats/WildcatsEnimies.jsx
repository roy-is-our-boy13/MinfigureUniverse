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
      <button onClick={() => navigate('/wildcats')}>Main</button>
      <button onClick={() => navigate('/wildcatsalies')}>Allies</button>
      <button onClick={() => navigate('/wildcatsenimies')}>Enemies</button>
    </nav>
  );
}

function WildcatsEnimies() {
  const enemies = [
    'Daemonites', 'Helspont', 'Lord Defile',
    'Coda', 'Mister Majestic (complex)', 'Savant (complex)',
    'Kherubim', 'Chrome', 'Tao',
    'Spartan (complex)', 'Backlash (complex)', 'Team 7 (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Wildcats Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default WildcatsEnimies;
