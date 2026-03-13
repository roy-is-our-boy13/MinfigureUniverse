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

function Metroid() 
{
   return (
      <>
        <h2>
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Metroid_logo.png"
                className="logoSize"
                alt="Metroid Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i0.wp.com/shinesparkers.net/wp-content/uploads/2021/01/Lego-Metroid-set-Samus-Zebesians-and-Baby-Metroid.png?resize=1288%2C724&ssl=1"
              class = "legoTeamFigureImage"
              alt="Metroid Figures"
          />
        </p>  
      </>
    );
}

export default Metroid;