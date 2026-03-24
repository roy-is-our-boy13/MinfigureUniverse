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
      <button onClick={() => navigate('/romthespaceknight')}>Main</button>
      <button onClick={() => navigate('/romthespaceknightalies')}>Allies</button>
      <button onClick={() => navigate('/romthespaceknightenimies')}>Enemies</button>
    </nav>
  );
}

function RomTheSpaceKnightAlies() {
  const allies = [
    'Starshine', 'Brandy Clark', 'Steve Jackson', 'Firefall',
    'Pulse', 'Livia', 'Hybrid', 'Space Knights',
    'Galadorians', 'Dire Wraith Queen (reformed)', 'Orb', 'Lightning',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Rom the Space Knight Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default RomTheSpaceKnightAlies;
