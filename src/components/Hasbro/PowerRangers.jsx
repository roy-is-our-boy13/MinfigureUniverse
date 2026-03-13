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


function PowerRangers() 
{
    return (
      <>
        <h2>
            <img
                src="https://i.pinimg.com/736x/4d/93/4b/4d934b3cd75429994b9729995d6ca170.jpg"
                className="logoSize"
                alt="Power Rangers Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://external-preview.redd.it/lego-megazord-v0-5Ff-bDgi_u45yhwa9fh451JULjpGDdwOIGGWZB3tSxw.jpg?auto=webp&s=e65fe0bdcd7466c5e92a172cc423f167a939ff73"
              class = "legoTeamFigureImage"
              alt="Power Rangers Figures"
          />
        </p>  
      </>
    );
}

export default PowerRangers;