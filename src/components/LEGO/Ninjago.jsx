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
      <button onClick={() => navigate('/ninjagoalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/ninjagoenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function NinjagoFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src="https://i.pinimg.com/474x/61/f5/39/61f53935cdbe6e36f8bc8470404e634a.jpg"
                className="logoSize"
                alt="Ninjago Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://www.shutterstock.com/image-photo/germany-march-14th-2025-editorial-260nw-2599666793.jpg"
              className="legoTeamFigureImage"
              alt="Ninjago Figures" />
      </div>  
      </>
    );
}

function Ninjago() 
{
    return (<><NinjagoFrontPageInterface /></>);
}
export default Ninjago;