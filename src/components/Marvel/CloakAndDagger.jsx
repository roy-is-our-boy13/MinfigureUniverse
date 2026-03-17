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


function CloakAndDagger()
 {
    return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cloak%26Dagger.png"
            className="logoSize"
            alt="Cloak And Dagger Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://live.staticflickr.com/65535/48552036812_47d2616fd0_b.jpg"
          className="legoTeamFigureImage"
          alt="Cloak and Dagger Figures"
        />
      </div>  
    </>
    );
  }
  
  export default CloakAndDagger;