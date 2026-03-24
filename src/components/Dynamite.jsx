import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import DynamiteLogo from '../assets/Logo_Icons/Title_Logos/Dynamite_Logo.png';
import RoboCopLogo from '../assets/Logo_Icons/Dynamite_Logos/RoboCop-Logo.png';
import SonjaLogo from '../assets/Logo_Icons/Dynamite_Logos/Red_Sonja-Logo.png';
import TerminatorLogo from '../assets/Logo_Icons/Dynamite_Logos/Terminator_Logo.png';
import TheBoysLogo from '../assets/Logo_Icons/Dynamite_Logos/The_Boys_Logo.png';

function DynamiteTitles()
{
    const navigate = useNavigate();

    const cells = [
      <button key="robocop" onClick={() => navigate('/robocop')} style={brandButtonStyle}>
        <img src={RoboCopLogo} alt="Robo Cop Logo" style={brandImgStyle} />
      </button>,
      <button key="sonja" onClick={() => navigate('/sonja')} style={brandButtonStyle}>
        <img src={SonjaLogo} alt="Sonja Logo" style={brandImgStyle} />
      </button>,
      <button key="terminator" onClick={() => navigate('/terminator')} style={brandButtonStyle}>
        <img src={TerminatorLogo} alt="Terminator Logo" style={brandImgStyle} />
      </button>,
      <button key="theboys" onClick={() => navigate('/theboys')} style={brandButtonStyle}>
        <img src={TheBoysLogo} alt="The Boys Logo" style={brandImgStyle} />
      </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent>
        {cells}
      </BrandCarousel>
    );
}

function Dynamite()
{
        return(
            <div className='backgroundColorForDynamite'>
              <div className='franchise-page-inner'>
                <h2>
                  <img
                        src={DynamiteLogo}
                        className="logoBorder"
                        alt="Dynamite Logo"       
                  />
                </h2>
                <DynamiteTitles />
              </div>
            </div>
        );
}

export default Dynamite;