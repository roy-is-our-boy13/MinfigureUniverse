import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';
import mdata from '../../../data/image/Witchblade.json';

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
      <button onClick={() => navigate('/witchblade')}>Main</button>
      <button onClick={() => navigate('/witchbladealies')}>Allies</button>
      <button onClick={() => navigate('/witchbladeenimies')}>Enemies</button>
    </nav>
  );
}

function WitchbladeAlies() {

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Witchblade Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid items={mdata.allies} />
    </>
  );
}

export default WitchbladeAlies;
