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
      <button onClick={() => navigate('/authority')}>Main</button>
      <button onClick={() => navigate('/authorityalies')}>Allies</button>
      <button onClick={() => navigate('/authorityenimies')}>Enemies</button>
    </nav>
  );
}

function AuthorityEnimies() {
  const enemies = [
    'Sliding Albion', 'Kaizen Gamorra', 'Doctor',
    'Henry Bendix', 'Changers', 'God',
    'Evil versions', 'Multiverse threats', 'The Carrier (complex)',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Authority Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default AuthorityEnimies;
