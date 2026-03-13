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


function GreenLantern() 
{
   return (
      <>
        <h2>
           <img
                src="https://w0.peakpx.com/wallpaper/611/885/HD-wallpaper-green-lantern-logo-comics-dc-comics.jpg"
                className="logoSize"
                alt="Green Lantern Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://preview.redd.it/green-lantern-corps-v0-l7r799j93gvc1.jpeg?auto=webp&s=965e3886c91891ec025fb597f7803ecbdc364cfa"
              class = "legoTeamFigureImage"
              alt="Green Lantern Corps Figures"
          />
        </p>  
      </>
    );
}
export default GreenLantern;