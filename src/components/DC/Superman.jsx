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
      <button onClick={() => navigate('/supermanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/supermanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Superman() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/superman-1-logo-svg-vector.svg"
                className="logoSize"
                alt="Superman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://live.staticflickr.com/7031/6717166569_6e01fb5e0a_b.jpg"
              className="legoTeamFigureImage"
              alt="Superman Figure"
          />
        </div>  
      </>
    );
}
export default Superman;