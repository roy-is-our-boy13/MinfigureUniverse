import React from 'react';
import BlueBeetleLogo from '../../assets/Logo_Icons/DC_Logos/Blue_Beetle.png';
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
      <button onClick={() => navigate('/bluebeetlealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/bluebeetleenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function BlueBeetle() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={BlueBeetleLogo}
                className="logoSize"
                alt="Blue Beetle Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://s.ecrater.com/stores/444319/601d666e1213d_444319b.jpg"
              className="legoTeamFigureImage"
              alt="Blue Beetle Figures"
          />
        </div>  
      </>
    );
}
export default BlueBeetle;