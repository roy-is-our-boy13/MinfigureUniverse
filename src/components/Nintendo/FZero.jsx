import React from 'react';
import FZeroLogo from '../../assets/Logo_Icons/Nintendo_Logos/F-Zero_Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/fzeroalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/fzeroenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function FZero() 
{
   return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                  src={FZeroLogo}
                  className="logoSize"
                  alt="F-Zero Logo"
              />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://live.staticflickr.com/4829/44859178795_4b65eff908_b.jpg"
              className="legoTeamFigureImage"
              alt="F-Zero Figure" />
      </div>  
      </>
    );
}
 export default FZero;