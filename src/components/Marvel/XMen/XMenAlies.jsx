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
      <button onClick={() => navigate('/xmen')}>Main</button>
      <button onClick={() => navigate('/xmenalies')}>Allies</button>
      <button onClick={() => navigate('/xmenenimies')}>Enemies</button>
    </nav>
  );
}

function XMenAlies() {
  const allies = [
    'Professor X', 'Cyclops', 'Jean Grey',
    'Wolverine', 'Storm', 'Beast',
    'Nightcrawler', 'Colossus', 'Rogue',
    'Gambit', 'Jubilee', 'Kitty Pryde',
    'Magneto (complex)', 'Brotherhood', 'Avengers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>X-Men Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default XMenAlies;
