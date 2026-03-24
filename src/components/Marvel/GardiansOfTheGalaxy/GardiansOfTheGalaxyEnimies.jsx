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
      <button onClick={() => navigate('/gardiansofthegalaxy')}>Main</button>
      <button onClick={() => navigate('/gardiansofthegalaxyalies')}>Allies</button>
      <button onClick={() => navigate('/gardiansofthegalaxyenimies')}>Enemies</button>
    </nav>
  );
}

function GardiansOfTheGalaxyEnimies() {
  const enemies = [
    'Ronan', 'Thanos', 'Ego',
    'Magus', 'Badoon', 'Sovereign',
    'High Evolutionary', 'Kree Empire', 'Abilisk',
    'Ayesha', 'Taserface', 'Yondu (past)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Guardians of the Galaxy Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default GardiansOfTheGalaxyEnimies;
