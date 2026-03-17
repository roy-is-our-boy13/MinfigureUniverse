import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/transformers')}>Main</button>
      <button onClick={() => navigate('/transformersalies')}>Allies</button>
    </nav>
  );
}

function TransformersEnimies() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Transformers Enemies</h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>{/* Add content here */}</div>
    </>
  );
}

export default TransformersEnimies;
