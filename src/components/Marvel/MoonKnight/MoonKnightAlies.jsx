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
      <button onClick={() => navigate('/moonknight')}>Main</button>
      <button onClick={() => navigate('/moonknightalies')}>Allies</button>
      <button onClick={() => navigate('/moonknightenimies')}>Enemies</button>
    </nav>
  );
}

function MoonKnightAlies() {
  const allies = [
    'Marc Spector', 'Khonshu', 'Frenchie',
    'Marlene Alraune', 'Reese', 'Crawley',
    'Midnight Mission', 'Tigra', 'Doctor Strange',
    'Avengers', 'West Coast Avengers', 'Jake Lockley',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Moon Knight Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MoonKnightAlies;
