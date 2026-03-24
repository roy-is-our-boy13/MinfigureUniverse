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
      <button onClick={() => navigate('/blade')}>Main</button>
      <button onClick={() => navigate('/bladealies')}>Allies</button>
      <button onClick={() => navigate('/bladeenimies')}>Enemies</button>
    </nav>
  );
}

function BladeAlies() {
  const allies = [
    'Whistler', 'Hannibal King', 'Abigail Whistler',
    'Dracula (temporary)', 'Spider-Man', 'Doctor Strange',
    'Nightstalkers', 'Frank Drake', 'Rachel van Helsing',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Blade Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default BladeAlies;
