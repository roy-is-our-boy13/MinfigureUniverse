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

function Shazam() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://i5.walmartimages.com/seo/DC-Comics-Shazam-Logo-Symbol-White-Licensed-1-25-Inch-Button-87743_d8e55efa-6952-4e34-961f-50cac940c70d.9270b5408f4c4f1ac504bdefdaffa4a8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                className="logoSize"
                alt="Shazam Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://live.staticflickr.com/65535/48700294002_20e70494af_b.jpg"
              className="legoTeamFigureImage"
              alt="Shazam Figure"
          />
        </div>  
      </>
    );
}
  export default Shazam;