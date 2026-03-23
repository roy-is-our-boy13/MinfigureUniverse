import React from 'react';
import SpectreLogo from '../../assets/Logo_Icons/DC_Logos/The_Spectre_Logo.png';
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
      <button onClick={() => navigate('/specteralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/specterenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Specter() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
             <img
                src={SpectreLogo}
                className="logoSize"
                alt="Spector Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_630,w_1200/v1484770873/dzvitd7fu0bqhvk06xet.jpg"
              className="legoTeamFigureImage"
              alt="The Spcetre Figures"
          />
        </div>  
      </>
    );

}
export default Specter;