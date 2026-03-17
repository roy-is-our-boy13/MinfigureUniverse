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

function Inhumans() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://miro.medium.com/v2/resize:fit:600/1*BKEVBH3uUx5EpKAeaAIRtw.png"
              className="logoSize"
              alt="Inhumans Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://preview.redd.it/inhumans-from-marvel-v0-far2hnwvmbmb1.jpg?width=1080&crop=smart&auto=webp&s=0cec3acc6234d78dbedd4f70b2401d623f7484d2"
            className="legoTeamFigureImage"
            alt="The Inhumans Figure"
          />
        </div>  
      </>
    );
}

export default Inhumans;