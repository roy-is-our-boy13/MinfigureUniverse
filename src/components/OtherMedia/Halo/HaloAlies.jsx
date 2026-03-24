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
      <button onClick={() => navigate('/halo')}>Main</button>
      <button onClick={() => navigate('/haloalies')}>Allies</button>
      <button onClick={() => navigate('/haloenimies')}>Enemies</button>
    </nav>
  );
}

function HaloAlies() {
  const allies = [
    'Master Chief', 'Cortana', 'Sergeant Johnson', 'Arbiter',
    'Kaidan', 'Miranda Keyes', 'Blue Team', 'Fred',
    'Kelly', 'Linda', 'Noble Team', 'UNSC',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Halo Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default HaloAlies;
