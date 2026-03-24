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
      <button onClick={() => navigate('/blackpanther')}>Main</button>
      <button onClick={() => navigate('/blackpantheralies')}>Allies</button>
      <button onClick={() => navigate('/blackpantherenimies')}>Enemies</button>
    </nav>
  );
}

function BlackPantherAlies() {
  const allies = [
    'Shuri', 'Okoye', 'Nakia',
    'M\'Baku', 'Everett Ross', 'Storm',
    'Dora Milaje', 'Zuri', 'W\'Kabi',
    'Ramonda', 'T\'Chaka', 'Killmonger (ally)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Black Panther Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default BlackPantherAlies;
