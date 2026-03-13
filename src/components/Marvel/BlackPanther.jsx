
import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';


function NavigationMenu() 
{

  const navigate = useNavigate();

   return (
    <nav>
      <div>
        <button  onClick={() => navigate('/')}>
          Heroes
        </button>
        <button onClick={() => navigate('/')}>
          Villians
        </button>
      </div>
    </nav>
  );
}



function BlackPanther() 
{
    return (
     <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://media.licdn.com/dms/image/v2/C4D08AQGOV0tU9EEZ6Q/croft-frontend-shrinkToFit1024/croft-frontend-shrinkToFit1024/0/1597380334285?e=2147483647&v=beta&t=AfSO-vFM-nzyssDFJlKdeZev6KopyfYOyAKKLUCEghc"
            className="logoSize"
            alt="Black Panther Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://m.media-amazon.com/images/I/51+uRGY7F+L.jpg"
            className="legoTeamFigureImage"
            alt="The Black Panther"
          />
        </p>  
      </div>
    );
  }
  
  export default BlackPanther;
  