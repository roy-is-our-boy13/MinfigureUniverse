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

function RoboCopEnimies() {
  const enemies = [
    'Clarence Boddicker', 'Dick Jones', 'Cain', 'RoboCop 2',
    'ED-209', 'OCP', 'Omni Consumer Products', 'Rehabs',
    'Splatter Punks', 'Antonowsky', 'Otto', 'Delta City Criminals',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>RoboCop Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default RoboCopEnimies;
