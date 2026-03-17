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
      <button onClick={() => navigate('/mortalkombatalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/mortalkombatenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function MortalKombatFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://cdna.artstation.com/p/assets/images/images/016/514/720/large/victor-catib-logo-mk-vetorizado-completo.jpg?1552442118"
                className="logoSize"
                alt="Mortal Kombat Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/oHsAAOSwwd1la0MG/$_32.JPG?set_id=880000500F"
              className="legoTeamFigureImage"
              alt="Mortal Kombat Figures" />
      </div>  
      </>
    );
}


function MortalKombat()
{
    return (<><MortalKombatFrontPageInterface /></>);
}

export default  MortalKombat;