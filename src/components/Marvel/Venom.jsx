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

function Venom()
{
    return (
      <>
        <h2>
           <img
                src="https://stickers-4u.myshopify.com/cdn/shop/products/venom1white.jpg?v=1634410860"
                className="logoSize"
                alt="Venom Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/images/g/lJ8AAOSw4Ixlas1q/s-l1200.jpg"
              class = "legoTeamFigureImage"
              alt="Venom Figure"
          />
        </p>  
      </>
    );
}

export default Venom;