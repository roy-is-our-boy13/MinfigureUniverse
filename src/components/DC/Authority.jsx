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

function Authority() 
{
    return (
      <>
        <h2>
            <img
                src="https://windycity-3d.com/cdn/shop/files/il_fullxfull.5633439476_fx00_d8a760d6-47d6-4ab4-a8dc-64546417fd49.jpg?v=1722789985"
                className="logoSize"
                alt="The Authority Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://64.media.tumblr.com/c9bf7be252f03eea5d0cee21c1394551/tumblr_p9kdo14EAl1vd3x8go1_1280.jpg"
              class = "legoTeamFigureImage"
              alt="The Authority Figures"
          />
        </p>  
      </>
    );
  }
export default Authority;