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

function JSA() 
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://insidepulse.com/wp-content/uploads/2019/08/Justice-Society-of-America-logo-JSA.png"
                className="logoSize"
                alt="JSA Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://preview.redd.it/the-justice-society-of-america-v0-b95xrcgfymyd1.jpeg?width=640&crop=smart&auto=webp&s=df371595d6e3fdff8726c98e04ccc91c2a5f5628"
              className="legoTeamFigureImage"
              alt="JSA Figures"
          />
        </div>  
      </>
    );
}
export default JSA;