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
      <button onClick={() => navigate('/teentitans')}>Main</button>
      <button onClick={() => navigate('/teentitansalies')}>Allies</button>
      <button onClick={() => navigate('/teentitansenimies')}>Enemies</button>
    </nav>
  );
}

function TeenTitansEnimies() {
  const enemies = [
    'Slade (Deathstroke)', 'Brother Blood', 'Trigon',
    'Terra (complex)', 'HIVE', 'Blackfire',
    'Psimon', 'Mammoth', 'Gizmo',
    'Control Freak', 'Mad Mod', 'Red X',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Teen Titans Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default TeenTitansEnimies;
