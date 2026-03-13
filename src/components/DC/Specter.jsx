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

function Specter() 
{
    return (
      <>
        <h2>
             <img
                src="http://graphicnovels.info/books/Spectre-logo.gif"
                className="logoSize"
                alt="Spector Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_630,w_1200/v1484770873/dzvitd7fu0bqhvk06xet.jpg"
              class = "legoTeamFigureImage"
              alt="The Spcetre Figures"
          />
        </p>  
      </>
    );

}
export default Specter;