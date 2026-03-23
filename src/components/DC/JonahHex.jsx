import React from 'react';
import JonahHexLogo from '../../assets/Logo_Icons/DC_Logos/Jonah_Hex_Logo.png';
import { useNavigate, Routes, Route } from 'react-router-dom';

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

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/jonahhexalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/jonahhexenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function JonahHex()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={JonahHexLogo}
                className="logoSize"
                alt="Jonah Hex Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://www.engineerio.com/cdn/shop/files/DSCN7412_grande.jpg?v=1727292515"
              className="legoTeamFigureImage"
              alt="Jonah Hex Figure"
          />
        </div>  
      </>
    );
}

export default JonahHex;