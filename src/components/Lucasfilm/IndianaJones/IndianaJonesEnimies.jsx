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
      <button onClick={() => navigate('/indianajones')}>Main</button>
      <button onClick={() => navigate('/indianajonesalies')}>Allies</button>
      <button onClick={() => navigate('/indianajonesenimies')}>Enemies</button>
    </nav>
  );
}

function IndianaJonesEnimies() {
  const enemies = [
    'René Belloq', 'Major Arnold Toht', 'Mola Ram',
    'Irina Spalko', 'Walter Donovan', 'Colonel Vogel',
    'Elsa Schneider', 'Kazim', 'Jürgen Voller',
    'Klaus Barbie', 'Nazis', 'Thuggee Cult',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Indiana Jones Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default IndianaJonesEnimies;
