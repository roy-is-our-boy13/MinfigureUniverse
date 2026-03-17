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
      <button onClick={() => navigate('/thundercatsalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/thundercatsenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function ThundercatsFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://1000logos.net/wp-content/uploads/2023/07/ThunderCats-Logo-1985.png"
                className="logoSize"
                alt="Thundercats Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://ideascdn.lego.com/media/generate/lego_ci/e9473aaf-07d8-4c9c-a5dd-9f7226979e43/original:0:0/webp"
              className="legoTeamFigureImage"
              alt="Thundercats Figures" />
      </div>  
      </>
    );
}

function Thundercats()
{
    return (<><ThundercatsFrontPageInterface /></>);
}

export default Thundercats;