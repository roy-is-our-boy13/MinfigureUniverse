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

function MicronautsAlies() {
  const allies = [
    'Arcturus Rann', 'Marionette', 'Bug', 'Acroyear',
    'Microtron', 'Biotron', 'Photon', 'Space Glider',
    'Time Traveler', 'Baron Karza (reformed)', 'Force Commander', 'Centaurus',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Micronauts Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MicronautsAlies;
