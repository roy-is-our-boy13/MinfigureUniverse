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

function Punisher() 
{
   return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/12/22/b1174a59-9c20-40fc-8a09-e76e9e183ec4.jpg"
            className="logoSize"
            alt="Punisher Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.ebayimg.com/images/g/ONcAAOSw8olhQcCP/s-l1200.jpg"
            className="legoTeamFigureImage"
            alt="The Punisher Figure"
          />
        </p>  
      </div>
    );
}
export default Punisher;