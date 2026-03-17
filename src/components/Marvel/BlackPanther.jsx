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
      <button onClick={() => navigate('/blackpantheralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/blackpantherenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function BlackPanther() 
{
    return (
     <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://media.licdn.com/dms/image/v2/C4D08AQGOV0tU9EEZ6Q/croft-frontend-shrinkToFit1024/croft-frontend-shrinkToFit1024/0/1597380334285?e=2147483647&v=beta&t=AfSO-vFM-nzyssDFJlKdeZev6KopyfYOyAKKLUCEghc"
              className="logoSize"
              alt="Black Panther Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://m.media-amazon.com/images/I/51+uRGY7F+L.jpg"
            className="legoTeamFigureImage"
            alt="The Black Panther"
          />
        </div>  
      </>
    );
  }
  
  export default BlackPanther;
  