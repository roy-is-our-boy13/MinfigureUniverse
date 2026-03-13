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

function DoomPatrol()
{
    return (
      <>
        <h2>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUnXbd7q8wQc30b4BfzMmVd9ZNws_ec0th6I1sW-cD_GmSjZWd1vn7gnIIvvLLF14UZM&usqp=CAU"
                className="logoSize"
                alt="Doom Patrol Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://live.staticflickr.com/7538/16127419880_f36fb5dc14_b.jpg"
              class = "legoTeamFigureImage"
              alt="Doom Patrol Figures"
          />
        </p>  
      </>
    );
}

export default DoomPatrol;