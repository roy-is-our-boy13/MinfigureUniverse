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

function Flash()
{
    return (
      <>
        <h2>
           <img
                src="https://cdn.freebiesupply.com/logos/large/2x/flash-logo-png-transparent.png"
                className="logoSize"
                alt="Flash Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://superman-on-film.com/wp-content/uploads/2018/02/maxresdefault-2.jpg"
              class = "legoTeamFigureImage"
              alt="The Flash Figure"
          />
        </p>  
      </>
    );
}

export default Flash;