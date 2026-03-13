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


function JapSpiderMan()
{
    return (
      <>
        <h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Japanese_Spider-Man.png/1200px-Japanese_Spider-Man.png"
                className="logoSize"
                alt="Japanese Spider-Man Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.redd.it/6dvaqi4pd7c71.jpg"
              class = "legoTeamFigureImage"
              alt="Japanese Spider-Man Figure"
          />
        </p>  
      </>
    );
}

export default JapSpiderMan;