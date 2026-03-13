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

function Miracleman()
{
   return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpuOcRDF_h_wazKkMuQYQR4C5pOlYkMRE5Q&s"
            className="logoSize"
            alt="Miracleman Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://i.ebayimg.com/images/g/LGAAAeSw7NRoFeNI/s-l1200.jpg"
            className="legoTeamFigureImage"
            alt="Miracleman Figure"
          />
        </p>  
      </div>
    );
}

export default Miracleman;