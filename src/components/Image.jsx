import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import ImageLogo from '../assets/Logo_Icons/Title_Logos/Image_Comics_Logo.png';
import InvincibleLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Invincible_Logos.png';
import SavageDragonLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Savage_Dragon_Logo.png';
import ShadowHawkLogo from '../assets/Logo_Icons/Image_Comcis_Logos/ShadowHawk_Logo.jpg';
import SpawnLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Spawn_Logo.png';
import WitchbladeLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Witchblade_Logo.png';

function ImageTitles()
{
    const navigate = useNavigate();

    const cells = [
      <button key="invincible" onClick={() => navigate('/invincible')} style={brandButtonStyle}>
        <img src={InvincibleLogo} alt="Invincible Logo" style={brandImgStyle} />
      </button>,
      <button key="savagedragon" onClick={() => navigate('/savagedragon')} style={brandButtonStyle}>
        <img src={SavageDragonLogo} alt="Savage Dragon Logo" style={brandImgStyle} />
      </button>,
      <button key="shadownhawk" onClick={() => navigate('/shadownhawk')} style={brandButtonStyle}>
        <img src={ShadowHawkLogo} alt="Shadownhawk Logo" style={brandImgStyle} />
      </button>,
      <button key="spawn" onClick={() => navigate('/spawn')} style={brandButtonStyle}>
        <img src={SpawnLogo} alt="Spawn Logo" style={brandImgStyle} />
      </button>,
      <button key="witchblade" onClick={() => navigate('/witchblade')} style={brandButtonStyle}>
        <img src={WitchbladeLogo} alt="Witchblade Logo" style={brandImgStyle} />
      </button>
    ];

    return (
      <BrandCarousel hideArrows centerContent>
        {cells}
      </BrandCarousel>
    );
}

function Image() 
{
    return (
      <div className='backgroundColorForImage'>
        <div className='image-page-inner'>
          <h1>
            <img
                src={ImageLogo}
                className="logoBorder"
                alt="Image Logo"
            />
          </h1>
          <ImageTitles />
        </div>
      </div>);
}
  
export default Image;