import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/blokbotsalies')}>Allies</button>
      <button onClick={() => navigate('/blokbotsenimies')}>Enemies</button>
    </nav>
  );
}

function BlokBots() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Blok Bots</h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>{/* Add content here */}</div>
    </>
  );
}

export default BlokBots;
