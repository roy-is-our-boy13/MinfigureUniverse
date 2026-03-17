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
      <button onClick={() => navigate('/tickalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/tickenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function TickFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://i.redd.it/i72wmka4je571.png"
                className="logoSize"
                alt="Tick Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://www.engineerio.com/cdn/shop/products/DSCN6254_grande.jpg?v=1666410286"
              className="legoTeamFigureImage"
              alt="The Tick Figures" />
      </div>  
      </>
    );
}

function Tick()
{
    return (<><TickFrontPageInterface /></>);
}

export default Tick;