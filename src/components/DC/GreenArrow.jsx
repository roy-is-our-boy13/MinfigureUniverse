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

function GreenArrow() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Green_arrow_logo_2016.png"
                className="logoSize"
                alt="Green Arrow Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/07/12/1373664099000-Green-Arrow-mini-bg-1307121723_16_9.jpg?width=1748&height=989&fit=crop&format=pjpg&auto=webp"
              className="legoTeamFigureImage"
              alt="Green Arrow Figure"
          />
        </div>  
      </>
    );
}

export default GreenArrow;