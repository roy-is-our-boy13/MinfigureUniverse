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
      <button onClick={() => navigate('/teentitansalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/teentitansenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function TeenTitans() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Teen_Titans_-_logo_%28English%29.png/1200px-Teen_Titans_-_logo_%28English%29.png"
                className="logoSize"
                alt="Teen Titans Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://i.redd.it/bqpf86xc20z61.jpg"
              className="legoTeamFigureImage"
              alt="Teen Titans Figures"
          />
        </div>  
      </>
    );
}
export default TeenTitans;