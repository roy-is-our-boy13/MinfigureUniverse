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
      <button onClick={() => navigate('/BoosterGold')}>Main</button>
      <button onClick={() => navigate('/BoosterGoldalies')}>Allies</button>
      <button onClick={() => navigate('/BoosterGoldenimies')}>Enemies</button>
    </nav>
  );
}

function BoosterGoldAlies() {
  const allies = [
    'Blue Beetle', 'Rip Hunter', 'Skeets',
    'Justice League', 'Time Masters', 'Superman',
    'Ted Kord', 'Fire', 'Ice',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Booster Gold Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default BoosterGoldAlies;
