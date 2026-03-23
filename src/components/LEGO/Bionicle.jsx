import React from 'react';
import { useNavigate } from 'react-router-dom';
import BionicleLogo from '../../assets/Logo_Icons/Lego_Logos/Bionicle_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/bioniclealies')}>
          Allies
        </button>
        <button onClick={() => navigate('/bionicleenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function BionicleFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
              src={BionicleLogo}
              className="logoSize"
              alt="Bionicle Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://www.lego.com/cdn/cs/set/assets/blt80ed6ce4da11753b/bionicle_hero.png"
              className="legoTeamFigureImage"
              alt="Bionicle Figures" />
      </div>  
      </>
    );
}

function Bionicle() 
{
    return (<><BionicleFrontPageInterface /></>);
}
export default Bionicle;