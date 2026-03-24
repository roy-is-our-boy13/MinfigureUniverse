import React from 'react';
import { useNavigate } from 'react-router-dom';
import JapaneseSpiderManLogo from '../../assets/Logo_Icons/Toei_Logos/Japanese_Spider-Man_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/japspidermanalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/japspidermanenimies')}>
          Enemies
    </button>
    </nav>
  );
}


function JapSpiderMan()
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src={JapaneseSpiderManLogo}
                className="logoSize"
                alt="Japanese Spider-Man Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.redd.it/6dvaqi4pd7c71.jpg"
              className="legoTeamFigureImage"
              alt="Japanese Spider-Man Figure" />
      </div>  
      </>
    );
}

export default JapSpiderMan;