import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/fzero')}>Main</button>
      <button onClick={() => navigate('/fzeroenimies')}>Enemies</button>
    </nav>
  );
}

function FZeroAlies() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>F-Zero Allies</h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>{/* Add content here */}</div>
    </>
  );
}

export default FZeroAlies;
