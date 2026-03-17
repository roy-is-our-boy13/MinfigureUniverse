import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/metroidalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/metroidenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Metroid() 
{
   return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Metroid_logo.png"
                className="logoSize"
                alt="Metroid Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i0.wp.com/shinesparkers.net/wp-content/uploads/2021/01/Lego-Metroid-set-Samus-Zebesians-and-Baby-Metroid.png?resize=1288%2C724&ssl=1"
              className="legoTeamFigureImage"
              alt="Metroid Figures" />
      </div>  
      </>
    );
}

export default Metroid;