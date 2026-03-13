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

function ThundercatsFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://1000logos.net/wp-content/uploads/2023/07/ThunderCats-Logo-1985.png"
                className="logoSize"
                alt="Thundercats Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://ideascdn.lego.com/media/generate/lego_ci/e9473aaf-07d8-4c9c-a5dd-9f7226979e43/original:0:0/webp"
              class = "legoTeamFigureImage"
              alt="Thundercats Figures"
          />
        </p>  
      </>
    );
}

function Thundercats()
{
    return (<><ThundercatsFrontPageInterface /></>);
}

export default Thundercats;