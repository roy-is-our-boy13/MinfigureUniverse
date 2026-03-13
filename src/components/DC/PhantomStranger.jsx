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

function PhantomStranger()
{
    return (
      <>
        <h2>
            <img
                src="https://i0.wp.com/kleinletters.com/Blog/wp-content/uploads/2013/12/Showcase80PhantStrang.jpg?resize=600%2C254"
                className="logoSize"
                alt="Phantom Stranger Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.engineerio.com/cdn/shop/products/DSCN6381_grande.jpg?v=1671726536"
              class = "legoTeamFigureImage"
              alt="Phantom Stranger Figure"
          />
        </p>  
      </>
    );
}

export default PhantomStranger;