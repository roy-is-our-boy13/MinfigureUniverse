import React from 'react';
import AuthorityLogo from '../../assets/Logo_Icons/DC_Logos/The_Authority.png';
import { useNavigate, Routes, Route } from 'react-router-dom';

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

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/authorityalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/authorityenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Authority() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={AuthorityLogo}
                className="logoSize"
                alt="The Authority Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://64.media.tumblr.com/c9bf7be252f03eea5d0cee21c1394551/tumblr_p9kdo14EAl1vd3x8go1_1280.jpg"
              className="legoTeamFigureImage"
              alt="The Authority Figures"
          />
        </div>  
      </>
    );
  }
export default Authority;