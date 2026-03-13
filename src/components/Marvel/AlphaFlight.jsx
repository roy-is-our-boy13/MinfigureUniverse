import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

function NavigationMenu() 
{

  const navigate = useNavigate();

   return (
    <nav>
      <div>
        <button  onClick={() => navigate('/alphaflightheros')}>
          Heroes
        </button>
        <button onClick={() => navigate('/alphaflightvillians')}>
          Villians
        </button>
      </div>
    </nav>
  );
}

function AlphaFlight()
{

    return( 
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://insidepulse.com/wp-content/uploads/2023/04/Alpha-Flight-logo-dark.png"
            className="logoBorder"
            alt="Alpha Flight Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://pbs.twimg.com/media/C_99JXgV0AAH-6T?format=jpg&name=large"
            className="legoTeamFigureImage"
            alt="Alpha Flight Team"
          />
        </p>  
      </div>  
      );
}

export default AlphaFlight;