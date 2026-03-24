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
      <button onClick={() => navigate('/legionofsuperheroes')}>Main</button>
      <button onClick={() => navigate('/legionofsuperheroesalies')}>Allies</button>
      <button onClick={() => navigate('/legionofsuperheroesenimies')}>Enemies</button>
    </nav>
  );
}

function LegionOfSuperheroesAlies() {
  const allies = [
    'Superboy', 'Saturn Girl', 'Cosmic Boy',
    'Lightning Lad', 'Brainiac 5', 'Chameleon Boy',
    'Phantom Girl', 'Ultra Boy', 'Mon-El',
    'Shadow Lass', 'Dream Girl', 'Star Boy',
    'Timber Wolf', 'Wildfire', 'Dawnstar',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Legion of Super-Heroes Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default LegionOfSuperheroesAlies;
