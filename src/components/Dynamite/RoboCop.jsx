import React from 'react';
import RoboCopLogo from '../../assets/Logo_Icons/Dynamite_Logos/RoboCop-Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/robocopalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/robocopenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function RoboCop()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
              <img
                src={RoboCopLogo}
                className="logoSize"
                alt="Robo Cop Logo"
              />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i0.wp.com/www.richbrix.co.uk/wp-content/uploads/2022/10/PXL_20221024_080530414-01.jpeg?fit=1262%2C1318&ssl=1"
              className="legoTeamFigureImage"
              alt="RoboCop Figure" />
      </div>  
      </>
    );
}

export default RoboCop;