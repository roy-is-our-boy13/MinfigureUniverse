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
      <button type="button" onClick={() => navigate('/spidermanfamily')}>Family</button>
      <button type="button" onClick={() => navigate('/spidermanalies')}>Allies</button>
      <button type="button" onClick={() => navigate('/spidermanenimies')}>Enemies</button>
    </nav>
  );
}

function SpiderManAlies() {
  const allies = [
    'Spider-Man',
    'Miles Morales',
    'Spider-Gwen',
    'Spider-Ham',
    'Spider-Man Noir',
    'Peni Parker',
    'Spider-Punk',
    'Cyborg Spider-Woman',
    'Spider-Byte',
    'Black Cat',
    'Silver Sable',
    'Prowler',
    'Agent Venom',
    'Toxin',
    'Solo',
    'Madam Web',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spider-Man Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default SpiderManAlies;
