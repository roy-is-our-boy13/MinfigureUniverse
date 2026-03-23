import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ThunderboltsLogo from '../../assets/Logo_Icons/Marvel_Logos/Thunderbolts_Logo.png';

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
      <button onClick={() => navigate('/thunderboltsalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/thunderboltsenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Thunderbolts()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={ThunderboltsLogo}
              className="logoSize"
              alt="Thunderbolts Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://preview.redd.it/bit-late-but-i-made-the-thunderbolts-v0-fotu9nj7wx9f1.jpg?width=640&crop=smart&auto=webp&s=41d60776c0a7d56abb07b03af4e78dbb1f8473fd"
            className="legoTeamFigureImage"
            alt="Thunderbolts Figures"
          />
        </div>  
      </>
    );
}
  
export default Thunderbolts;