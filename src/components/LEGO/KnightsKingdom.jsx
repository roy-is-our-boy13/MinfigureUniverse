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

function KinghtsKingdomFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://poggers.com/cdn/shop/articles/a3d9ba5a5ca2d60dd0f4bdf1f4932bda_b89f140e-605b-4ac4-b7c6-57de418e0a8e_1383x777_crop_center.webp?v=1708120498"
                className="logoSize"
                alt="Knights Kingdom Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.redd.it/ia5d6i38w7sd1.jpeg"
              class = "legoTeamFigureImage"
              alt="Knights Figures"
          />
        </p>  
      </>
    );
}

function KnightsKingdom() 
{
    return (<><KinghtsKingdomFrontPageInterface /></>);
}
export default KnightsKingdom;