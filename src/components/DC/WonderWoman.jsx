import React from 'react';
import WonderWomanLogo from '../../assets/Logo_Icons/DC_Logos/Wonder_Woman_Logo.png';
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
      <button onClick={() => navigate('/')}>
        Heroes
      </button>
      <button onClick={() => navigate('/')}>
        Villians
      </button>
    </nav>
  );
}

function WonderWoman()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={WonderWomanLogo}
                className="logoSize"
                alt="Wonder Woman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://cdn.amightygirl.com/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/l/e/lego_ww1.jpg"
              className="legoTeamFigureImage"
              alt="Wonder Woman Figure"
          />
        </div>  
      </>
    );
}

export default WonderWoman;