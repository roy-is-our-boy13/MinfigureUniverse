import React from 'react';
import BatmanLogo from '../../assets/Logo_Icons/DC_Logos/Batman_Logo.png';
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
      <button onClick={() => navigate('/batmanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/batmanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Batman() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={BatmanLogo}
                className="logoSize"
                alt="Batman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"
              className="legoTeamFigureImage"
              alt="Batman Figure"
          />
        </div>  
      </>
    );
  }

export default Batman;