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
      <button onClick={() => navigate('/tmnt')}>Main</button>
      <button onClick={() => navigate('/tmntalies')}>Allies</button>
      <button onClick={() => navigate('/tmntenimies')}>Enemies</button>
    </nav>
  );
}

function TMNTAlies() {
  const allies = [
    'Leonardo', 'Raphael', 'Donatello', 'Michelangelo',
    'Splinter', 'April O\'Neil', 'Casey Jones', 'Fugitoid',
    'Metalhead', 'Leatherhead', 'Jennika', 'Alopex',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>TMNT Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default TMNTAlies;
