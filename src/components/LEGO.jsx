import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import LegoLogo from '../assets/Logo_Icons/Title_Logos/Lego_Logo.png';
import AgentsLogo from '../assets/Logo_Icons/Lego_Logos/Ultra_Agents_Logo.png';
import BionicleLogo from '../assets/Logo_Icons/Lego_Logos/Bionicle_Logo.png';
import KnightsKingdomLogo from '../assets/Logo_Icons/Lego_Logos/Knights_Kingdom_Logo.webp';
import NinjagoLogo from '../assets/Logo_Icons/Lego_Logos/Ninjago_Logo.png';

function LegoTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="agents" onClick={() => navigate('/agents')} style={brandButtonStyle}>
          <img src={AgentsLogo} alt="Agents Logo" style={brandImgStyle} />
        </button>,
        <button key="bionicle" onClick={() => navigate('/bionicle')} style={brandButtonStyle}>
          <img src={BionicleLogo} alt="Bionicle Logo" style={brandImgStyle} />
        </button>,
        <button key="kinghtskingdom" onClick={() => navigate('/knightskingdom')} style={brandButtonStyle}>
          <img src={KnightsKingdomLogo} alt="Knights Kingdom Logo" style={brandImgStyle} />
        </button>,
        <button key="ninjago" onClick={() => navigate('/ninjago')} style={brandButtonStyle}>
          <img src={NinjagoLogo} alt="Ninjago Logo" style={brandImgStyle} />
        </button>
    ];

    return <BrandCarousel>{cells}</BrandCarousel>;
}

function LEGO()
{
    return(
        <div className='backgroundColorForLEGO'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                    src={LegoLogo}
                    className="logoBorder"
                    alt="LEGO Logo"       
              />
            </h2>
            <LegoTitles />
          </div>
        </div>
    );
}

export default LEGO;