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
      <button onClick={() => navigate('/romthespaceknight')}>Main</button>
      <button onClick={() => navigate('/romthespaceknightalies')}>Allies</button>
      <button onClick={() => navigate('/romthespaceknightenimies')}>Enemies</button>
    </nav>
  );
}

function RomTheSpaceKnightEnimies() {
  const enemies = [
    'Dire Wraiths', 'Wraith Lord', 'Hybrid', 'Dirk Morgna',
    'Space Phantom', 'Morbius', 'Dire Wraith Queen', 'Starshine (corrupted)',
    'Wraith Witches', 'Wraith Knights', 'Galadorian Renegades', 'Dragon',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Rom the Space Knight Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default RomTheSpaceKnightEnimies;
