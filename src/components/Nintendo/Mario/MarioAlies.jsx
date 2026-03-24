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
      <button onClick={() => navigate('/mario')}>Main</button>
      <button onClick={() => navigate('/marioalies')}>Allies</button>
      <button onClick={() => navigate('/marioenimies')}>Enemies</button>
    </nav>
  );
}

function MarioAlies() {
  const allies = [
    'Luigi', 'Princess Peach', 'Toad', 'Yoshi',
    'Rosalina', 'Daisy', 'Toadette', 'Captain Toad',
    'Birdo', 'Pauline', 'Cappy', 'Luma',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Mario Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MarioAlies;
