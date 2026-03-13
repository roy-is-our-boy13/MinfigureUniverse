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


function ScoobyDooFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Scooby_doo_logo.png/1200px-Scooby_doo_logo.png"
              className="logoSize"
              alt="Scooby Doo Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/images/g/7TwAAOSwT6pVzkHT/s-l1600.webp"
              class = "legoTeamFigureImage"
              alt="Scooby Doo Gang Figures"
          />
        </p>  
      </>
    );
}

function ScoobyDoo() 
{
    return (<><ScoobyDooFrontPageInterface /></>);
}
export default ScoobyDoo;