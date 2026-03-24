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
      <button onClick={() => navigate('/deadpool')}>Main</button>
      <button onClick={() => navigate('/deadpoolalies')}>Allies</button>
      <button onClick={() => navigate('/deadpoolenimies')}>Enemies</button>
    </nav>
  );
}

function DeadpoolAlies() {
  const allies = [
    'Cable', 'Domino', 'Weasel',
    'Bob (Hydra)', 'Spider-Man', 'Wolverine',
    'X-Force', 'Siryn', 'Blind Al',
    'Negasonic Teenage Warhead', 'Colossus', 'Copycat',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Deadpool Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default DeadpoolAlies;
