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
      <button onClick={() => navigate('/Ultraforce')}>Main</button>
      <button onClick={() => navigate('/Ultraforcealies')}>Allies</button>
      <button onClick={() => navigate('/Ultraforceenimies')}>Enemies</button>
    </nav>
  );
}

function UltraforceAlies() {
  const allies = [
    'Hardcase', 'Prime', 'Prototype',
    'Ghoul', 'Topaz', 'Contrary',
    'Black Knight', 'Sect', 'Wraith',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Ultraforce Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default UltraforceAlies;
