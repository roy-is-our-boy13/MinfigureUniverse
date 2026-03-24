import React from 'react';
import { useNavigate } from 'react-router-dom';
import HaloLogo from '../../assets/Logo_Icons/OtherMedia_Logos/Halo_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/haloalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/haloenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function HaloFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src={HaloLogo}
                className="logoSize"
                alt="Halo Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.redd.it/fxmljmkwcmpd1.jpeg"
              className="legoTeamFigureImage"
              alt="Halo Figures" />
      </div>  
      </>
    );
}


function Halo()
{
    return(<><HaloFrontPageInterface /></>);
}

export default Halo;