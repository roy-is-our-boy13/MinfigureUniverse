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
      <button onClick={() => navigate('/witchblade')}>Main</button>
      <button onClick={() => navigate('/witchbladealies')}>Allies</button>
      <button onClick={() => navigate('/witchbladeenimies')}>Enemies</button>
    </nav>
  );
}

function WitchbladeEnimies() {
  const enemies = [
    'Darkness', 'Ian Nottingham', 'Kennedy (complex)',
    'Curator', 'Rapture', 'Concrete Jungle',
    'Undead', 'Yin Yang', 'Fallen Angel',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Witchblade Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default WitchbladeEnimies;
