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
      <button onClick={() => navigate('/sonja')}>Main</button>
      <button onClick={() => navigate('/sonjaalies')}>Allies</button>
      <button onClick={() => navigate('/sonjaenimies')}>Enemies</button>
    </nav>
  );
}

function SonjaAlies() {
  const allies = [
    'Conan', 'Osin', 'Annisia', 'Drax',
    'Savage Sword', 'Red Sonja (variant)', 'Howard', 'Bêlit',
    'Valeria', 'Kulan Gath (ally)', 'Thoth-Amon (ally)', 'Marvel Heroes',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Red Sonja Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default SonjaAlies;
