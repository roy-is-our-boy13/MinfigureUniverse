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

function Thunderbolts()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://images.seeklogo.com/logo-png/58/2/thunderbolts-logo-png_seeklogo-582410.png"
              className="logoSize"
              alt="Thunderbolts Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://preview.redd.it/bit-late-but-i-made-the-thunderbolts-v0-fotu9nj7wx9f1.jpg?width=640&crop=smart&auto=webp&s=41d60776c0a7d56abb07b03af4e78dbb1f8473fd"
            className="legoTeamFigureImage"
            alt="Thunderbolts Figures"
          />
        </div>  
      </>
    );
}
  
export default Thunderbolts;