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
      <button onClick={() => navigate('/terminator')}>Main</button>
      <button onClick={() => navigate('/terminatoralies')}>Allies</button>
      <button onClick={() => navigate('/terminatorenimies')}>Enemies</button>
    </nav>
  );
}

function TerminatorEnimies() {
  const enemies = [
    'Skynet', 'T-800 (enemy)', 'T-1000', 'T-X',
    'T-3000', 'Rev-9', 'HK-Tank', 'Hunter-Killer',
    'T-1000 (multiple)', 'Marcus (corrupted)', 'Legion', 'Terminators',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Terminator Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default TerminatorEnimies;
