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
      <button onClick={() => navigate('/batman')}>Main</button>
      <button onClick={() => navigate('/batmanalies')}>Allies</button>
      <button onClick={() => navigate('/batmanenimies')}>Enemies</button>
    </nav>
  );
}

function BatmanEnimies() {
  const enemies = [
    'Joker', 'Riddler', 'Penguin',
    'Two-Face', 'Catwoman (complex)', 'Bane',
    'Scarecrow', 'Poison Ivy', 'Mr. Freeze',
    "Ra's al Ghul", 'Talia al Ghul', 'Court of Owls',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Batman Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default BatmanEnimies;
