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
      <button onClick={() => navigate('/kirby')}>Main</button>
      <button onClick={() => navigate('/kirbyalies')}>Allies</button>
      <button onClick={() => navigate('/kirbyenimies')}>Enemies</button>
    </nav>
  );
}

function KirbyEnimies() {
  const enemies = [
    'Dark Matter', 'Nightmare', 'Marx', 'Zero',
    'Zero Two', 'Magolor', 'Queen Sectonia', 'Hyness',
    'Fecto Elfilis', 'Waddle Dee (enemy)', 'Whispy Woods', 'Kracko',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Kirby Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default KirbyEnimies;
