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

function Sonja() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
             <img
                src="https://image.tmdb.org/t/p/original/edw81TOrBphCtYkfr6PTYWxPEzn.png"
                className="logoSize"
                alt="Sonja  Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://saber-scorpion.com/wp/wp-content/uploads/2016/10/redhead_savage.jpg"
            className="legoTeamFigureImage"
            alt="Red Sonja Figure"
          />
        </div>  
      </>
    );
}

export default Sonja;