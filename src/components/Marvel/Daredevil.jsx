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

function Daredevil()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://comicbook.com/wp-content/uploads/sites/4/2017/09/de4db8044fde3806bb93e2c5821aedca.png"
              className="logoSize"
              alt="Daredevil Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.pinimg.com/736x/fc/a5/13/fca513ac2f1a41b0e2cd9620294c5cba.jpg"
            className="legoTeamFigureImage"
            alt="Daredevil Figure"
          />
        </div>  
      </>
    );
  }
  
  export default Daredevil;