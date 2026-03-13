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


function Terminator() 
{
    return (
      <>
        <h2>
             <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/term_logo.png?itok=Ss0A2VuO"
                className="logoSize"
                alt="Terminator Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ytimg.com/vi/WCDjOlcQJZA/maxresdefault.jpg"
              class = "legoTeamFigureImage"
              alt="Terminator Figures"
          />
        </p>  
      </>
    );
}
export default Terminator;