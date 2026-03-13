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

function GardiansOfTheGalaxy()
 {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Guardians_of_the_Galaxy-Logo.png"
            className="logoSize"
            alt="Gardians Of The Galaxy Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://live.staticflickr.com/2927/14357210314_f712c289cd_c.jpg"
            className="legoTeamFigureImage"
            alt="Gardians Of The Galaxy Team Figure"
          />
        </p>  
      </div>
    );
  }
  
  export default GardiansOfTheGalaxy;