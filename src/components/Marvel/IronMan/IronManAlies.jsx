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
      <button onClick={() => navigate('/ironman')}>Main</button>
      <button onClick={() => navigate('/ironmanalies')}>Allies</button>
      <button onClick={() => navigate('/ironmanenimies')}>Enemies</button>
    </nav>
  );
}

function IronManAlies() {
  const allies = [
    'War Machine', 'Pepper Potts', 'Happy Hogan',
    'Captain America', 'Black Widow', 'Spider-Man',
    'Avengers', 'Rescue', 'J.A.R.V.I.S. / Friday',
    'Nick Fury', 'Maria Hill', 'Hulk',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Iron Man Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default IronManAlies;
