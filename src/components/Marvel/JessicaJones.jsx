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
      <button onClick={() => navigate('/jessicajonesalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/jessicajonesenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function JessicaJones()
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://www.nicepng.com/png/detail/40-401514_marvels-jessica-jones-season-2-jessica-jones-vol.png"
              className="logoSize"
              alt="Jessica Jones Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.redd.it/made-jessica-jones-for-my-marvel-minifigures-collection-v0-s4j2nfucvlia1.jpg?width=1333&format=pjpg&auto=webp&s=91d89e12f622c28277d398f0ebdf3b71c1bfd855"
            className="legoTeamFigureImage"
            alt="Jessica Jones Figure"
          />
        </div>  
      </>
    );
}

export default JessicaJones;