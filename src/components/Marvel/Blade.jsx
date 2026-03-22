import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import BladeLogo from '../../assets/Logo_Icons/Marvel_Logos/Blade_Logo.png';

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
      <button onClick={() => navigate('/bladealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/bladeenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Blade() 
{
    return( 
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
         <img
            src={BladeLogo}
            className="logoSize"
            alt="Blade Logo"
        />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
              src="https://i.pinimg.com/736x/5d/14/8b/5d148be79004b6c1968443412a35aacc.jpg"
              className="legoTeamFigureImage"
              alt="Blade"
          />
      </div>  
    </>
  );
  }
  export default Blade;