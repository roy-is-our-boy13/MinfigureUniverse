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

function Wildcats()
{
    return (
      <>
        <h2>
            <img
                src="https://mekulius.com/comics/Logos/WildCATsV1Logo.gif"
                className="logoSize"
                alt="Wildcats Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.redd.it/bcfsfdvd2rh91.jpg"
              class = "legoTeamFigureImage"
              alt="The W.I.L.D Cats Figures"
          />
        </p>  
      </>
    );
}

export default Wildcats;