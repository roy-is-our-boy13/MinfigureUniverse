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
      <button onClick={() => navigate('/manthing')}>Main</button>
      <button onClick={() => navigate('/manthingalies')}>Allies</button>
      <button onClick={() => navigate('/manthingenimies')}>Enemies</button>
    </nav>
  );
}

function ManThingEnimies() {
  const enemies = [
    'Dormammu', 'Foom', 'Thog',
    'Roxxon', 'Zarathos', 'Nebulos',
    'D\'Spayre', 'Cult of the Darkhold', 'Joshua Kane',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Man-Thing Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ManThingEnimies;
