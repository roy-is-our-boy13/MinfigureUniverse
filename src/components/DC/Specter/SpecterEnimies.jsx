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
      <button onClick={() => navigate('/specter')}>Main</button>
      <button onClick={() => navigate('/specteralies')}>Allies</button>
      <button onClick={() => navigate('/specterenimies')}>Enemies</button>
    </nav>
  );
}

function SpecterEnimies() {
  const enemies = [
    'Asmodel', 'Neron', 'Eclipso',
    'First of the Fallen', 'Lucifer', 'Anti-Monitor',
    'Parallax', 'Black Lanterns', 'Crimson Avenger (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spectre Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SpecterEnimies;
