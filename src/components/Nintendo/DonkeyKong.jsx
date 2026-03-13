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

function DonkeyKong() 
{
    return (
      <>
        <h2>
             <img
                  src="https://seeklogo.com/images/D/donkey-kong-logo-25FF3959B2-seeklogo.com.png"
                  className="logoSize"
                  alt="Donkey Kong Logo"
              />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://static.wixstatic.com/media/43d28f_9005e3871b99426d80a23edb740b25d9~mv2.jpg/v1/fill/w_480,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/43d28f_9005e3871b99426d80a23edb740b25d9~mv2.jpg"
              class = "legoTeamFigureImage"
              alt="Donkey Kong Figure"
          />
        </p>  
      </>
    );
}
export default DonkeyKong;