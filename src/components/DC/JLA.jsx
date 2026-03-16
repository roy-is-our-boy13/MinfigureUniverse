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
      <button onClick={() => navigate('/')}>
        Heroes
      </button>
      <button onClick={() => navigate('/')}>
        Villians
      </button>
    </nav>
  );
}


function JLA() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/02/justice-league-of-america-header.jpg"
                className="logoSize"
                alt="JLA Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://veuxtoys.com/cdn/shop/files/justaceleage_1024x1024.jpg?v=1687317471"
              className="legoTeamFigureImage"
              alt="JLA Figures"
          />
        </div>  
      </>
    );
}
  export default JLA;