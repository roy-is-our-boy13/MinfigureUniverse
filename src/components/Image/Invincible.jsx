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

function Invincible() 
{
    return (
      <>
        <h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Invincible_comic_series_logo.png/1200px-Invincible_comic_series_logo.png"
              className="logoSize"
              alt="Invincible Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://minifigurebricks.com/cdn/shop/files/TP128.jpg?v=1740135420"
              class = "legoTeamFigureImage"
              alt="Invincible Figure"
          />
        </p>  
      </>
    );
}
export default Invincible;