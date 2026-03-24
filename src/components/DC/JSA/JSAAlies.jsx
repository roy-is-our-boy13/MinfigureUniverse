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
      <button onClick={() => navigate('/jsa')}>Main</button>
      <button onClick={() => navigate('/jsaalies')}>Allies</button>
      <button onClick={() => navigate('/jsaenimies')}>Enemies</button>
    </nav>
  );
}

function JSAAlies() {
  const allies = [
    'Superman', 'Batman', 'Wonder Woman',
    'Flash', 'Green Lantern', 'Hawkman',
    'Doctor Fate', 'Wildcat', 'Black Canary',
    'Power Girl', 'Stargirl', 'Cyclone',
    'Hourman', 'Dr. Mid-Nite', 'Sandman',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Justice Society Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JSAAlies;
