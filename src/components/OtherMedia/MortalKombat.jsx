import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav>
      <div>
        <button onClick={() => navigate('/')}>
          Heroes
        </button>
        <button onClick={() => navigate('/')}>
          Villians
        </button>
      </div>
    </nav>
  );
}

function MortalKombatFrontPageInterface()
{
  return (
      <>
        <h2>
             <img
                src="https://cdna.artstation.com/p/assets/images/images/016/514/720/large/victor-catib-logo-mk-vetorizado-completo.jpg?1552442118"
                className="logoSize"
                alt="Mortal Kombat Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/oHsAAOSwwd1la0MG/$_32.JPG?set_id=880000500F"
              class = "legoTeamFigureImage"
              alt="Mortal Kombat Figures"
          />
        </p>  
      </>
    );
}


function MortalKombat()
{
    return (<><MortalKombatFrontPageInterface /></>);
}

export default  MortalKombat;