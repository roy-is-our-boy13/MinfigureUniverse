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
      <button onClick={() => navigate('/bluebeetle')}>Main</button>
      <button onClick={() => navigate('/bluebeetlealies')}>Allies</button>
      <button onClick={() => navigate('/bluebeetleenimies')}>Enemies</button>
    </nav>
  );
}

function BlueBeetleAlies() {
  const allies = [
    'Booster Gold', 'Ted Kord (legacy)', 'Peacemaker',
    'Justice League', 'Young Justice', 'Guy Gardner',
    'Fire', 'Ice', 'Maxwell Lord (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Blue Beetle Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default BlueBeetleAlies;
