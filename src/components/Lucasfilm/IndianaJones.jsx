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

function IndianaJones() 
{
    return (
      <>
        <h2>
            <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAqTfBRuQDblgeEoBzM5BhwU67llc1Ja9Qg&s"
                  className="logoSize"
                  alt="Indiana Jonesc Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i5.walmartimages.com/seo/LEGO-Indiana-Jones-and-Marion-Ravenwood-LEGO-minifigures-set_2d952cb2-ca1b-42c0-a246-73e913544000.a77b19a33793323c56d4e2103a44d18c.jpeg"
              class = "legoTeamFigureImage"
              alt="Indiana Jones Figure"
          />
        </p>  
      </>
    );
}
export default IndianaJones;
  