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
      <button onClick={() => navigate('/inhumans')}>Main</button>
      <button onClick={() => navigate('/inhumansalies')}>Allies</button>
      <button onClick={() => navigate('/inhumansenimies')}>Enemies</button>
    </nav>
  );
}

function InhumansEnimies() {
  const enemies = [
    'Maximus', 'Kree', 'Ennilux',
    'Alpha Primitives', 'Lash', 'Lineage',
    'Quicksilver (complex)', 'Skrulls', 'Universal Inhumans',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Inhumans Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default InhumansEnimies;
