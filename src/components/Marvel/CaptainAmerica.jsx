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

function CaptainAmerica()
 {
    return ( 
    <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://i.pinimg.com/474x/dd/d7/32/ddd7327b5f12eb8189890c98a2bc293f.jpg"
              className="logoSize"
              alt="Captain America Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5eYQ4kUo048yeiFvEvF8iRHvyowzf2VRcA&s"
            className="legoTeamFigureImage"
            alt="Captain America"
          />
        </div>  
      </>
  );
  }
  
  export default CaptainAmerica;