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

function BionicleFrontPageInterface()
{
  return (
      <>
        <h2>
            <img
              src="https://www.lingoblog.dk/wp-content/uploads/2023/05/bionicle.jpg"
              className="logoSize"
              alt="Bionicle Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.lego.com/cdn/cs/set/assets/blt80ed6ce4da11753b/bionicle_hero.png"
              class = "legoTeamFigureImage"
              alt="Bionicle Figures"
          />
        </p>  
      </>
    );
}

function Bionicle() 
{
    return (<><BionicleFrontPageInterface /></>);
}
export default Bionicle;