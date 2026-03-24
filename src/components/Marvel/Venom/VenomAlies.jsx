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

function VenomAlies() {
  const allies = [
    'Spider-Man (Eddie)', 'Flash Thompson', 'Dylan Brock',
    'Scream', 'Carnage (complex)', 'Toxin',
    'Anti-Venom', 'Knull (opposed)', 'Ravencroft',
    'Life Foundation symbiotes', 'Mercury Team', 'Avengers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Venom Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default VenomAlies;
