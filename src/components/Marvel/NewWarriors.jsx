import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import NewWarriorsLogo from '../../assets/Logo_Icons/Marvel_Logos/New_Warriors_Logo.png';

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
      <button onClick={() => navigate('/newwarriorsalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/newwarriorsenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function NewWarriors()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={NewWarriorsLogo}
              className="logoSize"
              alt="New Warriors Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://live.staticflickr.com/65535/51357353711_b057e4b9ba_b.jpg"
            className="legoTeamFigureImage"
            alt="The New Warriors Figures"
          />
        </div>  
      </>
    );
}

export default NewWarriors;