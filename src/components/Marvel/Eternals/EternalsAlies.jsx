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
      <button onClick={() => navigate('/eternals')}>Main</button>
      <button onClick={() => navigate('/eternalsalies')}>Allies</button>
      <button onClick={() => navigate('/eternalsenimies')}>Enemies</button>
    </nav>
  );
}

function EternalsAlies() {
  const allies = [
    'Ikaris', 'Sersi', 'Thena',
    'Gilgamesh', 'Kingo', 'Sprite',
    'Makkari', 'Druig', 'Phastos',
    'Ajak', 'Dane Whitman', 'Avengers',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Eternals Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default EternalsAlies;
