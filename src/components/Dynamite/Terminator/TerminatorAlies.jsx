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
      <button onClick={() => navigate('/terminator')}>Main</button>
      <button onClick={() => navigate('/terminatoralies')}>Allies</button>
      <button onClick={() => navigate('/terminatorenimies')}>Enemies</button>
    </nav>
  );
}

function TerminatorAlies() {
  const allies = [
    'Sarah Connor', 'John Connor', 'Kyle Reese', 'T-800 (protector)',
    'T-1000 (reformed)', 'Kate Brewster', 'Marcus Wright', 'Grace',
    'Resistance', 'Dani Ramos', 'Carl', 'Pops',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Terminator Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default TerminatorAlies;
