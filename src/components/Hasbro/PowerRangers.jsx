import React from 'react';
import { useNavigate } from 'react-router-dom';
import PowerRangersLogo from '../../assets/Logo_Icons/Toei_Logos/Power_Rangers_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/powerrangersalies')}>Allies</button>
      <button onClick={() => navigate('/powerrangersenimies')}>Enemies</button>
    </nav>
  );
}

function PowerRangers() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={PowerRangersLogo}
            className="logoSize"
            alt="Power Rangers Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://external-preview.redd.it/lego-megazord-v0-5Ff-bDgi_u45yhwa9fh451JULjpGDdwOIGGWZB3tSxw.jpg?auto=webp&s=e65fe0bdcd7466c5e92a172cc423f167a939ff73"
          className="legoTeamFigureImage"
          alt="Power Rangers Figures"
        />
      </div>
    </>
  );
}

export default PowerRangers;