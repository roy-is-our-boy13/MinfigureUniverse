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

function Superman() 
{
    return (
      <>
        <h2>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/superman-1-logo-svg-vector.svg"
                className="logoSize"
                alt="Superman Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://live.staticflickr.com/7031/6717166569_6e01fb5e0a_b.jpg"
              class = "legoTeamFigureImage"
              alt="Superman Figure"
          />
        </p>  
      </>
    );
}
export default Superman;