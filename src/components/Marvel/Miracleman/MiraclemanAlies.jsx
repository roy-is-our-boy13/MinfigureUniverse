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

function MiraclemanAlies() {
  const allies = [
    'Young Miracleman', 'Kid Miracleman', 'Liz Moran',
    'John Bates', 'Evelyn Cream', 'Gargunza (complex)',
    'Winter', 'Avril Lear', 'Miraclewoman',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Miracleman Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MiraclemanAlies;
