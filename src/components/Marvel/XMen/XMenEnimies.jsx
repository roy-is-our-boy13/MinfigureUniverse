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
      <button onClick={() => navigate('/xmen')}>Main</button>
      <button onClick={() => navigate('/xmenalies')}>Allies</button>
      <button onClick={() => navigate('/xmenenimies')}>Enemies</button>
    </nav>
  );
}

function XMenEnimies() {
  const enemies = [
    'Magneto', 'Brotherhood of Mutants', 'Sentinel',
    'Apocalypse', 'Mister Sinister', 'Sabretooth',
    'Juggernaut', 'Dark Phoenix', 'Hellfire Club',
    'William Stryker', 'Bolivar Trask', 'Onslaught',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>X-Men Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default XMenEnimies;
