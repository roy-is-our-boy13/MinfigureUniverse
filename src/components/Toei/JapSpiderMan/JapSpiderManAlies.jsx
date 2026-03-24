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
      <button onClick={() => navigate('/japspiderman')}>Main</button>
      <button onClick={() => navigate('/japspidermanalies')}>Allies</button>
      <button onClick={() => navigate('/japspidermanenimies')}>Enemies</button>
    </nav>
  );
}

function JapSpiderManAlies() {
  const allies = [
    'Takuya Yamashiro', 'Professor Monster', 'Hitomi Sakuma', 'Shiro',
    'Leopardon', 'Spider-Man (Marvel)', 'Iron Man', 'Captain America',
    'Spider-Verse', 'Amazoness', 'Garia', 'EMISSARY FROM HELL',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Japanese Spider-Man Allies</h2>
        <NavigationMenu />
      </div>
      <CharacterPhotoGrid names={allies} />
    </>
  );
}

export default JapSpiderManAlies;
