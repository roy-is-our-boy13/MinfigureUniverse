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

function Hulk()
 {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://pngimg.com/d/hulk_PNG5.png"
            className="logoSize"
            alt="Hulk Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt81f6da976343c245/Hulk-Sidekick-Tall-1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
            className="legoTeamFigureImage"
            alt="Hulk Figure"
          />
        </p>  
      </div>
    );
  }
  
  export default Hulk;