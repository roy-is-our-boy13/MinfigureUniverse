import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

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
      <button onClick={() => navigate('/alphaflightalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/alphaflightenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function AlphaFlight()
{

    return( 
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://insidepulse.com/wp-content/uploads/2023/04/Alpha-Flight-logo-dark.png"
              className="logoBorder"
              alt="Alpha Flight Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://pbs.twimg.com/media/C_99JXgV0AAH-6T?format=jpg&name=large"
            className="legoTeamFigureImage"
            alt="Alpha Flight Team"
          />
        </div>  
      </>  
      );
}

export default AlphaFlight;