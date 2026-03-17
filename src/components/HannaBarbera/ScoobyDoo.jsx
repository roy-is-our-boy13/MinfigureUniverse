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
      <button onClick={() => navigate('/scoobydooalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/scoobydooenimies')}>
          Enemies
    </button>
    </nav>
  );
}


function ScoobyDooFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Scooby_doo_logo.png/1200px-Scooby_doo_logo.png"
              className="logoSize"
              alt="Scooby Doo Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.ebayimg.com/images/g/7TwAAOSwT6pVzkHT/s-l1600.webp"
              className="legoTeamFigureImage"
              alt="Scooby Doo Gang Figures" />
      </div>  
      </>
    );
}

function ScoobyDoo() 
{
    return (<><ScoobyDooFrontPageInterface /></>);
}
export default ScoobyDoo;