import React from 'react';
import { useNavigate } from 'react-router-dom';
import RocketeerLogo from '../../assets/Logo_Icons/OtherMedia_Logos/The_Rocketeer_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/rocketeeralies')}>
          Allies
        </button>
        <button onClick={() => navigate('/rocketeerenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function RocketeerFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src={RocketeerLogo}
                className="logoSize"
                alt="Rocketeer Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://static.wixstatic.com/media/fee61d_78165e7cfc9c4dc19dd01e9f1dbe138e~mv2.jpg/v1/fill/w_480,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fee61d_78165e7cfc9c4dc19dd01e9f1dbe138e~mv2.jpg"
              className="legoTeamFigureImage"
              alt="Rocketeer Figure" />
      </div>  
      </>
    );
}

function Rocketeer()
{
    return (<><RocketeerFrontPageInterface /></>);
}

export default  Rocketeer;