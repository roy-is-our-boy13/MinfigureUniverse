import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import SquadronSupremeLogo from '../../assets/Logo_Icons/Marvel_Logos/Squadron_Supreme_Logo.png';

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
      <button onClick={() => navigate('/squadronsupremealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/squadronsupremeenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function SquadronSupreme() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={SquadronSupremeLogo}
              className="logoSize"
              alt="Squadron Supreme Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://live.staticflickr.com/4887/46074941651_f6ba76eb8b_c.jpg"
            className="legoTeamFigureImage"
            alt="Squadron Supreme Figures"
          />
        </div>  
      </>
    );
  
}
export default SquadronSupreme;