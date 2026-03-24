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
      <button onClick={() => navigate('/scoobydoo')}>Main</button>
      <button onClick={() => navigate('/scoobydooalies')}>Allies</button>
      <button onClick={() => navigate('/scoobydooenimies')}>Enemies</button>
    </nav>
  );
}

function ScoobyDooAlies() {
  const allies = [
    'Shaggy', 'Fred', 'Daphne', 'Velma',
    'Scrappy-Doo', 'Scooby-Dum', 'Hex Girls', 'Vincent Van Ghoul',
    'Mystery Inc.', 'Blue Falcon', 'Dynomutt', 'Captain Caveman',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Scooby-Doo Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default ScoobyDooAlies;
