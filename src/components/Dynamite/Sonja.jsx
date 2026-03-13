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

function Sonja() 
{
  return (
      <>
        <h2>
             <img
                src="https://image.tmdb.org/t/p/original/edw81TOrBphCtYkfr6PTYWxPEzn.png"
                className="logoSize"
                alt="Sonja  Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://saber-scorpion.com/wp/wp-content/uploads/2016/10/redhead_savage.jpg"
              class = "legoTeamFigureImage"
              alt="Red Sonja Figure"
          />
        </p>  
      </>
    );
}

export default Sonja;