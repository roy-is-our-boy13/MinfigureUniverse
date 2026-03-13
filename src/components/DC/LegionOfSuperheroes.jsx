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

function LegionOfSuperheroes()
{
    return (
      <>
        <h2>
            <img
                src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Legion-of-Super-Heroes-logo.png"
                className="logoSize"
                alt="legion of Superheroes Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://preview.redd.it/merchandise-lego-legion-of-super-heroes-v0-ky4kz7ryderb1.jpg?width=1080&crop=smart&auto=webp&s=92229467461195a459228ee801c7aee683f1fff5"
              class = "legoTeamFigureImage"
              alt="Leion of Superheroes Figures"
          />
        </p>  
      </>
    );
}

export default LegionOfSuperheroes;