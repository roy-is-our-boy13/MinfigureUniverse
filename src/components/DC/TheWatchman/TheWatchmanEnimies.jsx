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
      <button onClick={() => navigate('/thewatchman')}>Main</button>
      <button onClick={() => navigate('/thewatchmanalies')}>Allies</button>
      <button onClick={() => navigate('/thewatchmanenimies')}>Enemies</button>
    </nav>
  );
}

function TheWatchmanEnimies() {
  const enemies = [
    'Ozymandias', 'Comedian (complex)', 'Rorschach (complex)',
    'Doctor Manhattan (complex)', 'Seventh Kavalry', 'Trieu',
    'Underboss', 'Red Scare', 'Lady Trieu',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Watchmen Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default TheWatchmanEnimies;
