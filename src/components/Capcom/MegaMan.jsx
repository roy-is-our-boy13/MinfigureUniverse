import React from 'react';
import MegaManLogo from '../../assets/Logo_Icons/Capcom_Logos/Mega_Man_Logo.png';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/megamanalies')}>Allies</button>
      <button onClick={() => navigate('/megamanenimies')}>Enemies</button>
    </nav>
  );
}

function MegaMan() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src={MegaManLogo}
            className="logoSize"
            alt="Mega Man Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img src="https://static.herobloks.com/l/figure_images/18/7/3/id13604~c33564~u1.jpg" className="legoTeamFigureImage" alt="Mega Man Figure" />
      </div>
    </>
  );
}

export default MegaMan;
  