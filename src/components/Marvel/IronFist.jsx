import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import IronFistLogo from '../../assets/Logo_Icons/Marvel_Logos/Iron_Fist_Logo.png';

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
      <button onClick={() => navigate('/ironfistalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/ironfistenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function IronFist()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={IronFistLogo}
              className="logoSize"
              alt="Iron Fist Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://static.herobloks.com/s/figure_images/17/3/3/id0~c3402~u1.jpg"
            className="legoTeamFigureImage"
            alt="Iron Fist Figure"
          />
        </div>  
      </>
    );
}
  
  export default IronFist;