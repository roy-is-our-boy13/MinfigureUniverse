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

function Shadownhawk()
{
    return (
      <>
        <h2>
            <img
                src="https://ih1.redbubble.net/image.2345572536.0444/st,small,507x507-pad,600x600,f8f8f8.jpg"
                className="logoSize"
                alt="Shadownhawk Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://nashvegasbricks.com/cdn/shop/products/57_7b96d7ee-54f6-4b75-a5a3-23f96c99dd0c.jpg?v=1634750273"
              class = "legoTeamFigureImage"
              alt="Savage Dragon Figure"
          />
        </p>  
      </>
    );
}

export default Shadownhawk;