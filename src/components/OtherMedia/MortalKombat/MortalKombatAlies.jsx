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
      <button onClick={() => navigate('/mortalkombat')}>Main</button>
      <button onClick={() => navigate('/mortalkombatalies')}>Allies</button>
      <button onClick={() => navigate('/mortalkombatenimies')}>Enemies</button>
    </nav>
  );
}

function MortalKombatAlies() {
  const allies = [
    'Liu Kang', 'Raiden', 'Johnny Cage', 'Sonya Blade',
    'Jax Briggs', 'Kung Lao', 'Kitana', 'Jade',
    'Sub-Zero', 'Scorpion (ally)', 'Nightwolf', 'Earthrealm',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Mortal Kombat Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default MortalKombatAlies;
