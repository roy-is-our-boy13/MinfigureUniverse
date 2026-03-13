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


function JLA() 
{
    return (
      <>
        <h2>
           <img
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/02/justice-league-of-america-header.jpg"
                className="logoSize"
                alt="JLA Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://veuxtoys.com/cdn/shop/files/justaceleage_1024x1024.jpg?v=1687317471"
              class = "legoTeamFigureImage"
              alt="JLA Figures"
          />
        </p>  
      </>
    );
}
  export default JLA;