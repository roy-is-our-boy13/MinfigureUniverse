import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterPhotoGrid from '../../CharacterPhotoGrid';
import mdata from '../../../data/nintendo/Pokémon.json';

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
      <button onClick={() => navigate('/pokémon')}>Main</button>
      <button onClick={() => navigate('/pokémonalies')}>Allies</button>
      <button onClick={() => navigate('/pokémonenimies')}>Enemies</button>
    </nav>
  );
}

function PokémonEnimies() {

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Pokémon Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid items={mdata.enemies} />
    </>
  );
}

export default PokémonEnimies;
