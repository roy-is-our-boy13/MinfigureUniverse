import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';


function NavigationMenu() 
{

  const navigate = useNavigate();

   return (
    <nav>
      <div>
        <button  onClick={() => navigate('/')}>
          Heroes
        </button>
        <button onClick={() => navigate('/')}>
          Villians
        </button>
      </div>
    </nav>
  );
}


function Avengers()
 {
    return (
   <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://insidepulse.com/wp-content/uploads/2023/05/The-Avengers-logo.png"
            className="logoSize"
            alt="Avengers Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Zq-MsKQGJDSEwDV4L44Cnl1MUz-Xx6Yca0K_wpppdmtumVbrw9slQHf8SuH0KrirveY5pXmGznH93lBTEXGkDcVlMx6TelfOWY0GyYqIUY2Q04gLF-ERki8fl05Ttzhonxa_PNY4ZW8N/s1600/001.JPG"
            className="legoTeamFigureImage"
            alt="The Avengers Team"
          />
        </p>
      </div>  
    );
  }
  
  export default Avengers;