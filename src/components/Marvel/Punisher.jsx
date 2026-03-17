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

function Punisher() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/12/22/b1174a59-9c20-40fc-8a09-e76e9e183ec4.jpg"
              className="logoSize"
              alt="Punisher Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://i.ebayimg.com/images/g/ONcAAOSw8olhQcCP/s-l1200.jpg"
            className="legoTeamFigureImage"
            alt="The Punisher Figure"
          />
        </div>  
      </>
    );
}
export default Punisher;