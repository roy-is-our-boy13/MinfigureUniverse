import React from 'react';
import ShazamLogo from '../../assets/Logo_Icons/DC_Logos/Shazam_Logo.png';
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
      <button onClick={() => navigate('/shazamalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/shazamenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Shazam() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={ShazamLogo}
                className="logoSize"
                alt="Shazam Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://live.staticflickr.com/65535/48700294002_20e70494af_b.jpg"
              className="legoTeamFigureImage"
              alt="Shazam Figure"
          />
        </div>  
      </>
    );
}
  export default Shazam;