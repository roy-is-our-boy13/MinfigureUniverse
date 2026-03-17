import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                src="https://images.seeklogo.com/logo-png/55/2/kamen-rider-2020-logo-png_seeklogo-553896.png"
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
              alt="The Spcetre Figures" />
      </div>  
      </>
    );
}

export default KamenRider;