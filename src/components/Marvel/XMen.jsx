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

function XMen() 
{
  return (
      <>
        <h2>
           <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/X-Men_-_The_Animated_Series_-_logo.svg"
              className="logoSize"
              alt="X-Men Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://preview.redd.it/lego-x-men-v0-my2xn4h1w90b1.jpg?width=640&crop=smart&auto=webp&s=147587d3caeefce6dccb196a2e6496e223700121"
              class = "legoTeamFigureImage"
              alt="X-Men Figures"
          />
        </p>  
      </>
    );
}

export default XMen;