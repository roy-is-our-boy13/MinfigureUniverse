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

function RocketeerFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://insidepulse.com/wp-content/uploads/2022/06/The-Rocketeer-logo-OG.png"
                className="logoSize"
                alt="Rocketeer Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://static.wixstatic.com/media/fee61d_78165e7cfc9c4dc19dd01e9f1dbe138e~mv2.jpg/v1/fill/w_480,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fee61d_78165e7cfc9c4dc19dd01e9f1dbe138e~mv2.jpg"
              class = "legoTeamFigureImage"
              alt="Rocketeer Figure"
          />
        </p>  
      </>
    );
}

function Rocketeer()
{
    return (<><RocketeerFrontPageInterface /></>);
}

export default  Rocketeer;