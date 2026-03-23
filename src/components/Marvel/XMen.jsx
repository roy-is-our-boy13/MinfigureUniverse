import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import XMenLogo from '../../assets/Logo_Icons/Marvel_Logos/X-Men_Logo.png';

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

function XMen() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
              src={XMenLogo}
              className="logoSize"
              alt="X-Men Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://preview.redd.it/lego-x-men-v0-my2xn4h1w90b1.jpg?width=640&crop=smart&auto=webp&s=147587d3caeefce6dccb196a2e6496e223700121"
              className="legoTeamFigureImage"
              alt="X-Men Figures"
          />
        </div>  
      </>
    );
}

export default XMen;