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
      <button onClick={() => navigate('/jessicajones')}>Main</button>
      <button onClick={() => navigate('/jessicajonesalies')}>Allies</button>
      <button onClick={() => navigate('/jessicajonesenimies')}>Enemies</button>
    </nav>
  );
}

function JessicaJonesAlies() {
  const allies = [
    'Luke Cage', 'Daredevil', 'Iron Fist',
    'Trish Walker', 'Carol Danvers', 'Spider-Woman',
    'Defenders', 'Malcolm Ducasse', 'Jeri Hogarth',
    'Danny Rand', 'Misty Knight', 'Colleen Wing',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Jessica Jones Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JessicaJonesAlies;
