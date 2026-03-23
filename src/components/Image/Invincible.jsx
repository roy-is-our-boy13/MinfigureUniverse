import React from 'react';
import { useNavigate } from 'react-router-dom';
import InvincibleLogo from '../../assets/Logo_Icons/Image_Comcis_Logos/Invincible_Logos.png';

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
      <button onClick={() => navigate('/invinciblealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/invincibleenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Invincible() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={InvincibleLogo}
            className="logoSize"
            alt="Invincible Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://minifigurebricks.com/cdn/shop/files/TP128.jpg?v=1740135420"
          className="legoTeamFigureImage"
          alt="Invincible Figure"
        />
      </div>
    </>
  );
}

export default Invincible;