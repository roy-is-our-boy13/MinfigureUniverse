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

function TheWatchman() 
{
   return (
      <>
        <h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Watchmen_logo.svg/2560px-Watchmen_logo.svg.png"
                className="logoSize"
                alt="The Watchman Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://preview.redd.it/wbh2eg9n43z31.jpg?auto=webp&s=049f9b45cb7f13a435a9110984eed16ac33ed087"
              class = "legoTeamFigureImage"
              alt="The Watchman Figures"
          />
        </p>  
      </>
    );
}
export default TheWatchman;