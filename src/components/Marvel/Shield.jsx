import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ShieldLogo from '../../assets/Logo_Icons/Marvel_Logos/SHIELD_Logo.png';

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
      <button onClick={() => navigate('/shieldalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/shieldenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Shield()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={ShieldLogo}
              className="logoSize"
              alt="S.H.I.E.L.D Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2016/10/shield-social.jpg"
            className="legoTeamFigureImage"
            alt="Agents of SHIELD Figures"
          />
        </div>  
      </>
    );
}

export default Shield;