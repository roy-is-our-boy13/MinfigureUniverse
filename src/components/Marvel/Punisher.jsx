import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import PunisherLogo from '../../assets/Logo_Icons/Marvel_Logos/Punisher_Logo.png';

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
      <button onClick={() => navigate('/punisheralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/punisherenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Punisher() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={PunisherLogo}
              className="logoSize"
              alt="Punisher Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.ebayimg.com/images/g/ONcAAOSw8olhQcCP/s-l1200.jpg"
            className="legoTeamFigureImage"
            alt="The Punisher Figure"
          />
        </div>  
      </>
    );
}
export default Punisher;