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
      <button onClick={() => navigate('/thunderbolts')}>Main</button>
      <button onClick={() => navigate('/thunderboltsalies')}>Allies</button>
      <button onClick={() => navigate('/thunderboltsenimies')}>Enemies</button>
    </nav>
  );
}

function ThunderboltsAlies() {
  const allies = [
    'Baron Zemo', 'Songbird', 'Atlas',
    'Mach-IV', 'Jolt', 'Citizen V',
    'Luke Cage', 'Hawkeye', 'Moonstone',
    'Fixer', 'Ghost', 'Avengers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Thunderbolts Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default ThunderboltsAlies;
