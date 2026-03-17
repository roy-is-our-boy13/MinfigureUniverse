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
      <button onClick={() => navigate('/pokémonalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/pokémonenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Pokémon()
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png"
                className="logoSize"
                alt="Pokémon Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://minifigs.me/cdn/shop/files/y-full-pokemon-set-plus-togepi.jpg?v=1727943146&width=1946"
              className="legoTeamFigureImage"
              alt="Pokemon Figures" />
      </div>  
      </>
    );
}

export default Pokémon;