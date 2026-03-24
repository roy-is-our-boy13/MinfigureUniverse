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
      <button onClick={() => navigate('/captainamerica')}>Main</button>
      <button onClick={() => navigate('/captainamericaalies')}>Allies</button>
      <button onClick={() => navigate('/captainamericaenimies')}>Enemies</button>
    </nav>
  );
}

function CaptainAmericaEnimies() {
  const enemies = [
    'Red Skull', 'Baron Zemo', 'Crossbones',
    'Sin', 'Arnim Zola', 'Batroc',
    'Hydra', 'A.I.M.', 'Serpent Society',
    'Flag-Smasher', 'Doctor Faustus', 'Winter Soldier (past)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Captain America Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default CaptainAmericaEnimies;
