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
      <button onClick={() => navigate('/daredevil')}>Main</button>
      <button onClick={() => navigate('/daredevilalies')}>Allies</button>
      <button onClick={() => navigate('/daredevilenimies')}>Enemies</button>
    </nav>
  );
}

function DaredevilEnimies() {
  const enemies = [
    'Kingpin', 'Bullseye', 'Elektra (complex)',
    'Hand', 'Typhoid Mary', 'Owl',
    'Gladiator', 'Stilt-Man', 'Purple Man',
    'Mysterio', 'Ikari', 'Jester',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Daredevil Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default DaredevilEnimies;
