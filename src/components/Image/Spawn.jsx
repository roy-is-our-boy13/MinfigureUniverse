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

function Spawn() 
{
    return (
      <>
        <h2>
            <img
              src="https://insidepulse.com/wp-content/uploads/2022/06/Spawn-logo.png"
              className="logoSize"
              alt="Spawn Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://minifigs.me/cdn/shop/products/spawn-3000-front-new_1c5f29e8-a470-4e78-94b6-f0927ab137d3.jpg?v=1637927836"
              class = "legoTeamFigureImage"
              alt="Spawn Figure"
          />
        </p>  
      </>
    );
}
export default Spawn;