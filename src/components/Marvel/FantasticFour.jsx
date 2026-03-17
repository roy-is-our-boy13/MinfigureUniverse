import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/fantasticfouralies')}>
        Allies
      </button>
      <button onClick={() => navigate('/fantasticfourenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function FantasticFour()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/09/Fantastic-Four-Logo.png"
              className="logoSize"
              alt="Fantastic Four Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw252e924f/images/068/05/68053289-4.jpg?sw=1000&sh=1000&sm=fit"
            className="legoTeamFigureImage"
            alt="The Fantastic Four Team Figure"
          />
        </div>  
      </>
    );
  }
  
  export default FantasticFour;