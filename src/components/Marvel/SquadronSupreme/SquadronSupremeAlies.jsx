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
      <button onClick={() => navigate('/squadronsupreme')}>Main</button>
      <button onClick={() => navigate('/squadronsupremealies')}>Allies</button>
      <button onClick={() => navigate('/squadronsupremeenimies')}>Enemies</button>
    </nav>
  );
}

function SquadronSupremeAlies() {
  const allies = [
    'Hyperion', 'Power Princess', 'Nighthawk',
    'Doctor Spectrum', 'Whizzer', 'Amphibian',
    'Skrullian Skymaster', 'Golden Archer', 'Lady Lark',
    'Avengers', 'Squadron Sinister (alternate)', 'Blur',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Squadron Supreme Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default SquadronSupremeAlies;
