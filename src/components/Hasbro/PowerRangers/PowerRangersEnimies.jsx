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
      <button onClick={() => navigate('/powerrangers')}>Main</button>
      <button onClick={() => navigate('/powerrangersalies')}>Allies</button>
      <button onClick={() => navigate('/powerrangersenimies')}>Enemies</button>
    </nav>
  );
}

function PowerRangersEnimies() {
  const enemies = [
    'Rita Repulsa', 'Lord Zedd', 'Goldar', 'Finster',
    'Scorpina', 'Rito Revolto', 'Ivan Ooze', 'Divatox',
    'Mesogog', 'Lothor', 'Putty Patrollers', 'Tengas',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Power Rangers Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default PowerRangersEnimies;
