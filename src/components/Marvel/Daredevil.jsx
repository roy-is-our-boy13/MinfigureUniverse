import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import DaredevilLogo from '../../assets/Logo_Icons/Marvel_Logos/Daredevil_Logo.png';

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
      <button onClick={() => navigate('/daredevilalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/daredevilenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Daredevil()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={DaredevilLogo}
              className="logoSize"
              alt="Daredevil Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.pinimg.com/736x/fc/a5/13/fca513ac2f1a41b0e2cd9620294c5cba.jpg"
            className="legoTeamFigureImage"
            alt="Daredevil Figure"
          />
        </div>  
      </>
    );
  }
  
  export default Daredevil;