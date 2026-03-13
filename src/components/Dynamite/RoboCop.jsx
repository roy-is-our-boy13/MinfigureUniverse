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

function RoboCop()
{
  return (
      <>
        <h2>
              <img
                src="https://sonsofgotham.com/cdn/shop/collections/vendor-robocop.png?v=1655497699&width=1600"
                className="logoSize"
                alt="Robo Cop Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i0.wp.com/www.richbrix.co.uk/wp-content/uploads/2022/10/PXL_20221024_080530414-01.jpeg?fit=1262%2C1318&ssl=1"
              class = "legoTeamFigureImage"
              alt="RoboCop Figure"
          />
        </p>  
      </>
    );
}

export default RoboCop;