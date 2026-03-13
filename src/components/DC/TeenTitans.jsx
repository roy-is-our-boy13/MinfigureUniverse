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

function TeenTitans() 
{
   return (
      <>
        <h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Teen_Titans_-_logo_%28English%29.png/1200px-Teen_Titans_-_logo_%28English%29.png"
                className="logoSize"
                alt="Teen Titans Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.redd.it/bqpf86xc20z61.jpg"
              class = "legoTeamFigureImage"
              alt="Teen Titans Figures"
          />
        </p>  
      </>
    );
}
export default TeenTitans;