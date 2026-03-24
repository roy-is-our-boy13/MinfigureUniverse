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
      <button type="button" onClick={() => navigate('/spidermanfamily')}>Family</button>
      <button type="button" onClick={() => navigate('/spidermanalies')}>Allies</button>
      <button type="button" onClick={() => navigate('/spidermanenimies')}>Enemies</button>
    </nav>
  );
}

function SpiderManEnimies() {
  const enemies = [
    'Green Goblin', 'Doctor Octopus', 'Venom',
    'Sandman', 'Lizard', 'Electro',
    'Vulture', 'Mysterio', 'Rhino',
    'Kingpin', 'Carnage', 'Hobgoblin',
    'Scorpion', 'Chameleon', 'Kraven the Hunter',
    'Shocker', 'Jackal', 'Morlun',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spider-Man Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SpiderManEnimies;
