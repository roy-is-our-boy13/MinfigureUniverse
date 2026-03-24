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
      <button onClick={() => navigate('/starwars-lucasfilm')}>Main</button>
      <button onClick={() => navigate('/starwars-lucasfilmalies')}>Allies</button>
      <button onClick={() => navigate('/starwars-lucasfilmenimies')}>Enemies</button>
    </nav>
  );
}

function StarwarsEnimies() {
  const enemies = [
    'Darth Vader', 'Emperor Palpatine', 'Darth Maul',
    'Kylo Ren', 'Count Dooku', 'General Grievous',
    'Grand Moff Tarkin', 'Boba Fett', 'Jabba the Hutt',
    'First Order', 'Sith', 'Inquisitors',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Star Wars Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default StarwarsEnimies;
