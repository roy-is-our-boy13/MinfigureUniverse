import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';
import mdata from '../../../data/othermedia/JudgeDredd.json';

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

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Judge Dredd Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid items={mdata.enemies} />
    </>
  );
}

export default JudgeDreddEnimies;
