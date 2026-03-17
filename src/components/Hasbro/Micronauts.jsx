import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/micronautsalies')}>Allies</button>
      <button onClick={() => navigate('/micronautsenimies')}>Enemies</button>
    </nav>
  );
}

function Micronauts() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://i.pinimg.com/474x/d7/30/1a/d7301ae3cfedeb9695e65804b54d176f.jpg"
            className="logoSize"
            alt="Micronauts Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8884f59241211.5a1b3612a5583.jpg"
          className="legoTeamFigureImage"
          alt="Micronauts Figure"
        />
      </div>
    </>
  );
}

export default Micronauts;