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
      <button onClick={() => navigate('/starfoxalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/starfoxenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function StarFox() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://seeklogo.com/images/S/starfox-logo-1E2B4889EC-seeklogo.com.png"
                className="logoSize"
                alt="Star Fox Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://ideascdn.lego.com/media/generate/lego_ci/9712042b-6ba6-4765-972d-ce4e67797377/original:0:0/webp"
              className="legoTeamFigureImage"
              alt="Star Fox Figures" />
      </div>  
      </>
    );
}
export default StarFox;