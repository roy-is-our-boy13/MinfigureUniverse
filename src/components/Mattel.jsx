import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import MattelLogo from '../assets/Logo_Icons/Title_Logos/Mattel_Logo.png';
import BlokBotsLogo from '../assets/Logo_Icons/Mattel_Logos/BlokBots_Logo.png';
import DragonsLogo from '../assets/Logo_Icons/Mattel_Logos/Dragons_Logo.png';
import HeManLogo from '../assets/Logo_Icons/Mattel_Logos/He_Man_Logo.png';

function MattelTitles()
{
    const navigate = useNavigate();

    const cells = [
      <button key="blokbots" onClick={() => navigate('/blokbots')} style={brandButtonStyle}>
        <img src={BlokBotsLogo} alt="Blok Bots Logo" style={brandImgStyle} />
      </button>,
      <button key="dragons" onClick={() => navigate('/dragons')} style={brandButtonStyle}>
        <img src={DragonsLogo} alt="Dragons Logo" style={brandImgStyle} />
      </button>,
      <button key="heman" onClick={() => navigate('/heman')} style={brandButtonStyle}>
        <img src={HeManLogo} alt="He-Man Logo" style={brandImgStyle} />
      </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent shrinkToContent>
        {cells}
      </BrandCarousel>
    );
}

function Mattel() 
{
    return(
      <div className='backgroundColorForMattel'>
        <div className='franchise-page-inner'>
          <h2>
            <img
                  src={MattelLogo}
                  className="logoBorder"
                  alt="Mattel Logo"       
            />
          </h2>
          <MattelTitles />
        </div>
      </div>
    );
}
  
export default Mattel;