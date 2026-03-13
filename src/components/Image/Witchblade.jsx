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

function Witchblade()
{
    return (
      <>
        <h2>
            <img
                src="https://i0.wp.com/kleinletters.com/Blog/wp-content/uploads/2007/11/witchblade4black.jpg"
                className="logoSize"
                alt="Witchblade Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/images/g/9g0AAOSweqFjxJ9M/s-l400.jpg"
              class = "legoTeamFigureImage"
              alt="Witchblade Figure"
          />
        </p>  
      </>
    );
}

export default Witchblade;