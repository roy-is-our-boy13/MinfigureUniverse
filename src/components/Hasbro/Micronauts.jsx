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

function Micronauts()
{
   return (
      <>
        <h2>
             <img
                src="https://i.pinimg.com/474x/d7/30/1a/d7301ae3cfedeb9695e65804b54d176f.jpg"
                className="logoSize"
                alt="Micronauts Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8884f59241211.5a1b3612a5583.jpg"
              class = "legoTeamFigureImage"
              alt="Micronauts Figure"
          />
        </p>  
      </>
    );
}

export default Micronauts;