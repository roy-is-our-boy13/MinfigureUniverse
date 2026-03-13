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

function JSA() 
{
    return (
      <>
        <h2>
            <img
                src="https://insidepulse.com/wp-content/uploads/2019/08/Justice-Society-of-America-logo-JSA.png"
                className="logoSize"
                alt="JSA Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://preview.redd.it/the-justice-society-of-america-v0-b95xrcgfymyd1.jpeg?width=640&crop=smart&auto=webp&s=df371595d6e3fdff8726c98e04ccc91c2a5f5628"
              class = "legoTeamFigureImage"
              alt="JSA Figures"
          />
        </p>  
      </>
    );
}
export default JSA;