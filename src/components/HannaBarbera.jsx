import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import HannaBarberaLogo from '../assets/Logo_Icons/Title_Logos/Hanna_Barbera_Logo.png';
import ScoobyDooLogo from '../assets/Logo_Icons/Hanna_Barberra_Logos/Scooby_Doo_Logo.png';
import SpaceGhostLogo from '../assets/Logo_Icons/Hanna_Barberra_Logos/Space_Ghost_Logo.png';

function HannaBarberaTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="scoobydoo" onClick={() => navigate('/scoobydoo')} style={brandButtonStyle}>
          <img src={ScoobyDooLogo} alt="Scooby Doo Logo" style={brandImgStyle} />
        </button>,
        <button key="spaceghost" onClick={() => navigate('/spaceghost')} style={brandButtonStyle}>
          <img src={SpaceGhostLogo} alt="Space Ghost Logo" style={brandImgStyle} />
        </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent>
        {cells}
      </BrandCarousel>
    );
}

function HannaBarbera()
{
    return (
        <div className='backgroundColorForHannaBarbera'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                src={HannaBarberaLogo}
                className="logoBorder"
                alt="Hanna Barbera Logo"
              />
            </h2>
            <HannaBarberaTitles />
          </div>
        </div>
    );
}


export default HannaBarbera;