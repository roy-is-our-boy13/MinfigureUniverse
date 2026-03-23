import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';
import DCLogo from '../assets/Logo_Icons/Title_Logos/DC_Comics_Logo.png';
import AquamanLogo from '../assets/Logo_Icons/DC_Logos/Aquaman_Logo.png';
import AuthorityLogo from '../assets/Logo_Icons/DC_Logos/The_Authority.png';
import BatmanLogo from '../assets/Logo_Icons/DC_Logos/Batman_Logo.png';
import BlueBeetleLogo from '../assets/Logo_Icons/DC_Logos/Blue_Beetle.png';
import BoosterGoldLogo from '../assets/Logo_Icons/DC_Logos/Booster_Gold_Logo.png';
import ConstantineLogo from '../assets/Logo_Icons/DC_Logos/Constantine_Logo.png';
import DoomPatrolLogo from '../assets/Logo_Icons/DC_Logos/Doom_Patrol.png';
import DrFateLogo from '../assets/Logo_Icons/DC_Logos/Doctor_Fate_Logo.png';
import FlashLogo from '../assets/Logo_Icons/DC_Logos/Flash_Logo.png';
import GreenArrowLogo from '../assets/Logo_Icons/DC_Logos/Green_Arrow_Logo.png';
import GreenLanternLogo from '../assets/Logo_Icons/DC_Logos/Green_Lantern_Logo.png';
import JLLogo from '../assets/Logo_Icons/DC_Logos/Justice_League_Logo.png';
import JonahHexLogo from '../assets/Logo_Icons/DC_Logos/Jonah_Hex_Logo.png';
import JSALogo from '../assets/Logo_Icons/DC_Logos/Justice_Society_of_America_Logo.png';
import LegionOfSuperheroesLogo from '../assets/Logo_Icons/DC_Logos/Legion_of_Super_Heroes_Logo.png';
import PhantomStrangerLogo from '../assets/Logo_Icons/DC_Logos/The_Phantom_Stranger.png';
import ShazamLogo from '../assets/Logo_Icons/DC_Logos/Shazam_Logo.png';
import SpectreLogo from '../assets/Logo_Icons/DC_Logos/The_Spectre_Logo.png';
import SupermanLogo from '../assets/Logo_Icons/DC_Logos/Superman_Logo.png';
import TeenTitansLogo from '../assets/Logo_Icons/DC_Logos/Teen_Titans_Logo.png';
import WatchmenLogo from '../assets/Logo_Icons/DC_Logos/Watchmen_Logo.png';
import WildcatsLogo from '../assets/Logo_Icons/DC_Logos/WildCATs_Logo.png';
import WonderWomanLogo from '../assets/Logo_Icons/DC_Logos/Wonder_Woman_Logo.png'; 

function DCTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="aquaman" onClick={() => navigate('/aquaman')} style={brandButtonStyle}>
            <img src={AquamanLogo} alt="Aquaman Logo" style={brandImgStyle} />
        </button>,
        <button key="authority" onClick={() => navigate('/authority')} style={brandButtonStyle}>
            <img
                src={AuthorityLogo}
                alt="The Authority Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="batman" onClick={() => navigate('/batman')} style={brandButtonStyle}>
            <img
                src={BatmanLogo}
                alt="Batman Logo"
                style={brandImgStyle}
            />
        </button>,
         <button key="bluebeetle" onClick={() => navigate('/bluebeetle')} style={brandButtonStyle}>
            <img
                src={BlueBeetleLogo}
                alt="Blue Beetle Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="boostergold" onClick={() => navigate('/boostergold')} style={brandButtonStyle}>
            <img
                src={BoosterGoldLogo}
                alt="Booster Gold Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="constantine" onClick={() => navigate('/constantine')} style={brandButtonStyle}>
            <img
                src={ConstantineLogo}
                alt="Constantine Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="doompatrol" onClick={() => navigate('/doompatrol')} style={brandButtonStyle}>
            <img
                src={DoomPatrolLogo}
                alt="Doom Patrol Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="drfate" onClick={() => navigate('/drfate')} style={brandButtonStyle}>
            <img
                src={DrFateLogo}
                alt="Dr Fate Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="flash" onClick={() => navigate('/flash')} style={brandButtonStyle}>
            <img
                src={FlashLogo}
                alt="Flash Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="greenarrow" onClick={() => navigate('/greenarrow')} style={brandButtonStyle}>
            <img
                src={GreenArrowLogo}
                alt="Green Arrow Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="greenlantern" onClick={() => navigate('/greenlantern')} style={brandButtonStyle}>
            <img
                src={GreenLanternLogo}
                alt="Green Lantern Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="jla" onClick={() => navigate('/jla')} style={brandButtonStyle}>
            <img
                src={JLLogo}
                alt="JLA Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="jonahhex" onClick={() => navigate('/jonahhex')} style={brandButtonStyle}>
            <img
                src={JonahHexLogo}
                alt="Jonah Hex Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="jsa" onClick={() => navigate('/jsa')} style={brandButtonStyle}>
            <img
                src={JSALogo}
                alt="JSA Logo"
                style={brandImgStyle}
            />
         </button>,
         <button key="legionofsuperheroes" onClick={() => navigate('/legionofsuperheroes')} style={brandButtonStyle}>
            <img
                src={LegionOfSuperheroesLogo}
                alt="legion of Superheroes Logo"
                style={brandImgStyle}
            />
         </button>,
         <button key="phantomstranger" onClick={() => navigate('/phantomstranger')} style={brandButtonStyle}>
            <img
                src={PhantomStrangerLogo}
                alt="Phantom Stranger Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="shazam" onClick={() => navigate('/shazam')} style={brandButtonStyle}>
            <img
                src={ShazamLogo}
                alt="Shazam Logo"
                style={brandImgStyle}
            />
        </button>,
        <button key="specter" onClick={() => navigate('/specter')} style={brandButtonStyle}>
            <img
                src={SpectreLogo}
                alt="Spector Logo"
                style={brandImgStyle}
            />
          </button>,
         <button key="superman" onClick={() => navigate('/superman')} style={brandButtonStyle}>
            <img
                src={SupermanLogo}
                alt="Superman Logo"
                style={brandImgStyle}
            />
          </button>,
          <button key="teentitans" onClick={() => navigate('/teentitans')} style={brandButtonStyle}>
            <img
                src={TeenTitansLogo}
                alt="Teen Titans Logo"
                style={brandImgStyle}
            />
          </button>,
          <button key="thewatchman" onClick={() => navigate('/thewatchman')} style={brandButtonStyle}>
            <img
                src={WatchmenLogo}
                alt="The Watchman Logo"
                style={brandImgStyle}
            />
          </button>,
          <button key="wildcats" onClick={() => navigate('/wildcats')} style={brandButtonStyle}>
            <img
                src={WildcatsLogo}
                alt="Wildcats Logo"
                style={brandImgStyle}
            />
            </button>,
          <button key="wonderwoman" onClick={() => navigate('/wonderwoman')} style={brandButtonStyle}>
            <img
                src={WonderWomanLogo}
                alt="Wonder Woman Logo"
                style={brandImgStyle}
            />
          </button>
    ];

    return <BrandCarousel>{cells}</BrandCarousel>;
}

function DC() 
{
    return (
        <div className='backgroundColorForDC'>
            <div className='dc-page-inner'>
                <h2>
                    <img src={DCLogo}
                        className="logoBorder"
                        alt="DC Logo"
                    />
                </h2>
                <DCTitles />
            </div>
        </div>);
}
  
export default DC;