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

function RomTheSpaceKnight() 
{
    return (
      <>
        <h2>
            <img
                src="https://images.shoutwiki.com/idwhasbro/thumb/6/6d/ROM_logo.png/1200px-ROM_logo.png"
                className="logoSize"
                alt="Rom The Space Knight Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.etsystatic.com/6119730/r/il/456d49/1950252091/il_1588xN.1950252091_36w6.jpg"
              class = "legoTeamFigureImage"
              alt="Rom the Space Knight Figure"
          />
        </p>  
      </>
    );
}
export default RomTheSpaceKnight;