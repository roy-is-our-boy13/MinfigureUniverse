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
      <button onClick={() => navigate('/constantine')}>Main</button>
      <button onClick={() => navigate('/constantinealies')}>Allies</button>
      <button onClick={() => navigate('/constantineenimies')}>Enemies</button>
    </nav>
  );
}

function ConstantineAlies() {
  const allies = [
    'Chas Chandler', 'Zatanna', 'Swamp Thing',
    'Deadman', 'Doctor Fate', 'Phantom Stranger',
    'Justice League Dark', 'Etrigan', 'Papa Midnite',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Constantine Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default ConstantineAlies;
