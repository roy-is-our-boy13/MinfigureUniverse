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
      <button onClick={() => navigate('/ironfist')}>Main</button>
      <button onClick={() => navigate('/ironfistalies')}>Allies</button>
      <button onClick={() => navigate('/ironfistenimies')}>Enemies</button>
    </nav>
  );
}

function IronFistAlies() {
  const allies = [
    'Luke Cage', 'Daredevil', 'Jessica Jones',
    'Colleen Wing', 'Misty Knight', 'Danny Rand (legacy)',
    'Heroes for Hire', 'Defenders', 'Shang-Chi',
    'Lei Kung', 'Orson Randall', 'Pei',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Iron Fist Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default IronFistAlies;
