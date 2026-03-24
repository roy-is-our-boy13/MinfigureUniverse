import React, { useEffect, useRef } from 'react';
import MetroidLogo from '../../assets/Logo_Icons/Nintendo_Logos/Metroid_Logo.png';
import metroidPrimeTheme from '../../assets/Audio/NintendoThemeSongs/MetroidPrimeThemeSong.mp3';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/metroidalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/metroidenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Metroid() 
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
        <audio ref={audioRef} src={metroidPrimeTheme} preload="auto" />
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src={MetroidLogo}
                className="logoSize"
                alt="Metroid Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://i0.wp.com/shinesparkers.net/wp-content/uploads/2021/01/Lego-Metroid-set-Samus-Zebesians-and-Baby-Metroid.png?resize=1288%2C724&ssl=1"
              className="legoTeamFigureImage"
              alt="Metroid Figures" />
      </div>  
      </>
    );
}

export default Metroid;