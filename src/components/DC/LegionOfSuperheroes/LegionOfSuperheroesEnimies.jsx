import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';
import mdata from '../../../data/dc/LegionOfSuperheroes.json';

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
      <button onClick={() => navigate('/legionofsuperheroes')}>Main</button>
      <button onClick={() => navigate('/legionofsuperheroesalies')}>Allies</button>
      <button onClick={() => navigate('/legionofsuperheroesenimies')}>Enemies</button>
    </nav>
  );
}

function LegionOfSuperheroesEnimies() {

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Legion of Super-Heroes Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid items={mdata.enemies} />
    </>
  );
}

export default LegionOfSuperheroesEnimies;
