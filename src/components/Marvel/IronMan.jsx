import React, { useEffect, useRef } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ironManTheme from '../../assets/Audio/MarvelThemeSongs/IronManTheme.mp3';

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
      <button onClick={() => navigate('/ironmanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/ironmanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function IronMan() 
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
        <audio ref={audioRef} src={ironManTheme} preload="auto" />
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Iron-Man-Logo.png"
              className="logoSize"
              alt="Iron Man Logo"  
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://www.lego.com/cdn/cs/set/assets/bltfd0a02fe95ebbe70/CP_IronMan_Sidekick-Tall2.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
            className="legoTeamFigureImage"
            alt="Iron Man Figure"
          />
        </div>  
      </>
    );
}

export default IronMan;