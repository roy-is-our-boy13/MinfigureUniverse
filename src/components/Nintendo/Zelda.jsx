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

function Zelda() 
{
    return (
      <>
        <h2>
             <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/2560px-Zelda_Logo.svg.png"
              className="logoSize"
              alt="Zelda Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.lego.com/cdn/cs/set/assets/blt14079a9d1c210324/_utf-8_B_MDYtQXJ0aWNsZS1JbWFnZS1BZHVsdHNXZWxjb21lLUhvdy1UaGUtTGVnZW5kLW9mLVplbGRh4oSiLUxFR0_Cri1zZXQtd2FzLWRlc2lnbmVkLmpwZw_?fit=crop&quality=80&width=700&dpr=1"
              class = "legoTeamFigureImage"
              alt="Zelda Figures"
          />
        </p>  
      </>
    );
}

export default Zelda;