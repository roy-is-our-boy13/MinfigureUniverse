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

function GhostRider()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://cdn2.steamgriddb.com/logo/4064e4d885e4be966c600e071394c636.png"
            className="logoSize"
            alt="Ghost Rider Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.ytimg.com/vi/SHHZSjDnJh4/maxresdefault.jpg"
            className="legoTeamFigureImage"
            alt="Ghost Rider Figure"
          />
        </p>  
      </div>
    );
}
  
export default GhostRider;