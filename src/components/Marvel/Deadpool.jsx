import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import DeadpoolLogo from '../../assets/Logo_Icons/Marvel_Logos/Deadpool_Logo.png';

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
      <button onClick={() => navigate('/deadpoolalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/deadpoolenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function Deadpool()
 {
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src={DeadpoolLogo}
              className="logoSize"
              alt="Deadpool Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://blog.firestartoys.com/wp-content/uploads/2020/03/2020-02-16-08.56.19.jpg"
            className="legoTeamFigureImage"
            alt="Deadpool Figure"
          />
        </div>  
      </>
    );
  }
  
  export default Deadpool;