import React from 'react';
import { useNavigate } from 'react-router-dom';
import KnightsKingdomLogo from '../../assets/Logo_Icons/Lego_Logos/Knights_Kingdom_Logo.webp';

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
                src={KnightsKingdomLogo}
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