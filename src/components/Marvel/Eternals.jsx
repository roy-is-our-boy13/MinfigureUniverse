import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import EternalsLogo from '../../assets/Logo_Icons/Marvel_Logos/The_Eternals_Logo.png';

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
      <button onClick={() => navigate('/eternalsalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/eternalsenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Eternals() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={EternalsLogo}
              className="logoSize"
              alt="Eternals Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/2021/09/LEGO-Marvel-Eternals-Wave-Review-TIOS8-Review-2-640x360.jpg"
            className="legoTeamFigureImage"
            alt="The Eternals Team Figure"
          />
        </div>  
      </>
    );
}
export default Eternals;