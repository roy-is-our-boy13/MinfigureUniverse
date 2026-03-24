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
      <button onClick={() => navigate('/fantasticfour')}>Main</button>
      <button onClick={() => navigate('/fantasticfouralies')}>Allies</button>
      <button onClick={() => navigate('/fantasticfourenimies')}>Enemies</button>
    </nav>
  );
}

function FantasticFourAlies() {
  const allies = [
    'Mr. Fantastic', 'Invisible Woman', 'Human Torch',
    'The Thing', 'Silver Surfer', 'Franklin Richards',
    'Valeria Richards', 'Alicia Masters', 'Crystal',
    'Medusa', 'Black Panther', 'Spider-Man',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Fantastic Four Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default FantasticFourAlies;
