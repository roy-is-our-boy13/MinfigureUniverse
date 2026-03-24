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
      <button onClick={() => navigate('/phantomstranger')}>Main</button>
      <button onClick={() => navigate('/phantomstrangeralies')}>Allies</button>
      <button onClick={() => navigate('/phantomstrangerenimies')}>Enemies</button>
    </nav>
  );
}

function PhantomStrangerEnimies() {
  const enemies = [
    'Trinity of Sin', 'Pandora', 'Question (complex)',
    'Neron', 'First of the Fallen', 'Darkseid',
    'Anti-Monitor', 'Spectre (complex)', 'Wrath of God',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Phantom Stranger Enemies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={enemies} />
    </>
  );
}

export default PhantomStrangerEnimies;
