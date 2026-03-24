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
      <button onClick={() => navigate('/zelda')}>Main</button>
      <button onClick={() => navigate('/zeldaalies')}>Allies</button>
      <button onClick={() => navigate('/zeldaenimies')}>Enemies</button>
    </nav>
  );
}

function ZeldaAlies() {
  const allies = [
    'Princess Zelda', 'Impa', 'Tingle', 'Sidon',
    'Mipha', 'Daruk', 'Revali', 'Urbosa',
    'Riju', 'Yunobo', 'Teba', 'Great Fairies',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Zelda Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default ZeldaAlies;
