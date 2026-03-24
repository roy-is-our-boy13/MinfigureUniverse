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
      <button onClick={() => navigate('/doompatrol')}>Main</button>
      <button onClick={() => navigate('/doompatrolalies')}>Allies</button>
      <button onClick={() => navigate('/doompatrolenimies')}>Enemies</button>
    </nav>
  );
}

function DoomPatrolAlies() {
  const allies = [
    'Robotman', 'Negative Man', 'Elasti-Girl',
    'Crazy Jane', 'Cyborg', 'Chief (Niles Caulder)',
    'Justice League', 'Danny the Street', 'Flex Mentallo',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Doom Patrol Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default DoomPatrolAlies;
