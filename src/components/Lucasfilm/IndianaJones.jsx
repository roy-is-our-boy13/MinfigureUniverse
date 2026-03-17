import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <button onClick={() => navigate('/indianajonesalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/indianajonesenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function IndianaJones() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAqTfBRuQDblgeEoBzM5BhwU67llc1Ja9Qg&s"
            className="logoSize"
            alt="Indiana Jonesc Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://i5.walmartimages.com/seo/LEGO-Indiana-Jones-and-Marion-Ravenwood-LEGO-minifigures-set_2d952cb2-ca1b-42c0-a246-73e913544000.a77b19a33793323c56d4e2103a44d18c.jpeg"
          className="legoTeamFigureImage"
          alt="Indiana Jones Figure"
        />
      </div>
    </>
  );
}

export default IndianaJones;