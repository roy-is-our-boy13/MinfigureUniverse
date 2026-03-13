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

function Pokémon()
{
    return (
      <>
        <h2>
             <img
                src="https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png"
                className="logoSize"
                alt="Pokémon Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://minifigs.me/cdn/shop/files/y-full-pokemon-set-plus-togepi.jpg?v=1727943146&width=1946"
              class = "legoTeamFigureImage"
              alt="Pokemon Figures"
          />
        </p>  
      </>
    );
}

export default Pokémon;