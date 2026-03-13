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

function TheBoys() 
{
    return (
      <>
        <h2>
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Boys_TV_series_logo.png"
                className="logoSize"
                alt="The Boys Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://minifigs.me/cdn/shop/files/TheBoys-All11_NO_STRORMFRONT.jpg?v=1741253036"
              class = "legoTeamFigureImage"
              alt="The boys Figures"
          />
        </p>  
      </>
    );
}
export default TheBoys;