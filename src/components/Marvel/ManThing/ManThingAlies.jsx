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
      <button onClick={() => navigate('/manthing')}>Main</button>
      <button onClick={() => navigate('/manthingalies')}>Allies</button>
      <button onClick={() => navigate('/manthingenimies')}>Enemies</button>
    </nav>
  );
}

function ManThingAlies() {
  const allies = [
    'Howard the Duck', 'Doctor Strange', 'Wong',
    'Jennifer Kale', 'Thog', 'S.H.I.E.L.D.',
    'Defenders', 'Midnight Sons', 'Ted Sallis (legacy)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Man-Thing Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default ManThingAlies;
