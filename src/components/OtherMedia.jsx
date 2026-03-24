import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import HaloLogo from '../assets/Logo_Icons/OtherMedia_Logos/Halo_Logo.png';
import JudgeDreddLogo from '../assets/Logo_Icons/OtherMedia_Logos/Judge_Dredd_Logo.png';
import MortalKombatLogo from '../assets/Logo_Icons/OtherMedia_Logos/Mortal_Kombat_Logo.png';
import RocketeerLogo from '../assets/Logo_Icons/OtherMedia_Logos/The_Rocketeer_Logo.png';
import ThunderCatsLogo from '../assets/Logo_Icons/OtherMedia_Logos/ThunderCats_Logo.png';
import TickLogo from '../assets/Logo_Icons/OtherMedia_Logos/The_Tick_Logo.png';
import TMNTLogo from '../assets/Logo_Icons/OtherMedia_Logos/TMNT_Logo.png';

function OtherTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="halo" onClick={() => navigate('/halo')} style={brandButtonStyle}>
            <img src={HaloLogo} alt="Halo Logo" style={brandImgStyle} />
        </button>,
        <button key="judgedredd" onClick={() => navigate('/judgedredd')} style={brandButtonStyle}>
            <img src={JudgeDreddLogo} alt="Judge Dredd Logo" style={brandImgStyle} />
        </button>,
        <button key="mortalkombat" onClick={() => navigate('/mortalkombat')} style={brandButtonStyle}>
            <img src={MortalKombatLogo} alt="Mortal Kombat Logo" style={brandImgStyle} />
        </button>,
        <button key="rocketeer" onClick={() => navigate('/rocketeer')} style={brandButtonStyle}>
            <img src={RocketeerLogo} alt="Rocketeer Logo" style={brandImgStyle} />
        </button>,
        <button key="thundercats" onClick={() => navigate('/thundercats')} style={brandButtonStyle}>
            <img src={ThunderCatsLogo} alt="Thundercats Logo" style={brandImgStyle} />
        </button>,
        <button key="tick" onClick={() => navigate('/tick')} style={brandButtonStyle}>
            <img src={TickLogo} alt="Tick Logo" style={brandImgStyle} />
        </button>,
        <button key="tmnt" onClick={() => navigate('/tmnt')} style={brandButtonStyle}>
            <img src={TMNTLogo} alt="TMNT Logo" style={brandImgStyle} />
        </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent>
        {cells}
      </BrandCarousel>
    );
}

function OtherMedia()
{
    return(
        <div className='backgroundColorForOtherMedia'>
          <div className='franchise-page-inner'>
            <h2>
              Other Medias
            </h2>
            <OtherTitles />
          </div>
        </div>
    );
}

export default OtherMedia;