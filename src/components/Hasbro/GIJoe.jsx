import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/gijoealies')}>Allies</button>
      <button onClick={() => navigate('/gijoeenimies')}>Enemies</button>
    </nav>
  );
}

function GIJoe() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://www.thesimplemanstore.com/cdn/shop/files/GiJoeLogomagnet_theSimpleMan.webp?v=1684445934"
            className="logoSize"
            alt="GIJoe Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://generalsjoesreborn.com/images/reviews/2013/kreo/minifigures/minifigures-01.jpg"
          className="legoTeamFigureImage"
          alt="G.I. Joe Figures"
        />
      </div>
    </>
  );
}

export default GIJoe;