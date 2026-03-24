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
      <button onClick={() => navigate('/wonderwoman')}>Main</button>
      <button onClick={() => navigate('/wonderwomanalies')}>Allies</button>
      <button onClick={() => navigate('/wonderwomanenimies')}>Enemies</button>
    </nav>
  );
}

function WonderWomanAlies() {
  const allies = [
    'Steve Trevor', 'Etta Candy', 'Hippolyta',
    'Batman', 'Superman', 'Flash',
    'Justice League', 'Amazons', 'Donna Troy',
    'Wonder Girl', 'Nubia', 'Artemis',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Wonder Woman Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default WonderWomanAlies;
