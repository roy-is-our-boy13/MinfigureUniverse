import React from 'react';
import { useNavigate } from 'react-router-dom';
import KamenRiderLogo from '../../assets/Logo_Icons/Toei_Logos/Kamen_Rider_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/kamenrideralies')}>
          Allies
        </button>
        <button onClick={() => navigate('/kamenriderenimies')}>
          Enemies
    </button>
    </nav>
  );
}


function KamenRider()
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src={KamenRiderLogo}
                className="logoSize"
                alt="Kamen Rider Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://pm1.aminoapps.com/6492/b982327824f53a5d147cc690b310f4830ebf4370_hq.jpg"
              className="legoTeamFigureImage"
              alt="Kamen Rider Figures" />
      </div>  
      </>
    );
}

export default KamenRider;