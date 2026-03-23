import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpawnLogo from '../../assets/Logo_Icons/Image_Comcis_Logos/Spawn_Logo.png';

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

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/spawnalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/spawnenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Spawn() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={SpawnLogo}
            className="logoSize"
            alt="Spawn Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://minifigs.me/cdn/shop/products/spawn-3000-front-new_1c5f29e8-a470-4e78-94b6-f0927ab137d3.jpg?v=1637927836"
          className="legoTeamFigureImage"
          alt="Spawn Figure"
        />
      </div>
    </>
  );
}

export default Spawn;