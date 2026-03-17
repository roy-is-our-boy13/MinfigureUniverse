import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/knightskingdomalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/knightskingdomenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function KinghtsKingdomFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://poggers.com/cdn/shop/articles/a3d9ba5a5ca2d60dd0f4bdf1f4932bda_b89f140e-605b-4ac4-b7c6-57de418e0a8e_1383x777_crop_center.webp?v=1708120498"
                className="logoSize"
                alt="Knights Kingdom Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.redd.it/ia5d6i38w7sd1.jpeg"
              className="legoTeamFigureImage"
              alt="Knights Figures" />
      </div>  
      </>
    );
}

function KnightsKingdom() 
{
    return (<><KinghtsKingdomFrontPageInterface /></>);
}
export default KnightsKingdom;