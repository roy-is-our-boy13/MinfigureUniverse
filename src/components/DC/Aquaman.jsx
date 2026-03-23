import React from 'react';
import AquamanLogo from '../../assets/Logo_Icons/DC_Logos/Aquaman_Logo.png';
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
      <button onClick={() => navigate('/aquamanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/aquamanenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function Aquaman() 
{
  return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
           <img
                src={AquamanLogo}
                className="logoSize"
                alt="Aquaman Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://cdn.toypro.com/media/cache/tp_product_detail/uploads/images/product/40/88234.webp"
              className="legoTeamFigureImage"
              alt="Aquaman Figure"
          />
        </div>  
      </>
    );
}
export default Aquaman;