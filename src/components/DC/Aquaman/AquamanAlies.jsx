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
      <button onClick={() => navigate('/aquaman')}>Main</button>
      <button onClick={() => navigate('/aquamanalies')}>Allies</button>
      <button onClick={() => navigate('/aquamanenimies')}>Enemies</button>
    </nav>
  );
}

function AquamanAlies() {
  const allies = [
    'Mera', 'Vulko', 'Tempest',
    'Dolphin', 'Aquagirl', 'Aqualad',
    'Justice League', 'Atlantean Guard', 'King Nereus',
    'Black Manta (complex)', 'Ocean Master (complex)', 'Swamp Thing',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Aquaman Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default AquamanAlies;
