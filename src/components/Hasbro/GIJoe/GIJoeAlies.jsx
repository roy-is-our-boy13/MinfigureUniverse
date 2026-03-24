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
      <button onClick={() => navigate('/gijoe')}>Main</button>
      <button onClick={() => navigate('/gijoealies')}>Allies</button>
      <button onClick={() => navigate('/gijoeenimies')}>Enemies</button>
    </nav>
  );
}

function GIJoeAlies() {
  const allies = [
    'Duke', 'Snake Eyes', 'Scarlett', 'Roadblock',
    'Lady Jaye', 'Flint', 'Gung-Ho', 'Shipwreck',
    'Beach Head', 'Tunnel Rat', 'Stalker', 'Hawk',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>G.I. Joe Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default GIJoeAlies;
