import React from 'react';
import { useNavigate } from 'react-router-dom';
import DragonsLogo from '../../assets/Logo_Icons/Mattel_Logos/Dragons_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/dragonsalies')}>Allies</button>
      <button onClick={() => navigate('/dragonsenimies')}>Enemies</button>
    </nav>
  );
}

function Dragons() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={DragonsLogo}
            className="logoSize"
            alt="Dragons Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>{/* Add content here */}</div>
    </>
  );
}

export default Dragons;
