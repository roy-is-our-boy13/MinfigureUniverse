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

function NinjagoFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
                src="https://i.pinimg.com/474x/61/f5/39/61f53935cdbe6e36f8bc8470404e634a.jpg"
                className="logoSize"
                alt="Ninjago Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.shutterstock.com/image-photo/germany-march-14th-2025-editorial-260nw-2599666793.jpg"
              class = "legoTeamFigureImage"
              alt="Ninjago Figures"
          />
        </p>  
      </>
    );
}

function Ninjago() 
{
    return (<><NinjagoFrontPageInterface /></>);
}
export default Ninjago;