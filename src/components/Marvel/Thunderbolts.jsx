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

function Thunderbolts()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://images.seeklogo.com/logo-png/58/2/thunderbolts-logo-png_seeklogo-582410.png"
            className="logoSize"
            alt="Thunderbolts Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://preview.redd.it/bit-late-but-i-made-the-thunderbolts-v0-fotu9nj7wx9f1.jpg?width=640&crop=smart&auto=webp&s=41d60776c0a7d56abb07b03af4e78dbb1f8473fd"
            className="legoTeamFigureImage"
            alt="Thunderbolts Figures"
          />
        </p>  
      </div>
    );
}
  
export default Thunderbolts;