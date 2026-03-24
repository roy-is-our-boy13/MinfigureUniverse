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
      <button onClick={() => navigate('/thor')}>Main</button>
      <button onClick={() => navigate('/thoralies')}>Allies</button>
      <button onClick={() => navigate('/thorenimies')}>Enemies</button>
    </nav>
  );
}

function ThorEnimies() {
  const enemies = [
    'Loki', 'Hela', 'Surtur',
    'Malekith', 'Enchantress', 'Executioner',
    'Ulik', 'Mangog', 'Cul Borson',
    'Gorr', 'Roxxon', 'Destroyer',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Thor Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ThorEnimies;
