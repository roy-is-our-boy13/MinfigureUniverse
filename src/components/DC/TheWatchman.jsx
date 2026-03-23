import React from 'react';
import WatchmenLogo from '../../assets/Logo_Icons/DC_Logos/Watchmen_Logo.png';
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
      <button onClick={() => navigate('/thewatchmanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/thewatchmanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function TheWatchman() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={WatchmenLogo}
                className="logoSize"
                alt="The Watchman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://preview.redd.it/wbh2eg9n43z31.jpg?auto=webp&s=049f9b45cb7f13a435a9110984eed16ac33ed087"
              className="legoTeamFigureImage"
              alt="The Watchman Figures"
          />
        </div>  
      </>
    );
}
export default TheWatchman;