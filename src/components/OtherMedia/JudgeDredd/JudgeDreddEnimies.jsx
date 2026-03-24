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
      <button onClick={() => navigate('/judgedredd')}>Main</button>
      <button onClick={() => navigate('/judgedreddalies')}>Allies</button>
      <button onClick={() => navigate('/judgedreddenimies')}>Enemies</button>
    </nav>
  );
}

function JudgeDreddEnimies() {
  const enemies = [
    'Judge Death', 'Judge Fear', 'Judge Fire', 'Judge Mortis',
    'Mean Machine', 'Judge Cal', 'Block Mania', 'Chief Judge Cal',
    'Dark Judges', 'Demons', 'Cursed Earth', 'Mega-City Criminals',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Judge Dredd Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default JudgeDreddEnimies;
