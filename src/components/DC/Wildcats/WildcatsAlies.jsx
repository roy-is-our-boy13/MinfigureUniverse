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
      <button onClick={() => navigate('/wildcats')}>Main</button>
      <button onClick={() => navigate('/wildcatsalies')}>Allies</button>
      <button onClick={() => navigate('/wildcatsenimies')}>Enemies</button>
    </nav>
  );
}

function WildcatsAlies() {
  const allies = [
    'Grifter', 'Zealot', 'Voodoo',
    'Warblade', 'Maul', 'Spartan',
    'Emp', 'Savant', 'Team 7',
    'WildC.A.T.s', 'Stormwatch', 'Backlash',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Wildcats Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default WildcatsAlies;
