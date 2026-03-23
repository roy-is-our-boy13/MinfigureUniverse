import React from 'react';
import DoomPatrolLogo from '../../assets/Logo_Icons/DC_Logos/Doom_Patrol.png';
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
      <button onClick={() => navigate('/doompatrolalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/doompatrolenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function DoomPatrol()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={DoomPatrolLogo}
                className="logoSize"
                alt="Doom Patrol Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://live.staticflickr.com/7538/16127419880_f36fb5dc14_b.jpg"
              className="legoTeamFigureImage"
              alt="Doom Patrol Figures"
          />
        </div>  
      </>
    );
}

export default DoomPatrol;