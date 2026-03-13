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


function FantasticFour()
 {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://1000logos.net/wp-content/uploads/2020/09/Fantastic-Four-Logo.png"
            className="logoSize"
            alt="Fantastic Four Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw252e924f/images/068/05/68053289-4.jpg?sw=1000&sh=1000&sm=fit"
            className="legoTeamFigureImage"
            alt="The Fantastic Four Team Figure"
          />
        </p>  
      </div>
    );
  }
  
  export default FantasticFour;