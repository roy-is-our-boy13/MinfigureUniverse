import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import HulkLogo from '../../assets/Logo_Icons/Marvel_Logos/Hulk_Logo.png';

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
      <button onClick={() => navigate('/hulkalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/hulkenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Hulk()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={HulkLogo}
              className="logoSize"
              alt="Hulk Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt81f6da976343c245/Hulk-Sidekick-Tall-1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
            className="legoTeamFigureImage"
            alt="Hulk Figure"
          />
        </div>  
      </>
    );
  }
  
  export default Hulk;