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
      <button onClick={() => navigate('/pokémon')}>Main</button>
      <button onClick={() => navigate('/pokémonalies')}>Allies</button>
      <button onClick={() => navigate('/pokémonenimies')}>Enemies</button>
    </nav>
  );
}

function PokémonAlies() {
  const allies = [
    'Pikachu', 'Ash', 'Misty', 'Brock',
    'Professor Oak', 'Nurse Joy', 'Officer Jenny', 'Team Rocket (Jessie & James)',
    'Cynthia', 'Steven', 'Lance', 'Elite Four',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Pokémon Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default PokémonAlies;
