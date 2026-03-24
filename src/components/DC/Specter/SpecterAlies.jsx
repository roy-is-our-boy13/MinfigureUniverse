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
      <button onClick={() => navigate('/specter')}>Main</button>
      <button onClick={() => navigate('/specteralies')}>Allies</button>
      <button onClick={() => navigate('/specterenimies')}>Enemies</button>
    </nav>
  );
}

function SpecterAlies() {
  const allies = [
    'Phantom Stranger', 'Doctor Fate', 'Zatanna',
    'Constantine', 'Swamp Thing', 'The Presence',
    'Justice League Dark', 'Deadman', 'Ragman',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spectre Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default SpecterAlies;
