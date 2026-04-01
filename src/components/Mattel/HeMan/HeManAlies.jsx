import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';
import mdata from '../../../data/mattel/HeMan.json';

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
      <button onClick={() => navigate('/HeMan')}>Main</button>
      <button onClick={() => navigate('/HeManalies')}>Allies</button>
      <button onClick={() => navigate('/HeManenimies')}>Enemies</button>
    </nav>
  );
}

function HeManAlies() {

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>He-Man Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid items={mdata.allies} />
    </>
  );
}

export default HeManAlies;
