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
      <button onClick={() => navigate('/ironmanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/ironmanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function IronMan() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Iron-Man-Logo.png"
              className="logoSize"
              alt="Iron Man Logo"  
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://www.lego.com/cdn/cs/set/assets/bltfd0a02fe95ebbe70/CP_IronMan_Sidekick-Tall2.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
            className="legoTeamFigureImage"
            alt="Iron Man Figure"
          />
        </div>  
      </>
    );
}

export default IronMan;