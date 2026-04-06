import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import ToeiLogo from '../assets/Logo_Icons/Title_Logos/Toei_Logo.png';
import KamenRiderLogo from '../assets/Logo_Icons/Toei_Logos/Kamen_Rider_Logo.png';
import JapaneseSpiderManLogo from '../assets/Logo_Icons/Toei_Logos/Japanese_Spider-Man_Logo.png';
import PowerRangersLogo from '../assets/Logo_Icons/Toei_Logos/Power_Rangers_Logo.png';

function ToeiTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="kamenrider" onClick={() => navigate('/kamenrider')} style={brandButtonStyle}>
            <img src={KamenRiderLogo} alt="Kamen Rider Logo" style={brandImgStyle} />
        </button>,
        <button key="kjapspiderman" onClick={() => navigate('/japspiderman')} style={brandButtonStyle}>
            <img src={JapaneseSpiderManLogo} alt="Japanese Spider-Man Logo" style={brandImgStyle} />
        </button>,
        <button key="powerrangers" onClick={() => navigate('/powerrangers')} style={brandButtonStyle}>
            <img src={PowerRangersLogo} alt="Power Rangers Logo" style={brandImgStyle} />
        </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent shrinkToContent>
        {cells}
      </BrandCarousel>
    );
}

function ToeiCompany()
{
    return (
        <div className='backgroundColorForToei'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                src={ToeiLogo}
                className="logoBorder"
                alt="Toei Logo"
              />
            </h2>
            <ToeiTitles />
          </div>
        </div>
    );
}

export default ToeiCompany;