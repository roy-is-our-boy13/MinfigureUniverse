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

function Inhumans() 
{

  return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://miro.medium.com/v2/resize:fit:600/1*BKEVBH3uUx5EpKAeaAIRtw.png"
            className="logoSize"
            alt="Inhumans Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://preview.redd.it/inhumans-from-marvel-v0-far2hnwvmbmb1.jpg?width=1080&crop=smart&auto=webp&s=0cec3acc6234d78dbedd4f70b2401d623f7484d2"
            className="legoTeamFigureImage"
            alt="The Inhumans Figure"
          />
        </p>  
      </div>
    );
}

export default Inhumans;