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

function SpiderMan() 
{

  console.log("Rendering SpiderMan component");

  return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://1000logos.net/wp-content/uploads/2023/02/Spiderman-Logo-1996.png"
            className="logoSize"
            alt="Spider-Man Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMWE2Y2E5ZjctZDIxOS00MjA0LWIyYTctMTIzYzkzNWFkMmM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            className="legoTeamFigureImage"
            alt="Spider-Man Figure"
          />
        </p>  
      </div>
    );
  
}

export default SpiderMan;