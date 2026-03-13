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

function Starwars() 
{
    return (
      <>
        <h2>
            <img
                  src="https://media.designrush.com/inspirations/304680/conversions/Star_Wars_Logo1-preview.jpg"
                  className="logoSize"
                  alt="Star Wars Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://store-images.s-microsoft.com/image/apps.7707.63225107553541752.1c540946-cc4f-4e0f-aca3-13134473f9ad.8b2bd4ac-3914-43ec-b6e6-e91eb58d405b?q=90&w=480&h=270"
              class = "legoTeamFigureImage"
              alt="Star Wars Gang Figures"
          />
        </p>  
      </>
    );
}
export default Starwars;
  