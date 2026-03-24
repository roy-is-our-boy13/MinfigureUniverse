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
      <button onClick={() => navigate('/starwars-lucasfilm')}>Main</button>
      <button onClick={() => navigate('/starwars-lucasfilmalies')}>Allies</button>
      <button onClick={() => navigate('/starwars-lucasfilmenimies')}>Enemies</button>
    </nav>
  );
}

function StarwarsAlies() {
  const allies = [
    'Luke Skywalker', 'Leia Organa', 'Han Solo',
    'Chewbacca', 'R2-D2', 'C-3PO',
    'Yoda', 'Obi-Wan Kenobi', 'Rey',
    'Finn', 'Poe Dameron', 'Ahsoka Tano',
    'Mandalorian', 'Grogu', 'Jedi Order',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Star Wars Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default StarwarsAlies;
