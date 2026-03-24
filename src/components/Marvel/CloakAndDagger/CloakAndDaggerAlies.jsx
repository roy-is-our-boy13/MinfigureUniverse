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
      <button onClick={() => navigate('/cloakanddagger')}>Main</button>
      <button onClick={() => navigate('/cloakanddaggeralies')}>Allies</button>
      <button onClick={() => navigate('/cloakanddaggerenimies')}>Enemies</button>
    </nav>
  );
}

function CloakAndDaggerAlies() {
  const allies = [
    'Spider-Man', 'Runaways', 'New Mutants',
    'Doctor Strange', 'Brigid O\'Reilly', 'Mayhem',
    'Father Delgado', 'Tandy\'s mother', 'Tyrone\'s family',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Cloak and Dagger Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default CloakAndDaggerAlies;
