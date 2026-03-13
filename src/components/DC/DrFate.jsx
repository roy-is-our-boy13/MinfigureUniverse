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


function DrFate() 
{
    return (
      <>
        <h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f0/2015_Doctor_Fate_logo.png"
                className="logoSize"
                alt="Dr Fate Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://atlbrick.com/cdn/shop/products/image_5b7962f8-c40a-4934-9582-874cc3869577.jpg?v=1615800501&width=1024"
              class = "legoTeamFigureImage"
              alt="Dr Fate Figure"
          />
        </p>  
      </>
    );
}
  export default DrFate;