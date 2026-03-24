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
      <button onClick={() => navigate('/drstrange')}>Main</button>
      <button onClick={() => navigate('/drstrangealies')}>Allies</button>
      <button onClick={() => navigate('/drstrangeenimies')}>Enemies</button>
    </nav>
  );
}

function DrStrangeEnimies() {
  const enemies = [
    'Dormammu', 'Baron Mordo', 'Nightmare',
    'Shuma-Gorath', 'Umar', 'Clea (complex)',
    'Kaecilius', 'Mindless Ones', 'Mephisto',
    'Loki', 'Satannish', 'D\'Spayre',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Doctor Strange Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default DrStrangeEnimies;
