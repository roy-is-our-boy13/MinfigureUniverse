import React from 'react';
import JLLogo from '../../assets/Logo_Icons/DC_Logos/Justice_League_Logo.png';
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
      <button onClick={() => navigate('/jlaalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/jlaenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function JLA() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src={JLLogo}
                className="logoSize"
                alt="JLA Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://veuxtoys.com/cdn/shop/files/justaceleage_1024x1024.jpg?v=1687317471"
              className="legoTeamFigureImage"
              alt="JLA Figures"
          />
        </div>  
      </>
    );
}
  export default JLA;