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
      <button onClick={() => navigate('/shield')}>Main</button>
      <button onClick={() => navigate('/shieldalies')}>Allies</button>
      <button onClick={() => navigate('/shieldenimies')}>Enemies</button>
    </nav>
  );
}

function ShieldEnimies() {
  const enemies = [
    'Hydra', 'A.I.M.', 'Leviathan',
    'Watchdogs', 'Secret Empire', 'Modok',
    'Red Skull', 'Alexander Pierce', 'Hive',
    'Masters of Evil', 'Loki', 'Ultron',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>S.H.I.E.L.D. Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ShieldEnimies;
