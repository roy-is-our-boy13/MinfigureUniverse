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

function GreenArrowAlies() {
  const allies = [
    'Black Canary', 'Speedy', 'Roy Harper',
    'Dinah Lance', 'Oliver Queen (legacy)', 'Batman',
    'Justice League', 'Team Arrow', 'Flash',
    'Superman', 'Green Lantern', 'Huntress',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Green Arrow Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default GreenArrowAlies;
