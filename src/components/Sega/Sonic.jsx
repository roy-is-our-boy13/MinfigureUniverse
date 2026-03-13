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


function SonicFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sonic_The_Hedgehog.svg/1200px-Sonic_The_Hedgehog.svg.png"
              className="logoSize"
              alt="Sonic Logo"
        />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/images/g/ImAAAOSwayxh59oh/s-l1200.jpg"
              class = "legoTeamFigureImage"
              alt="Sonic Figure"
          />
        </p>  
      </>
    );
}


function Sonic() 
{
    return(<><SonicFrontPageInterface /></>);
}
export default Sonic;