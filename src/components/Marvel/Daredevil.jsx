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

function Daredevil()
 {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://comicbook.com/wp-content/uploads/sites/4/2017/09/de4db8044fde3806bb93e2c5821aedca.png"
            className="logoSize"
            alt="Daredevil Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.pinimg.com/736x/fc/a5/13/fca513ac2f1a41b0e2cd9620294c5cba.jpg"
            className="legoTeamFigureImage"
            alt="Daredevil Figure"
          />
        </p>  
      </div>
    );
  }
  
  export default Daredevil;