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

function BlueBeetle() 
{
    return (
      <>
        <h2>
            <img
                src="https://comicvine.gamespot.com/a/uploads/original/11133/111332930/6782225-4338517262-latest"
                className="logoSize"
                alt="Blue Beetle Logo"
                
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://s.ecrater.com/stores/444319/601d666e1213d_444319b.jpg"
              class = "legoTeamFigureImage"
              alt="Blue Beetle Figures"
          />
        </p>  
      </>
    );
}
export default BlueBeetle;