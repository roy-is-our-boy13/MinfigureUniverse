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

function JudgeDreddFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://sonsofgotham.com/cdn/shop/collections/download_1.jpg?v=1670955632"
                className="logoSize"
                alt="Judge Dredd Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i0.wp.com/www.richbrix.co.uk/wp-content/uploads/2023/11/PXL_20221024_095517865-01.jpeg?fit=1460%2C1147&ssl=1"
              class = "legoTeamFigureImage"
              alt="Judge Dredd Figure"
          />
        </p>  
      </>
    );
}

function JudgeDredd()
{
    return (<><JudgeDreddFrontPageInterface /></>);
}

export default JudgeDredd;