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

function BlackPantherEnimies() {
  const enemies = [
    'Killmonger', 'Klaw', 'Man-Ape',
    'Ulysses Klaue', 'White Wolf', 'Madam Slay',
    'Achebe', 'Tetu', 'Zenzi',
    'Vibraxas', 'M\'Baku (villain)', 'Erik Stevens',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Black Panther Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default BlackPantherEnimies;
