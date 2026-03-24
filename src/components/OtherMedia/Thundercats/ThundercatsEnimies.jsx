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
      <button onClick={() => navigate('/thundercats')}>Main</button>
      <button onClick={() => navigate('/thundercatsalies')}>Allies</button>
      <button onClick={() => navigate('/thundercatsenimies')}>Enemies</button>
    </nav>
  );
}

function ThundercatsEnimies() {
  const enemies = [
    'Mumm-Ra', 'S-S-Slithe', 'Ratar-O', 'Vultureman',
    'Jackalman', 'Monkian', 'Mutants', 'Ancient Spirits of Evil',
    'Grune', 'Luna', 'Ammok', 'Pumyra (corrupted)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Thundercats Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default ThundercatsEnimies;
