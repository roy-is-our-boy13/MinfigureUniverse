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

function Shield()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://static.wixstatic.com/media/de47c2_eab5b8401529424ca5d4862034bd86c8~mv2.jpg/v1/fill/w_435,h_535,al_c,lg_1,q_80,enc_avif,quality_auto/de47c2_eab5b8401529424ca5d4862034bd86c8~mv2.jpg"
            className="logoSize"
            alt="S.H.I.E.L.D Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2016/10/shield-social.jpg"
            className="legoTeamFigureImage"
            alt="Agents of SHIELD Figures"
          />
        </p>  
      </div>
    );
}

export default Shield;