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
      <button onClick={() => navigate('/greenarrow')}>Main</button>
      <button onClick={() => navigate('/greenarrowalies')}>Allies</button>
      <button onClick={() => navigate('/greenarrowenimies')}>Enemies</button>
    </nav>
  );
}

function GreenArrowEnimies() {
  const enemies = [
    'Merlyn', 'Count Vertigo', 'Komodo',
    'Deathstroke', 'Onomatopoeia', 'Cupid',
    'Constantine Drakon', 'China White', 'Richard Dragon (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Green Arrow Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default GreenArrowEnimies;
