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

function ManThing()
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://fbi.cults3d.com/uploaders/28312882/illustration-file/bc3bb132-3fce-4a0c-98d0-e7852a758a03/Screenshot-2025-01-14-075117.png"
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