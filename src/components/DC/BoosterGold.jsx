import React from 'react';
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
      <button onClick={() => navigate('/BoosterGoldalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/BoosterGoldenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function BoosterGold()
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://i0.wp.com/earth7269.files.wordpress.com/2017/02/boostergoldlogo.jpg?w=674"
                className="logoSize"
                alt="Booster Gold Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://static.herobloks.com/x/figure_images/18/1/2/id12481~c23908~u1-4.jpg"
              className="legoTeamFigureImage"
              alt="Booster Gold Figure"
          />
        </div>  
      </>
    );
}

export default BoosterGold;