import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import GuardiansOfTheGalaxyLogo from '../../assets/Logo_Icons/Marvel_Logos/Guardians_of_the_Galaxy_Logo.png';

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
      <button onClick={() => navigate('/gardiansofthegalaxyalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/gardiansofthegalaxyenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function GardiansOfTheGalaxy()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={GuardiansOfTheGalaxyLogo}
              className="logoSize"
              alt="Gardians Of The Galaxy Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://live.staticflickr.com/2927/14357210314_f712c289cd_c.jpg"
            className="legoTeamFigureImage"
            alt="Gardians Of The Galaxy Team Figure"
          />
        </div>  
      </>
    );
  }
  
  export default GardiansOfTheGalaxy;