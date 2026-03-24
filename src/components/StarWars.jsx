import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import LucasfilmLogo from '../assets/Logo_Icons/Title_Logos/LucasFilm_Logo.png';
import IndianaJonesLogo from '../assets/Logo_Icons/Lucasfilm_Logos/Indiana_Jones_logo.png';
import StarWarsLogo from '../assets/Logo_Icons/Lucasfilm_Logos/Star_Wars_Logo.png';

function LucasFilmTitles()
{
  const navigate = useNavigate();

  const cells = [
    <button key="indianajones" onClick={() => navigate('/indianajones')} style={brandButtonStyle}>
      <img src={IndianaJonesLogo} alt="Indiana Jones Logo" style={brandImgStyle} />
    </button>,
    <button key="starwars-lucasfilm" onClick={() => navigate('/starwars-lucasfilm')} style={brandButtonStyle}>
      <img src={StarWarsLogo} alt="Star Wars Logo" style={brandImgStyle} />
    </button>
  ];

  return (
    <BrandCarousel hideArrows centerContent>
      {cells}
    </BrandCarousel>
  );
}

function StwarWars()
{
    return (
      <div className='backgroundColorForLucasFilm'>
        <div className='lucasfilm-page-inner'>
          <h1>
            <img
                src={LucasfilmLogo}
                className="logoBorder"
                alt="LucasFilm Logo"
            />
          </h1>
          <LucasFilmTitles />
        </div>
      </div>);
}
  
export default StwarWars;