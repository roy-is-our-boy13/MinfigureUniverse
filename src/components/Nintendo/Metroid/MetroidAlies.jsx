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
      <button onClick={() => navigate('/metroid')}>Main</button>
      <button onClick={() => navigate('/metroidalies')}>Allies</button>
      <button onClick={() => navigate('/metroidenimies')}>Enemies</button>
    </nav>
  );
}

function MetroidAlies() {
  const allies = [
    'Adam Malkovich', 'Anthony Higgs', 'Federation Troopers', 'Luminoth',
    'Elysia', 'Aurora Unit', 'Sylux', 'Rundas',
    'Ghor', 'Gandrayda', 'Samus (Zero Suit)', 'Baby Metroid',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Metroid Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MetroidAlies;
