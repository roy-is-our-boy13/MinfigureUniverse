import React from 'react';
import TransformersLogo from '../../assets/Logo_Icons/Hasbro_Logos/Transformers_Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/transformersalies')}>Allies</button>
      <button onClick={() => navigate('/transformersenimies')}>Enemies</button>
    </nav>
  );
}

function Transformers() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={TransformersLogo}
            className="logoSize"
            alt="Transformers Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://www.lego.com/cdn/cs/set/assets/blt36fb03cdeb25ad1a/10302.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1"
          className="legoTeamFigureImage"
          alt="Transformer Figure"
        />
      </div>
    </>
  );
}

export default Transformers;