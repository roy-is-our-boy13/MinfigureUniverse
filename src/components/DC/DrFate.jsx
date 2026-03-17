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
      <button onClick={() => navigate('/drfatealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/drfateenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function DrFate() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f0/2015_Doctor_Fate_logo.png"
                className="logoSize"
                alt="Dr Fate Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://atlbrick.com/cdn/shop/products/image_5b7962f8-c40a-4934-9582-874cc3869577.jpg?v=1615800501&width=1024"
              className="legoTeamFigureImage"
              alt="Dr Fate Figure"
          />
        </div>  
      </>
    );
}
  export default DrFate;