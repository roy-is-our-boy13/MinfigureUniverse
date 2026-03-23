import React from 'react';
import FlashLogo from '../../assets/Logo_Icons/DC_Logos/Flash_Logo.png';
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
      <button onClick={() => navigate('/flashalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/flashenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Flash()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src={FlashLogo}
                className="logoSize"
                alt="Flash Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://superman-on-film.com/wp-content/uploads/2018/02/maxresdefault-2.jpg"
              className="legoTeamFigureImage"
              alt="The Flash Figure"
          />
        </div>  
      </>
    );
}

export default Flash;