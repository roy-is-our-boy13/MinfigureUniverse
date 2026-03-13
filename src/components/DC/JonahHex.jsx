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

function JonahHex()
{
    return (
      <>
        <h2>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuBAmHI57wvJvhJS9pJge6SPH44XZOO6CRTAQaML7v7o3zkWDW5PbUpu0Gzd_Yvi_3iU&usqp=CAU"
                className="logoSize"
                alt="Jonah Hex Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.engineerio.com/cdn/shop/files/DSCN7412_grande.jpg?v=1727292515"
              class = "legoTeamFigureImage"
              alt="Jonah Hex Figure"
          />
        </p>  
      </>
    );
}

export default JonahHex;