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


function Ultraforce()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GgAWpjnrC6MUlKeM6luryN2y_stChMt-V0rTHgoD0psoNUWsB-sE2rMT0Ozk6gdtRlI&usqp=CAU"
            className="logoSize"
            alt="Ultraforces Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://preview.redd.it/if-you-were-able-to-bring-back-the-ultraverse-comic-back-to-v0-a7t75ub4lxta1.jpg?auto=webp&s=071d3d57ff446782a9b4707827f427f559037eec"
            className="legoTeamFigureImage"
            alt="Ultraforce Figures"
          />
        </p>  
      </div>
    );
}

export default Ultraforce;