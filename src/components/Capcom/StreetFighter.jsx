import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/streetfighteralies')}>Allies</button>
      <button onClick={() => navigate('/streetfighterenimies')}>Enemies</button>
    </nav>
  );
}

function StreetFighter() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e9/Street_Fighter_Logo.png"
            className="logoSize"
            alt="Street Fighter Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://img.tieronebricks.com/GoodPic/95/big/159809584721295.jpg"
          className="legoTeamFigureImage"
          alt="Mega Man Figure"
        />
      </div>
    </>
  );
}

export default StreetFighter;