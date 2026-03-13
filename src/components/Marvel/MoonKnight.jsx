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

function MoonKnight() 
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://1000logos.net/wp-content/uploads/2022/09/Marvels-Moon-Knight-Logo.png"
            className="logoSize"
            alt="Moon Knight Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://atlbrick.com/cdn/shop/products/image_2c3cc83c-9a70-401d-abf5-dcd8efbf7e02.jpg?v=1624276919"
            className="legoTeamFigureImage"
            alt="Moon Knight Figure"
          />
        </p>  
      </div>
    );
}
  
  export default MoonKnight;
  