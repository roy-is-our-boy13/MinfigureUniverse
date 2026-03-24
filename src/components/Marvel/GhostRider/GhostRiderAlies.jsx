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
      <button onClick={() => navigate('/ghostrider')}>Main</button>
      <button onClick={() => navigate('/ghostrideralies')}>Allies</button>
      <button onClick={() => navigate('/ghostriderenimies')}>Enemies</button>
    </nav>
  );
}

function GhostRiderAlies() {
  const allies = [
    'Danny Ketch', 'Blaze (Johnny)', 'Doctor Strange',
    'Midnight Sons', 'Daimon Hellstrom', 'Werewolf by Night',
    'Morbius', 'Vengeance', 'Carey (mechanic)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Ghost Rider Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default GhostRiderAlies;
