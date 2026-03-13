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


function Aquaman() 
{
  return (
      <>
        <h2>
           <img
                src="https://m.media-amazon.com/images/I/61DEVEWM2UL._AC_UF894,1000_QL80_.jpg"
                className="logoSize"
                alt="Aquaman Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://cdn.toypro.com/media/cache/tp_product_detail/uploads/images/product/40/88234.webp"
              class = "legoTeamFigureImage"
              alt="Aquaman Figure"
          />
        </p>  
      </>
    );
}
export default Aquaman;