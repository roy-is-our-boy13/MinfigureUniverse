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

function LukeCage()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://www.noff.gg/marvel-snap/res/img/logos/LukeCage.png"
            className="logoSize"
            alt="Luke Cage Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.redd.it/0a4d2vrle14b1.jpg"
            className="legoTeamFigureImage"
            alt="Luke Cage Figure"
          />
        </p>  
      </div>
    );
}
  
export default LukeCage;