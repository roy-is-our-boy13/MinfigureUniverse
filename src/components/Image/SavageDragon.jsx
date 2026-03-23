import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavageDragonLogo from '../../assets/Logo_Icons/Image_Comcis_Logos/Savage_Dragon_Logo.png';

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
      <button onClick={() => navigate('/savagedragonalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/savagedragonenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function SavageDragon() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={SavageDragonLogo}
            className="logoSize"
            alt="Savage Dragon Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://calypsocustoms.com/cdn/shop/files/IMG_9955_2_1024x1024.jpg?v=1746985011"
          className="legoTeamFigureImage"
          alt="Savage Dragon Figure"
        />
      </div>
    </>
  );
}

export default SavageDragon;