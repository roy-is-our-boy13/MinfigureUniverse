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
      <button onClick={() => navigate('/sonic')}>Main</button>
      <button onClick={() => navigate('/sonicalies')}>Allies</button>
      <button onClick={() => navigate('/sonicenimies')}>Enemies</button>
    </nav>
  );
}

function SonicEnimies() {
  const enemies = [
    'Dr. Eggman', 'Metal Sonic', 'Shadow (rival)', 'Chaos',
    'Mephiles', 'Infinite', 'Zavok', 'Deadly Six',
    'Fang the Hunter', 'Bean', 'Bark', 'E-123 Omega',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Sonic Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default SonicEnimies;
