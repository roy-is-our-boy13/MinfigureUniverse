import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import GhostRiderLogo from '../../assets/Logo_Icons/Marvel_Logos/Ghost_Rider_Logo.png';

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
      <button onClick={() => navigate('/ghostrideralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/ghostriderenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function GhostRider()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={GhostRiderLogo}
              className="logoSize"
              alt="Ghost Rider Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.ytimg.com/vi/SHHZSjDnJh4/maxresdefault.jpg"
            className="legoTeamFigureImage"
            alt="Ghost Rider Figure"
          />
        </div>  
      </>
    );
}
  
export default GhostRider;