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

function JessicaJones()
{
   return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://www.nicepng.com/png/detail/40-401514_marvels-jessica-jones-season-2-jessica-jones-vol.png"
            className="logoSize"
            alt="Jessica Jones Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.redd.it/made-jessica-jones-for-my-marvel-minifigures-collection-v0-s4j2nfucvlia1.jpg?width=1333&format=pjpg&auto=webp&s=91d89e12f622c28277d398f0ebdf3b71c1bfd855"
            className="legoTeamFigureImage"
            alt="Jessica Jones Figure"
          />
        </p>  
      </div>
    );
}

export default JessicaJones;