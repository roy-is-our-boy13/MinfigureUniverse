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


function KamenRider()
{
    return (
      <>
        <h2>
            <img
                src="https://images.seeklogo.com/logo-png/55/2/kamen-rider-2020-logo-png_seeklogo-553896.png"
                className="logoSize"
                alt="Kamen Rider Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://pm1.aminoapps.com/6492/b982327824f53a5d147cc690b310f4830ebf4370_hq.jpg"
              class = "legoTeamFigureImage"
              alt="The Spcetre Figures"
          />
        </p>  
      </>
    );
}

export default KamenRider;