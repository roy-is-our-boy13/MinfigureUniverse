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
      <button onClick={() => navigate('/donkeykongalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/donkeykongenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function DonkeyKong() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                  src="https://seeklogo.com/images/D/donkey-kong-logo-25FF3959B2-seeklogo.com.png"
                  className="logoSize"
                  alt="Donkey Kong Logo"
              />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://static.wixstatic.com/media/43d28f_9005e3871b99426d80a23edb740b25d9~mv2.jpg/v1/fill/w_480,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/43d28f_9005e3871b99426d80a23edb740b25d9~mv2.jpg"
              className="legoTeamFigureImage"
              alt="Donkey Kong Figure" />
      </div>  
      </>
    );
}
export default DonkeyKong;