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

function TickFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://i.redd.it/i72wmka4je571.png"
                className="logoSize"
                alt="Tick Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.engineerio.com/cdn/shop/products/DSCN6254_grande.jpg?v=1666410286"
              class = "legoTeamFigureImage"
              alt="The Tick Figures"
          />
        </p>  
      </>
    );
}

function Tick()
{
    return (<><TickFrontPageInterface /></>);
}

export default Tick;