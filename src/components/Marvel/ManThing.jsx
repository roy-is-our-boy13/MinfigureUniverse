import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ManThingLogo from '../../assets/Logo_Icons/Marvel_Logos/Man-Thing_Logo.png';

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
      <button onClick={() => navigate('/manthingalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/manthingenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function ManThing()
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={ManThingLogo}
              className="logoSize"
              alt="Man Thing Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://www.mocpixel.com/cdn/shop/files/1194_2.jpg?v=1738836461"
            className="legoTeamFigureImage"
            alt="Man Thing Figure"
          />
        </div>  
      </>
    );
}

export default ManThing;