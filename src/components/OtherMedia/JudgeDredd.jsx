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
      <button onClick={() => navigate('/judgedreddalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/judgedreddenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function JudgeDreddFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://sonsofgotham.com/cdn/shop/collections/download_1.jpg?v=1670955632"
                className="logoSize"
                alt="Judge Dredd Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i0.wp.com/www.richbrix.co.uk/wp-content/uploads/2023/11/PXL_20221024_095517865-01.jpeg?fit=1460%2C1147&ssl=1"
              className="legoTeamFigureImage"
              alt="Judge Dredd Figure" />
      </div>  
      </>
    );
}

function JudgeDredd()
{
    return (<><JudgeDreddFrontPageInterface /></>);
}

export default JudgeDredd;