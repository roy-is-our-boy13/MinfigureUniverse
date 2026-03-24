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
      <button onClick={() => navigate('/greenlantern')}>Main</button>
      <button onClick={() => navigate('/greenlanternalies')}>Allies</button>
      <button onClick={() => navigate('/greenlanternenimies')}>Enemies</button>
    </nav>
  );
}

function GreenLanternAlies() {
  const allies = [
    'Hal Jordan', 'John Stewart', 'Guy Gardner',
    'Kyle Rayner', 'Jessica Cruz', 'Simon Baz',
    'Green Lantern Corps', 'Justice League', 'Flash',
    'Kilowog', 'Sinestro (complex)', 'Carol Ferris',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Green Lantern Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default GreenLanternAlies;
