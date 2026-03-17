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
      <button onClick={() => navigate('/theboysalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/theboysenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function TheBoys() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Boys_TV_series_logo.png"
                className="logoSize"
                alt="The Boys Logo"
              />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://minifigs.me/cdn/shop/files/TheBoys-All11_NO_STRORMFRONT.jpg?v=1741253036"
              className="legoTeamFigureImage"
              alt="The boys Figures" />
      </div>  
      </>
    );
}
export default TheBoys;