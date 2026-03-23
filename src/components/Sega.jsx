import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import SegaLogo from '../assets/Logo_Icons/Title_Logos/SEGA_logo.png';
import SonicLogo from '../assets/Logo_Icons/Sega_Logos/Sonic_the_Hedgehog_Logo.png';

function SegaTitles()
{
  const navigate = useNavigate();

  const cells = [
    <button key="sonic" onClick={() => navigate('/sonic')} style={brandButtonStyle}>
      <img src={SonicLogo} alt="Sonic Logo" style={brandImgStyle} />
    </button>
  ];

  return <BrandCarousel>{cells}</BrandCarousel>;
}

function Sega() 
{
    return (
      <div className='backgroundColorForSega'>
        <div className='franchise-page-inner'>
          <h1>
            <img
              src={SegaLogo}
              className="logoBorder"
              alt="Sega Logo"
            />
          </h1>
          <SegaTitles />
        </div>
      </div>
    );
  }
  export default Sega;