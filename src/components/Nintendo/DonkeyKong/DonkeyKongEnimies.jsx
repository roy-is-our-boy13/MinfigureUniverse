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
      <button onClick={() => navigate('/donkeykong')}>Main</button>
      <button onClick={() => navigate('/donkeykongalies')}>Allies</button>
      <button onClick={() => navigate('/donkeykongenimies')}>Enemies</button>
    </nav>
  );
}

function DonkeyKongEnimies() {
  const enemies = [
    'King K. Rool', 'Kremlings', 'Kritters', 'Klump',
    'Krusha', 'Tiki Tong', 'Lord Fredrik', 'Snapjaw',
    'Zingers', 'Gnawty', 'Army', 'Baron K. Roolenstein',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Donkey Kong Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default DonkeyKongEnimies;
