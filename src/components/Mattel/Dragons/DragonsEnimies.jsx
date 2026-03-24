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
      <button onClick={() => navigate('/dragons')}>Main</button>
      <button onClick={() => navigate('/dragonsalies')}>Allies</button>
      <button onClick={() => navigate('/dragonsenimies')}>Enemies</button>
    </nav>
  );
}

function DragonsEnimies() {
  const enemies = [
    'Drago Bludvist', 'Red Death', 'Bewilderbeast', 'Dagur',
    'Alvin the Treacherous', 'Viggo Grimborn', 'Ryker', 'Krogan',
    'Grimmel', 'Deathgrippers', 'Dragon Hunters', 'Outcasts',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Dragons Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default DragonsEnimies;
