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

function CaptainAmerica()
 {
    return ( 
    <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://i.pinimg.com/474x/dd/d7/32/ddd7327b5f12eb8189890c98a2bc293f.jpg"
            className="logoSize"
            alt="Captain America Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5eYQ4kUo048yeiFvEvF8iRHvyowzf2VRcA&s"
            className="legoTeamFigureImage"
            alt="Captain America"
          />
        </p>  
      </div>
  );
  }
  
  export default CaptainAmerica;