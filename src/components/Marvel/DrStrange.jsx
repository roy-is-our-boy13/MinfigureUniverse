import React from 'react';
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
      <button onClick={() => navigate('/')}>
        Heroes
      </button>
      <button onClick={() => navigate('/')}>
        Villians
      </button>
    </nav>
  );
}

function DrStrange() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://ih1.redbubble.net/image.177744836.7623/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
              className="logoSize"
              alt="Dr. Strange Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/lego-marvel-super-heroes/2/29/Lego_dr_strange.png"
            className="legoTeamFigureImage"
            alt="Dr. Strange Figure"
          />
        </div>  
      </>
    );
}
export default DrStrange;