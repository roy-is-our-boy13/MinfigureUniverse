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

function IronMan() 
{

  return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Iron-Man-Logo.png"
            className="logoSize"
            alt="Iron Man Logo"  
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://www.lego.com/cdn/cs/set/assets/bltfd0a02fe95ebbe70/CP_IronMan_Sidekick-Tall2.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
            className="legoTeamFigureImage"
            alt="Iron Man Figure"
          />
        </p>  
      </div>
    );
}

export default IronMan;