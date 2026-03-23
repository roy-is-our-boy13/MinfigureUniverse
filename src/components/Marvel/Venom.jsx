import React from 'react';
import VenomLogo from '../../assets/Logo_Icons/Marvel_Logos/Venom_Logo.png';
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
      <button onClick={() => navigate('/venomalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/venomenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Venom()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src={VenomLogo}
                className="logoSize"
                alt="Venom Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://i.ebayimg.com/images/g/lJ8AAOSw4Ixlas1q/s-l1200.jpg"
              className="legoTeamFigureImage"
              alt="Venom Figure"
          />
        </div>  
      </>
    );
}

export default Venom;