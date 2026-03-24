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
      <button onClick={() => navigate('/rocketeer')}>Main</button>
      <button onClick={() => navigate('/rocketeeralies')}>Allies</button>
      <button onClick={() => navigate('/rocketeerenimies')}>Enemies</button>
    </nav>
  );
}

function RocketeerEnimies() {
  const enemies = [
    'Neville Sinclair', 'Eddie Valentine', 'Lothar', 'FBI (corrupt)',
    'Nazis', 'Howard Hughes (clone)', 'South Seas Gang', 'Spy Ring',
    'Rocket Thieves', 'Mob', 'Sinclair\'s Henchmen', 'Evil Rocketeer',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Rocketeer Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default RocketeerEnimies;
