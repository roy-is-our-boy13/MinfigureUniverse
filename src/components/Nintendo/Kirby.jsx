import React from 'react';
import KirbyLogo from '../../assets/Logo_Icons/Nintendo_Logos/Kirby_Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/kirbyalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/kirbyenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Kirby()
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
            src={KirbyLogo}
            className="logoSize"
            alt="Kirby Logo"
        />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.ebayimg.com/images/g/q04AAOSwUohnVd-B/s-l1600.webp"
              className="legoTeamFigureImage"
              alt="Kirby Figure" />
      </div>  
      </>
    );
}

export default Kirby;