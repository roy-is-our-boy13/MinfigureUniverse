import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/gardiansofthegalaxy')}>
        Main
      </button>
      <button onClick={() => navigate('/gardiansofthegalaxyenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function GardiansOfTheGalaxyAlies() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          Guardians of the Galaxy Allies
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        {/* Add content here */}
      </div>
    </>
  );
}

export default GardiansOfTheGalaxyAlies;
