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

function HaloFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/halo-logo-png-transparent.png"
                className="logoSize"
                alt="Halo Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.redd.it/fxmljmkwcmpd1.jpeg"
              class = "legoTeamFigureImage"
              alt="Halo Figures"
          />
        </p>  
      </>
    );
}


function Halo()
{
    return(<><HaloFrontPageInterface /></>);
}

export default Halo;