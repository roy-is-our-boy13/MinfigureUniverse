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

function DaredevilAlies() {
  const allies = [
    'Elektra', 'Foggy Nelson', 'Karen Page',
    'Stick', 'Claire Temple', 'Luke Cage',
    'Iron Fist', 'Jessica Jones', 'Spider-Man',
    'Black Widow', 'Punisher', 'Blindspot',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Daredevil Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default DaredevilAlies;
