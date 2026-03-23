import React from 'react';
import GreenLanternLogo from '../../assets/Logo_Icons/DC_Logos/Green_Lantern_Logo.png';
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
      <button onClick={() => navigate('/greenlanternalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/greenlanternenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function GreenLantern() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src={GreenLanternLogo}
                className="logoSize"
                alt="Green Lantern Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://preview.redd.it/green-lantern-corps-v0-l7r799j93gvc1.jpeg?auto=webp&s=965e3886c91891ec025fb597f7803ecbdc364cfa"
              className="legoTeamFigureImage"
              alt="Green Lantern Corps Figures"
          />
        </div>  
      </>
    );
}
export default GreenLantern;