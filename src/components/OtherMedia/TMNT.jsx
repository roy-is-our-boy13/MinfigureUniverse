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
      <button onClick={() => navigate('/tmntalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/tmntenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function TMNTFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://preview.redd.it/favorite-tmnt-logo-v0-eoy4xf4d64k81.jpg?width=640&crop=smart&auto=webp&s=a5a21bff6b3c5812ea397742c75c537d6300d1ba"
                className="logoSize"
                alt="TMNT Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://bricksandminifigssanantonio.com/cdn/shop/files/FullSizeRender_c3406e6e-4836-4dd9-b8ba-372e98663f33.heic?v=1718644980"
              className="legoTeamFigureImage"
              alt="TMNT Figures" />
      </div>  
      </>
    );
}

function TMNT()
{
    return (<><TMNTFrontPageInterface /></>);
}

export default TMNT;