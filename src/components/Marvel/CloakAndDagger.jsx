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


function CloakAndDagger()
 {
    return (
    <div style={{ textAlign: 'center' }}>
      <h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cloak%26Dagger.png"
          className="logoSize"
          alt="Cloak And Dagger Logo"
        />
      </h2>
      <NavigationMenu />
      <p>
        <img
          src="https://live.staticflickr.com/65535/48552036812_47d2616fd0_b.jpg"
          className="legoTeamFigureImage"
          alt="Cloak and Dagger Figures"
        />
      </p>  
    </div>
    );
  }
  
  export default CloakAndDagger;