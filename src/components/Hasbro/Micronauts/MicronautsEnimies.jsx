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
      <button onClick={() => navigate('/micronauts')}>Main</button>
      <button onClick={() => navigate('/micronautsalies')}>Allies</button>
      <button onClick={() => navigate('/micronautsenimies')}>Enemies</button>
    </nav>
  );
}

function MicronautsEnimies() {
  const enemies = [
    'Baron Karza', 'Black Knight', 'Shaitan', 'Cilicia',
    'Kronus', 'Acroyear II', 'Antron', 'Huntarr',
    'Repto', 'Microtron (corrupted)', 'Body Banks', 'Entity',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Micronauts Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default MicronautsEnimies;
