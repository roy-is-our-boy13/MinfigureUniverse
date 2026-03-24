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
      <button onClick={() => navigate('/robocop')}>Main</button>
      <button onClick={() => navigate('/robocopalies')}>Allies</button>
      <button onClick={() => navigate('/robocopenimies')}>Enemies</button>
    </nav>
  );
}

function RoboCopAlies() {
  const allies = [
    'Anne Lewis', 'Murphy', 'Dr. Lazarus', 'OCP Good',
    'Delta City Police', 'Norton', 'Flux', 'RoboCop 2 (reformed)',
    'Cable', 'Flame', 'Rehab', 'Resistance',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>RoboCop Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default RoboCopAlies;
