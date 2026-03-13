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

function StreetFighter() 
{
    return (
      <>
        <h2>
             <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e9/Street_Fighter_Logo.png"
                className="logoSize"
                alt="Street Fighter Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://img.tieronebricks.com/GoodPic/95/big/159809584721295.jpg"
              class = "legoTeamFigureImage"
              alt="Mega Man Figure"
          />
        </p>  
      </>
    );
}
  export default StreetFighter;