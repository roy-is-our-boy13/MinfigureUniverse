import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav>
      <div>
        <button onClick={() => navigate('/')}>
          Heroes
        </button>
        <button onClick={() => navigate('/')}>
          Villians
        </button>
      </div>
    </nav>
  );
}

function SpaceGhostFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/8/8e/Space_Ghost_%28TV_series%29.png"
                className="logoSize"
                alt="Space Ghost Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://static.wixstatic.com/media/fee61d_bc35da88ff95470f8bf334dca8abeff0~mv2.jpg/v1/fill/w_480,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fee61d_bc35da88ff95470f8bf334dca8abeff0~mv2.jpg"
              class = "legoTeamFigureImage"
              alt="Space Ghost Figure"
          />
        </p>  
      </>
    );
}

function SpaceGhost() 
{
    return (<><SpaceGhostFrontPageInterface /></>);
}

export default SpaceGhost;