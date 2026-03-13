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

function SavageDragon() 
{
    return (
      <>
        <h2>
            <img
            src="https://www.savagedragon.com/wp-content/themes/savagetheme/content/images/logos/savagedragon-logo-blue-1.svg"
            className="logoSize"
            alt="Savage Dragon Logo"
        />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://calypsocustoms.com/cdn/shop/files/IMG_9955_2_1024x1024.jpg?v=1746985011"
              class = "legoTeamFigureImage"
              alt="Savage Dragon Figure"
          />
        </p>  
      </>
    );
}
export default SavageDragon;