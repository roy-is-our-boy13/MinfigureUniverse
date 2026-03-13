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

function ManThing()
{
  return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://fbi.cults3d.com/uploaders/28312882/illustration-file/bc3bb132-3fce-4a0c-98d0-e7852a758a03/Screenshot-2025-01-14-075117.png"
            className="logoSize"
            alt="Man Thing Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://www.mocpixel.com/cdn/shop/files/1194_2.jpg?v=1738836461"
            className="legoTeamFigureImage"
            alt="Man Thing Figure"
          />
        </p>  
      </div>
    );
}

export default ManThing;