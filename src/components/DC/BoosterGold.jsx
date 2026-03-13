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

function BoosterGold()
{
   return (
      <>
        <h2>
            <img
                src="https://i0.wp.com/earth7269.files.wordpress.com/2017/02/boostergoldlogo.jpg?w=674"
                className="logoSize"
                alt="Booster Gold Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://static.herobloks.com/x/figure_images/18/1/2/id12481~c23908~u1-4.jpg"
              class = "legoTeamFigureImage"
              alt="Booster Gold Figure"
          />
        </p>  
      </>
    );
}

export default BoosterGold;