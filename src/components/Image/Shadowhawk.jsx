import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShadowHawkLogo from '../../assets/Logo_Icons/Image_Comcis_Logos/ShadowHawk_Logo.jpg';

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
      <button onClick={() => navigate('/shadownhawkalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/shadownhawkenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Shadownhawk() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={ShadowHawkLogo}
            className="logoSize"
            alt="Shadownhawk Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://nashvegasbricks.com/cdn/shop/products/57_7b96d7ee-54f6-4b75-a5a3-23f96c99dd0c.jpg?v=1634750273"
          className="legoTeamFigureImage"
          alt="Shadownhawk Figure"
        />
      </div>
    </>
  );
}

export default Shadownhawk;