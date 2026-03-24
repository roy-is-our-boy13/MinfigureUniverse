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
      <button onClick={() => navigate('/kamenrider')}>Main</button>
      <button onClick={() => navigate('/kamenrideralies')}>Allies</button>
      <button onClick={() => navigate('/kamenriderenimies')}>Enemies</button>
    </nav>
  );
}

function KamenRiderAlies() {
  const allies = [
    'Kamen Rider Ichigo', 'Kamen Rider Nigo', 'Rider 1', 'Rider 2',
    'Kamen Rider Black', 'Kamen Rider Kuuga', 'Kamen Rider Agito', 'Kamen Rider Ryuki',
    'Kamen Rider Faiz', 'Kamen Rider Den-O', 'Kamen Rider Decade', 'Kamen Rider Zero-One',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Kamen Rider Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default KamenRiderAlies;
