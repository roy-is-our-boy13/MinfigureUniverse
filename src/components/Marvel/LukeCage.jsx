import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import LukeCageLogo from '../../assets/Logo_Icons/Marvel_Logos/Luke_Cage_Logo.png';

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
      <button onClick={() => navigate('/lukecagealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/lukecageenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function LukeCage()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={LukeCageLogo}
              className="logoSize"
              alt="Luke Cage Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.redd.it/0a4d2vrle14b1.jpg"
            className="legoTeamFigureImage"
            alt="Luke Cage Figure"
          />
        </div>  
      </>
    );
}
  
export default LukeCage;