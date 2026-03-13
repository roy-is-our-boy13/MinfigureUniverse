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

function DrStrange() 
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://ih1.redbubble.net/image.177744836.7623/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
            className="logoSize"
            alt="Dr. Strange Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/lego-marvel-super-heroes/2/29/Lego_dr_strange.png"
            className="legoTeamFigureImage"
            alt="Dr. Strange Figure"
          />
        </p>  
      </div>
    );
}
export default DrStrange;