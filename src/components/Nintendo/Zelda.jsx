import React from 'react';
import ZeldaLogo from '../../assets/Logo_Icons/Nintendo_Logos/Zelda_Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/zeldaalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/zeldaenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Zelda() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
              src={ZeldaLogo}
              className="logoSize"
              alt="Zelda Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://www.lego.com/cdn/cs/set/assets/blt14079a9d1c210324/_utf-8_B_MDYtQXJ0aWNsZS1JbWFnZS1BZHVsdHNXZWxjb21lLUhvdy1UaGUtTGVnZW5kLW9mLVplbGRh4oSiLUxFR0_Cri1zZXQtd2FzLWRlc2lnbmVkLmpwZw_?fit=crop&quality=80&width=700&dpr=1"
              className="legoTeamFigureImage"
              alt="Zelda Figures" />
      </div>  
      </>
    );
}

export default Zelda;