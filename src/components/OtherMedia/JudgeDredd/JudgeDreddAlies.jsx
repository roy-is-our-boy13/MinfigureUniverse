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

function JudgeDreddAlies() {
  const allies = [
    'Judge Anderson', 'Judge Hershey', 'Judge Rico', 'Judge Giant',
    'Psi-Judge', 'Cadet', 'Walter the Wobot', 'Chopper',
    'Johnny Alpha', 'Strontium Dog', 'Mega-City One', 'Judge Dredd',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Judge Dredd Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JudgeDreddAlies;
