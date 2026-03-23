import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ThorLogo from '../../assets/Logo_Icons/Marvel_Logos/Thor_Logo.png';

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
      <button onClick={() => navigate('/thoralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/thorenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Thor()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={ThorLogo}
              className="logoSize"
              alt="Thor Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://brickcentral.net/wp-content/uploads/2022/02/glowingbrickette_76209_hammerminifig-864x576.jpg"
            className="legoTeamFigureImage"
            alt="Thor Figure"
          />
        </div>  
      </>
    );
}
  
export default Thor;