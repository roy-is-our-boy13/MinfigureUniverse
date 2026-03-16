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

function PhantomStranger()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://i0.wp.com/kleinletters.com/Blog/wp-content/uploads/2013/12/Showcase80PhantStrang.jpg?resize=600%2C254"
                className="logoSize"
                alt="Phantom Stranger Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://www.engineerio.com/cdn/shop/products/DSCN6381_grande.jpg?v=1671726536"
              className="legoTeamFigureImage"
              alt="Phantom Stranger Figure"
          />
        </div>  
      </>
    );
}

export default PhantomStranger;