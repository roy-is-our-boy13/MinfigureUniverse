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

function Flash()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src="https://cdn.freebiesupply.com/logos/large/2x/flash-logo-png-transparent.png"
                className="logoSize"
                alt="Flash Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://superman-on-film.com/wp-content/uploads/2018/02/maxresdefault-2.jpg"
              className="legoTeamFigureImage"
              alt="The Flash Figure"
          />
        </div>  
      </>
    );
}

export default Flash;