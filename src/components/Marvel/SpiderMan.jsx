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

function SpiderMan() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2023/02/Spiderman-Logo-1996.png"
              className="logoSize"
              alt="Spider-Man Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMWE2Y2E5ZjctZDIxOS00MjA0LWIyYTctMTIzYzkzNWFkMmM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            className="legoTeamFigureImage"
            alt="Spider-Man Figure"
          />
        </div>  
      </>
    );
}

export default SpiderMan;