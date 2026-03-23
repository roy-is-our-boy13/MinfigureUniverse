import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarWarsLogo from '../../assets/Logo_Icons/Lucasfilm_Logos/Star_Wars_Logo.png';

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
      <button onClick={() => navigate('/starwars-lucasfilmalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/starwars-lucasfilmenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Starwars() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={StarWarsLogo}
            className="logoSize"
            alt="Star Wars Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://store-images.s-microsoft.com/image/apps.7707.63225107553541752.1c540946-cc4f-4e0f-aca3-13134473f9ad.8b2bd4ac-3914-43ec-b6e6-e91eb58d405b?q=90&w=480&h=270"
          className="legoTeamFigureImage"
          alt="Star Wars Gang Figures"
        />
      </div>
    </>
  );
}

export default Starwars;