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

function MoonKnight() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2022/09/Marvels-Moon-Knight-Logo.png"
              className="logoSize"
              alt="Moon Knight Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://atlbrick.com/cdn/shop/products/image_2c3cc83c-9a70-401d-abf5-dcd8efbf7e02.jpg?v=1624276919"
            className="legoTeamFigureImage"
            alt="Moon Knight Figure"
          />
        </div>  
      </>
    );
}
  
  export default MoonKnight;
  