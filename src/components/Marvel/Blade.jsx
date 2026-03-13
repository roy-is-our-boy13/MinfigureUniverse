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

function Blade() 
{
    return( 
    <>
      <h2>
         <img
            src="https://famfonts.com/wp-content/uploads/blade-wide.png"
            className = "logoSize"
            alt="Blade Logo"
        />
      </h2>
      <NavigationMenu />
      <p>
        <img
              src = "https://i.pinimg.com/736x/5d/14/8b/5d148be79004b6c1968443412a35aacc.jpg"
              class = "legoTeamFigureImage"
              alt="Blade"
          />
      </p>  
    </>
  );
  }
  export default Blade;