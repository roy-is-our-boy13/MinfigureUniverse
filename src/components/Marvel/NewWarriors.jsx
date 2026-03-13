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

function NewWarriors()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://vignette3.wikia.nocookie.net/logocomics/images/8/88/New_Warriors_Logo.png"
            className="logoSize"
            alt="New Warriors Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://live.staticflickr.com/65535/51357353711_b057e4b9ba_b.jpg"
            className="legoTeamFigureImage"
            alt="The New Warriors Figures"
          />
        </p>  
      </div>
    );
}

export default NewWarriors;