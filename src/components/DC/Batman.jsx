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

function Batman() 
{
    return (
      <>
        <h2>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/batman-1-logo-png-transparent.png"
                className="logoSize"
                alt="Batman Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"
              class = "legoTeamFigureImage"
              alt="Batman Figure"
          />
        </p>  
      </>
    );
  }

export default Batman;