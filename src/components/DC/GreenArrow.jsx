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

function GreenArrow() 
{
    return (
      <>
        <h2>
           <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Green_arrow_logo_2016.png"
                className="logoSize"
                alt="Green Arrow Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/07/12/1373664099000-Green-Arrow-mini-bg-1307121723_16_9.jpg?width=1748&height=989&fit=crop&format=pjpg&auto=webp"
              class = "legoTeamFigureImage"
              alt="Green Arrow Figure"
          />
        </p>  
      </>
    );
}

export default GreenArrow;