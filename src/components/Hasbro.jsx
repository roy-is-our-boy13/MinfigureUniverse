import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import HasbroLogo from '../assets/Logo_Icons/Title_Logos/Hasbro_Logo.png';
import GIJoeLogo from '../assets/Logo_Icons/Hasbro_Logos/GIJoe_Logo.png';
import MicronautsLogo from '../assets/Logo_Icons/Hasbro_Logos/The_Micronauts_logo.png';
import ROMLogo from '../assets/Logo_Icons/Hasbro_Logos/ROM_Logo.png';
import TransformersLogo from '../assets/Logo_Icons/Hasbro_Logos/Transformers_Logo.png';

function HasbroTitles()
{
    const navigate = useNavigate();

    const cells = [
      <button key="gijoe" onClick={() => navigate('/gijoe')} style={brandButtonStyle}>
        <img src={GIJoeLogo} alt="GIJoe Logo" style={brandImgStyle} />
      </button>,
      <button key="micronauts" onClick={() => navigate('/micronauts')} style={brandButtonStyle}>
        <img src={MicronautsLogo} alt="Micronauts Logo" style={brandImgStyle} />
      </button>,
      <button key="romthespaceknight" onClick={() => navigate('/romthespaceknight')} style={brandButtonStyle}>
        <img src={ROMLogo} alt="Rom The Space Knight Logo" style={brandImgStyle} />
      </button>,
      <button key="transformers" onClick={() => navigate('/transformers')} style={brandButtonStyle}>
        <img src={TransformersLogo} alt="Transformers Logo" style={brandImgStyle} />
      </button>
    ];

    return <BrandCarousel>{cells}</BrandCarousel>;
}

function Hasbro() 
{
  return (
    <div className='backgroundColorForHasbro'>
      <div className='franchise-page-inner'>
        <h2>
          <img
            src={HasbroLogo}
            className="logoBorder"
            alt="Hasbro Logo"
          />
        </h2>
        <HasbroTitles />
      </div>
    </div>
  );
}

export default Hasbro;