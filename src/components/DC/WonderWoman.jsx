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

function WonderWoman()
{
    return (
      <>
        <h2>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fTj25R0qh6vjZt2Ygw-aBH3HabL3jENcJQ&s"
                className="logoSize"
                alt="Wonder Woman Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://cdn.amightygirl.com/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/l/e/lego_ww1.jpg"
              class = "legoTeamFigureImage"
              alt="Wonder Woman Figure"
          />
        </p>  
      </>
    );
}

export default WonderWoman;