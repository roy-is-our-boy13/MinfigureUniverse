import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import ToeiLogo from '../assets/Logo_Icons/Title_Logos/Toei_Logo.png';

function ToeiTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="kamenrider" onClick={() => navigate('/kamenrider')} style={brandButtonStyle}>
            <img src="https://images.seeklogo.com/logo-png/55/2/kamen-rider-2020-logo-png_seeklogo-553896.png" alt="Kamen Rider Logo" style={brandImgStyle} />
        </button>,
        <button key="kjapspiderman" onClick={() => navigate('/japspiderman')} style={brandButtonStyle}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Japanese_Spider-Man.png/1200px-Japanese_Spider-Man.png" alt="Japanese Spider-Man Logo" style={brandImgStyle} />
        </button>,
        <button key="powerrangers" onClick={() => navigate('/powerrangers')} style={brandButtonStyle}>
            <img src="https://i.pinimg.com/736x/4d/93/4b/4d934b3cd75429994b9729995d6ca170.jpg" alt="Power Rangers Logo" style={brandImgStyle} />
        </button>
    ];

    return <BrandCarousel>{cells}</BrandCarousel>;
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