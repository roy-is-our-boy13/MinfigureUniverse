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
      <button onClick={() => navigate('/newwarriors')}>Main</button>
      <button onClick={() => navigate('/newwarriorsalies')}>Allies</button>
      <button onClick={() => navigate('/newwarriorsenimies')}>Enemies</button>
    </nav>
  );
}

function NewWarriorsAlies() {
  const allies = [
    'Night Thrasher', 'Nova', 'Speedball',
    'Namorita', 'Firestar', 'Silhouette',
    'Justice', 'Rage', 'Darkhawk',
    'Squirrel Girl', 'Avengers', 'Fantastic Four',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>New Warriors Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default NewWarriorsAlies;
