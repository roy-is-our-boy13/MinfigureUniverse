import React from 'react';
import { useNavigate } from 'react-router-dom';
import WitchbladeLogo from '../../assets/Logo_Icons/Image_Comcis_Logos/Witchblade_Logo.png';

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
      <button onClick={() => navigate('/witchbladealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/witchbladeenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Witchblade() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={WitchbladeLogo}
            className="logoSize"
            alt="Witchblade Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://i.ebayimg.com/images/g/9g0AAOSweqFjxJ9M/s-l400.jpg"
          className="legoTeamFigureImage"
          alt="Witchblade Figure"
        />
      </div>
    </>
  );
}

export default Witchblade;