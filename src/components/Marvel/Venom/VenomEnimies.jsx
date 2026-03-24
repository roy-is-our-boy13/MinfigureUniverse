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
      <button onClick={() => navigate('/venom')}>Main</button>
      <button onClick={() => navigate('/venomalies')}>Allies</button>
      <button onClick={() => navigate('/venomenimies')}>Enemies</button>
    </nav>
  );
}

function VenomEnimies() {
  const enemies = [
    'Carnage', 'Knull', 'Spider-Man (past)',
    'Life Foundation', 'Scream (complex)', 'Riot',
    'Agony', 'Phage', 'Lasher',
    'Toxin (complex)', 'Hybrid', 'Anti-Venom (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Venom Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default VenomEnimies;
