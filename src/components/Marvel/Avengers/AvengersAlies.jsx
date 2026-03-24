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
      <button onClick={() => navigate('/avengers')}>Main</button>
      <button onClick={() => navigate('/avengersalies')}>Allies</button>
      <button onClick={() => navigate('/avengersenimies')}>Enemies</button>
    </nav>
  );
}

function AvengersAlies() {
  const allies = [
    'Iron Man', 'Captain America', 'Thor',
    'Hulk', 'Black Widow', 'Hawkeye',
    'Scarlet Witch', 'Vision', 'Falcon',
    'Ant-Man', 'Wasp', 'Black Panther',
    'Spider-Man', 'Doctor Strange', 'Captain Marvel',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Avengers Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default AvengersAlies;
