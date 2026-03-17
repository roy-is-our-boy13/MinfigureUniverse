import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/romthespaceknightalies')}>Allies</button>
      <button onClick={() => navigate('/romthespaceknightenimies')}>Enemies</button>
    </nav>
  );
}

function RomTheSpaceKnight() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://images.shoutwiki.com/idwhasbro/thumb/6/6d/ROM_logo.png/1200px-ROM_logo.png"
            className="logoSize"
            alt="Rom The Space Knight Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://i.etsystatic.com/6119730/r/il/456d49/1950252091/il_1588xN.1950252091_36w6.jpg"
          className="legoTeamFigureImage"
          alt="Rom the Space Knight Figure"
        />
      </div>
    </>
  );
}

export default RomTheSpaceKnight;