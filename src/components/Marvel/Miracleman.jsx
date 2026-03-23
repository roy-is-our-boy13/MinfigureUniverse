import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import MiracleManLogo from '../../assets/Logo_Icons/Marvel_Logos/MiracleMan_Logo.png';

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
      <button onClick={() => navigate('/miraclemanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/miraclemanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Miracleman()
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={MiracleManLogo}
              className="logoSize"
              alt="Miracleman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.ebayimg.com/images/g/LGAAAeSw7NRoFeNI/s-l1200.jpg"
            className="legoTeamFigureImage"
            alt="Miracleman Figure"
          />
        </div>  
      </>
    );
}

export default Miracleman;