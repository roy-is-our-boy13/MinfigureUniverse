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

function TMNTFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://preview.redd.it/favorite-tmnt-logo-v0-eoy4xf4d64k81.jpg?width=640&crop=smart&auto=webp&s=a5a21bff6b3c5812ea397742c75c537d6300d1ba"
                className="logoSize"
                alt="TMNT Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://bricksandminifigssanantonio.com/cdn/shop/files/FullSizeRender_c3406e6e-4836-4dd9-b8ba-372e98663f33.heic?v=1718644980"
              class = "legoTeamFigureImage"
              alt="TMNT Figures"
          />
        </p>  
      </>
    );
}

function TMNT()
{
    return (<><TMNTFrontPageInterface /></>);
}

export default TMNT;