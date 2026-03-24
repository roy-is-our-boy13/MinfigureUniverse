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
      <button onClick={() => navigate('/fantasticfour')}>Main</button>
      <button onClick={() => navigate('/fantasticfouralies')}>Allies</button>
      <button onClick={() => navigate('/fantasticfourenimies')}>Enemies</button>
    </nav>
  );
}

function FantasticFourEnimies() {
  const enemies = [
    'Doctor Doom', 'Galactus', 'Super-Skrull',
    'Annihilus', 'Mole Man', 'Puppet Master',
    'Kang', 'Frightful Four', 'Molecule Man',
    'Namor (complex)', 'Blastaar', 'Terrax',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Fantastic Four Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default FantasticFourEnimies;
