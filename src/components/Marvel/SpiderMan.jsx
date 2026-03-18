import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import spiderManBackground from '../../assets/BackgroundPhotos/SpiderManBackground.png';
import spiderManTheme from '../../assets/Audio/MarvelThemeSongs/SpiderManTheme.mp3';

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

const backgroundStyle = {
  backgroundImage: `url(${spiderManBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
};

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/spidermanfamily')}>
        Family
      </button>
      <button onClick={() => navigate('/spidermanalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/spidermanenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function SpiderMan() 
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
    <div style={backgroundStyle}>
      <audio ref={audioRef} src={spiderManTheme} preload="auto" />
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://1000logos.net/wp-content/uploads/2023/02/Spiderman-Logo-1996.png"
            className="logoSize"
            alt="Spider-Man Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMWE2Y2E5ZjctZDIxOS00MjA0LWIyYTctMTIzYzkzNWFkMmM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          className="legoTeamFigureImage"
          alt="Spider-Man Figure"
        />
      </div>
    </div>
  );
}

export default SpiderMan;