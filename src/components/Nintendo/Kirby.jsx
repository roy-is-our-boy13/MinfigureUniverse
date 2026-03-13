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

function Kirby()
{
    return (
      <>
        <h2>
            <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/kirby-4-logo.png"
            className="logoSize"
            alt="Kirby Logo"
        />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/images/g/q04AAOSwUohnVd-B/s-l1600.webp"
              class = "legoTeamFigureImage"
              alt="Kirby Figure"
          />
        </p>  
      </>
    );
}

export default Kirby;