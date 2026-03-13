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

function AgentsFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://atlbrick.com/cdn/shop/collections/Ultra_Agents_logo.jpg?v=1713541696"
                className="logoSize"
                alt="Agents Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://mecabricks.com/image/AbjpNw1Qa5y.png"
              class = "legoTeamFigureImage"
              alt="Lego Agents Figures"
          />
        </p>  
      </>
    );
}

function Agents() 
{
    return (<><AgentsFrontPageInterface /></>);
}
export default Agents;