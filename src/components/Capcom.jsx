import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import CapcomLogo from '../assets/Logo_Icons/Title_Logos/Capcom_logo.png';
import MegaManLogo from '../assets/Logo_Icons/Capcom_Logos/Mega_Man_Logo.png';
import StreetFighterLogo from '../assets/Logo_Icons/Capcom_Logos/Street_Fighter_Logo.png';

function CapcomTitles()
{
  const navigate = useNavigate();

  const cells = [
    <button key="megaman" onClick={() => navigate('/megaman')} style={brandButtonStyle}>
      <img src={MegaManLogo} alt="Mega Man Logo" style={brandImgStyle} />
    </button>,
    <button key="streetfighter" onClick={() => navigate('/streetfighter')} style={brandButtonStyle}>
      <img src={StreetFighterLogo} alt="Street Fighter Logo" style={brandImgStyle} />
    </button>
  ];

  return <BrandCarousel>{cells}</BrandCarousel>;
}

function Capcom() 
{
  return (
    <div className='backgroundColorForCapcom'>
      <div className='franchise-page-inner'>
        <h1>
          <img
              src={CapcomLogo}
              className="logoBorder"
              alt="Capcom Logo"
          />
        </h1>
        <CapcomTitles />
      </div>
    </div>
  );
}

export default Capcom;