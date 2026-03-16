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

function LegionOfSuperheroes()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Legion-of-Super-Heroes-logo.png"
                className="logoSize"
                alt="legion of Superheroes Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://preview.redd.it/merchandise-lego-legion-of-super-heroes-v0-ky4kz7ryderb1.jpg?width=1080&crop=smart&auto=webp&s=92229467461195a459228ee801c7aee683f1fff5"
              className="legoTeamFigureImage"
              alt="Leion of Superheroes Figures"
          />
        </div>  
      </>
    );
}

export default LegionOfSuperheroes;