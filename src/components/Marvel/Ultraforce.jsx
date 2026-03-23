import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import UltraforceLogo from '../../assets/Logo_Icons/Marvel_Logos/Ultraforce_Logo.png';

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
      <button onClick={() => navigate('/Ultraforcealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/Ultraforceenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function Ultraforce()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={UltraforceLogo}
              className="logoSize"
              alt="Ultraforces Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://preview.redd.it/if-you-were-able-to-bring-back-the-ultraverse-comic-back-to-v0-a7t75ub4lxta1.jpg?auto=webp&s=071d3d57ff446782a9b4707827f427f559037eec"
            className="legoTeamFigureImage"
            alt="Ultraforce Figures"
          />
        </div>  
      </>
    );
}

export default Ultraforce;