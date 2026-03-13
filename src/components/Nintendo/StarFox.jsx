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

function StarFox() 
{
    return (
      <>
        <h2>
             <img
                src="https://seeklogo.com/images/S/starfox-logo-1E2B4889EC-seeklogo.com.png"
                className="logoSize"
                alt="Star Fox Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://ideascdn.lego.com/media/generate/lego_ci/9712042b-6ba6-4765-972d-ce4e67797377/original:0:0/webp"
              class = "legoTeamFigureImage"
              alt="Star Fox Figures"
          />
        </p>  
      </>
    );
}
export default StarFox;