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

function GIJoe() 
{
   return (
      <>
        <h2>
             <img
                src="https://www.thesimplemanstore.com/cdn/shop/files/GiJoeLogomagnet_theSimpleMan.webp?v=1684445934"
                className="logoSize"
                alt="GIJoe Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://generalsjoesreborn.com/images/reviews/2013/kreo/minifigures/minifigures-01.jpg"
              class = "legoTeamFigureImage"
              alt="G.I. Joe Figures"
          />
        </p>  
      </>
    );
}
export default GIJoe;