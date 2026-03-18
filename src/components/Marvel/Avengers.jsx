import React, { useEffect, useRef } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import avengersTheme from '../../assets/Audio/MarvelThemeSongs/AvengersTheme.mp3';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/avengersalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/avengersenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function Avengers()
 {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const tryPlay = async () => {
      try {
        await audioEl.play();
      } catch {
        // Autoplay may be blocked until user interacts with the page.
      }
    };

    const handleFirstInteraction = () => {
      tryPlay();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    tryPlay();
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      audioEl.pause();
      audioEl.currentTime = 0;
    };
  }, []);

    return (
   <>
        <audio ref={audioRef} src={avengersTheme} preload="auto" />
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://insidepulse.com/wp-content/uploads/2023/05/The-Avengers-logo.png"
              className="logoSize"
              alt="Avengers Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Zq-MsKQGJDSEwDV4L44Cnl1MUz-Xx6Yca0K_wpppdmtumVbrw9slQHf8SuH0KrirveY5pXmGznH93lBTEXGkDcVlMx6TelfOWY0GyYqIUY2Q04gLF-ERki8fl05Ttzhonxa_PNY4ZW8N/s1600/001.JPG"
            className="legoTeamFigureImage"
            alt="The Avengers Team"
          />
        </div>
      </>  
    );
  }
  
  export default Avengers;