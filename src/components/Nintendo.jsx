import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import NintendoLogo from '../assets/Logo_Icons/Title_Logos/Nintendo_Logo.png';
import DonkeyKongLogo from '../assets/Logo_Icons/Nintendo_Logos/Donkey_Kong_Logo.png';
import FZeroLogo from '../assets/Logo_Icons/Nintendo_Logos/F-Zero_Logo.png';
import KirbyLogo from '../assets/Logo_Icons/Nintendo_Logos/Kirby_Logo.png';
import MarioLogo from '../assets/Logo_Icons/Nintendo_Logos/Mario_Logo.png';
import MetroidLogo from '../assets/Logo_Icons/Nintendo_Logos/Metroid_Logo.png';
import PokemonLogo from '../assets/Logo_Icons/Nintendo_Logos/pokemon_Logo.png';
import StarFoxLogo from '../assets/Logo_Icons/Nintendo_Logos/StarFox_Logo.png';
import ZeldaLogo from '../assets/Logo_Icons/Nintendo_Logos/Zelda_Logo.png';

function NintendoTitles()
{
  const navigate = useNavigate();

  const cells = [
    <button key="donkeykong" onClick={() => navigate('/donkeykong')} style={brandButtonStyle}>
      <img src={DonkeyKongLogo} alt="Donkey Kong Logo" style={brandImgStyle} />
    </button>,
    <button key="fzero" onClick={() => navigate('/fzero')} style={brandButtonStyle}>
      <img src={FZeroLogo} alt="F-Zero Logo" style={brandImgStyle} />
    </button>,
    <button key="kirby" onClick={() => navigate('/kirby')} style={brandButtonStyle}>
      <img src={KirbyLogo} alt="Kirby Logo" style={brandImgStyle} />
    </button>,
    <button key="mario" onClick={() => navigate('/mario')} style={brandButtonStyle}>
      <img src={MarioLogo} alt="Mario Logo" style={brandImgStyle} />
    </button>,
    <button key="metroid" onClick={() => navigate('/metroid')} style={brandButtonStyle}>
      <img src={MetroidLogo} alt="Metroid Logo" style={brandImgStyle} />
    </button>,
    <button key="pokémon" onClick={() => navigate('/pokémon')} style={brandButtonStyle}>
      <img src={PokemonLogo} alt="Pokémon Logo" style={brandImgStyle} />
    </button>,
    <button key="starfox" onClick={() => navigate('/starfox')} style={brandButtonStyle}>
      <img src={StarFoxLogo} alt="Star Fox Logo" style={brandImgStyle} />
    </button>,
    <button key="zelda" onClick={() => navigate('/zelda')} style={brandButtonStyle}>
      <img src={ZeldaLogo} alt="Zelda Logo" style={brandImgStyle} />
    </button>
  ];

  return (
    <BrandCarousel hideArrows centerContent shrinkToContent>
      {cells}
    </BrandCarousel>
  );
}

function Nintendo() 
{
    return(
        <div className='backgroundColorForNintendo'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                  src={NintendoLogo}
                  className="logoBorder"
                  alt="Nintendo Logo"
              />
            </h2>
            <NintendoTitles />
          </div>
        </div>
    );
}
  
export default Nintendo;