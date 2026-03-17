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
      <button onClick={() => navigate('/spaceghostalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/spaceghostenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function SpaceGhostFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/8/8e/Space_Ghost_%28TV_series%29.png"
                className="logoSize"
                alt="Space Ghost Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://static.wixstatic.com/media/fee61d_bc35da88ff95470f8bf334dca8abeff0~mv2.jpg/v1/fill/w_480,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fee61d_bc35da88ff95470f8bf334dca8abeff0~mv2.jpg"
              className="legoTeamFigureImage"
              alt="Space Ghost Figure" />
      </div>  
      </>
    );
}

function SpaceGhost() 
{
    return (<><SpaceGhostFrontPageInterface /></>);
}

export default SpaceGhost;