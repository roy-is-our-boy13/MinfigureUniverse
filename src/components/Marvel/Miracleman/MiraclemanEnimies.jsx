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
      <button onClick={() => navigate('/miracleman')}>Main</button>
      <button onClick={() => navigate('/miraclemanalies')}>Allies</button>
      <button onClick={() => navigate('/miraclemanenimies')}>Enemies</button>
    </nav>
  );
}

function MiraclemanEnimies() {
  const enemies = [
    'Kid Miracleman', 'Gargunza', 'Young Miracleman (complex)',
    'Bates', 'Johnny Bates', 'Miraclewoman (complex)',
    'Winter', 'Warpsmiths', 'Qys',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Miracleman Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default MiraclemanEnimies;
