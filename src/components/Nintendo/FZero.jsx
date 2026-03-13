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

function FZero() 
{
   return (
      <>
        <h2>
            <img
                  src="https://upload.wikimedia.org/wikipedia/en/7/77/F-Zero_logo.png"
                  className="logoSize"
                  alt="F-Zero Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://live.staticflickr.com/4829/44859178795_4b65eff908_b.jpg"
              class = "legoTeamFigureImage"
              alt="F-Zero Figure"
          />
        </p>  
      </>
    );
}
 export default FZero;