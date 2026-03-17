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
      <button onClick={() => navigate('/terminatoralies')}>
          Allies
        </button>
        <button onClick={() => navigate('/terminatorenimies')}>
          Enemies
    </button>
    </nav>
  );
}


function Terminator() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/term_logo.png?itok=Ss0A2VuO"
                className="logoSize"
                alt="Terminator Logo"
              />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.ytimg.com/vi/WCDjOlcQJZA/maxresdefault.jpg"
              className="legoTeamFigureImage"
              alt="Terminator Figures" />
      </div>  
      </>
    );
}
export default Terminator;