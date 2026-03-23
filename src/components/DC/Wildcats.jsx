import React from 'react';
import WildcatsLogo from '../../assets/Logo_Icons/DC_Logos/WildCATs_Logo.png';
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
      <button onClick={() => navigate('/wildcatsalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/wildcatsenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Wildcats()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={WildcatsLogo}
                className="logoSize"
                alt="Wildcats Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://i.redd.it/bcfsfdvd2rh91.jpg"
              className="legoTeamFigureImage"
              alt="The W.I.L.D Cats Figures"
          />
        </div>  
      </>
    );
}

export default Wildcats;