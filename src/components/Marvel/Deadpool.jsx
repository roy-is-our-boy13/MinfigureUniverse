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

function Deadpool()
 {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://pngimg.com/d/deadpool_PNG97.png"
            className="logoSize"
            alt="Deadpool Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://blog.firestartoys.com/wp-content/uploads/2020/03/2020-02-16-08.56.19.jpg"
            className="legoTeamFigureImage"
            alt="Deadpool Figure"
          />
        </p>  
      </div>
    );
  }
  
  export default Deadpool;