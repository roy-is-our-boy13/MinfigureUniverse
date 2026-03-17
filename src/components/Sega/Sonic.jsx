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
      <button onClick={() => navigate('/sonicalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/sonicenimies')}>
          Enemies
    </button>
    </nav>
  );
}


function SonicFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sonic_The_Hedgehog.svg/1200px-Sonic_The_Hedgehog.svg.png"
              className="logoSize"
              alt="Sonic Logo"
        />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.ebayimg.com/images/g/ImAAAOSwayxh59oh/s-l1200.jpg"
              className="legoTeamFigureImage"
              alt="Sonic Figure" />
      </div>  
      </>
    );
}


function Sonic() 
{
    return(<><SonicFrontPageInterface /></>);
}
export default Sonic;