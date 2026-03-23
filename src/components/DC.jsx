import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
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

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridAutoRows: 'minmax(80px, auto)',
    gap: '0.5px',
    width: '900px',
    border: '2px solid black',
    backgroundColor: 'grey',
};

const cellStyle = 
{
    border: '.5px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
};

function DCTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="aquaman" onClick={() => navigate('/aquaman')}>
            <img
                src={AquamanLogo}
                className="logoSize"
                alt="Aquaman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="authority" onClick={() => navigate('/authority')}>
            <img
                src={AuthorityLogo}
                className="logoSize"
                alt="The Authority Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="batman" onClick={() => navigate('/batman')}>
            <img
                src={BatmanLogo}
                className="logoSize"
                alt="Batman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
         <button key="bluebeetle" onClick={() => navigate('/bluebeetle')}>
            <img
                src={BlueBeetleLogo}
                className="logoSize"
                alt="Blue Beetle Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="boostergold" onClick={() => navigate('/boostergold')}>
            <img
                src={BoosterGoldLogo}
                className="logoSize"
                alt="Booster Gold Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="constantine" onClick={() => navigate('/constantine')}>
            <img
                src={ConstantineLogo}
                className="logoSize"
                alt="Constantine Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="doompatrol" onClick={() => navigate('/doompatrol')}>
            <img
                src={DoomPatrolLogo}
                className="logoSize"
                alt="Doom Patrol Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="drfate" onClick={() => navigate('/drfate')}>
            <img
                src={DrFateLogo}
                className="logoSize"
                alt="Dr Fate Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="flash" onClick={() => navigate('/flash')}>
            <img
                src={FlashLogo}
                className="logoSize"
                alt="Flash Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="greenarrow" onClick={() => navigate('/greenarrow')}>
            <img
                src={GreenArrowLogo}
                className="logoSize"
                alt="Green Arrow Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="greenlantern" onClick={() => navigate('/greenlantern')}>
            <img
                src={GreenLanternLogo}
                className="logoSize"
                alt="Green Lantern Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jla" onClick={() => navigate('/jla')}>
            <img
                src={JLLogo}
                className="logoSize"
                alt="JLA Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jonahhex" onClick={() => navigate('/jonahhex')}>
            <img
                src={JonahHexLogo}
                className="logoSize"
                alt="Jonah Hex Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jsa" onClick={() => navigate('/jsa')}>
            <img
                src={JSALogo}
                className="logoSize"
                alt="JSA Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
         </button>,
         <button key="legionofsuperheroes" onClick={() => navigate('/legionofsuperheroes')}>
            <img
                src={LegionOfSuperheroesLogo}
                className="logoSize"
                alt="legion of Superheroes Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
         </button>,
         <button key="phantomstranger" onClick={() => navigate('/phantomstranger')}>
            <img
                src={PhantomStrangerLogo}
                className="logoSize"
                alt="Phantom Stranger Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="shazam" onClick={() => navigate('/shazam')}>
            <img
                src={ShazamLogo}
                className="logoSize"
                alt="Shazam Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="specter" onClick={() => navigate('/specter')}>
            <img
                src={SpectreLogo}
                className="logoSize"
                alt="Spector Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
         <button key="superman" onClick={() => navigate('/superman')}>
            <img
                src={SupermanLogo}
                className="logoSize"
                alt="Superman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="teentitans" onClick={() => navigate('/teentitans')}>
            <img
                src={TeenTitansLogo}
                className="logoSize"
                alt="Teen Titans Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="thewatchman" onClick={() => navigate('/thewatchman')}>
            <img
                src={WatchmenLogo}
                className="logoSize"
                alt="The Watchman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="wildcats" onClick={() => navigate('/wildcats')}>
            <img
                src={WildcatsLogo}
                className="logoSize"
                alt="Wildcats Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            </button>,
          <button key="wonderwoman" onClick={() => navigate('/wonderwoman')}>
            <img
                src={WonderWomanLogo}
                className="logoSize"
                alt="Wonder Woman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>
    ];

    return(
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px', 
            minHeight: '100h',
          }}>

          <div style={gridStyle}>
            {cells.map((content, i) => (
              <div key={i} style={cellStyle}>
                {content}
              </div>
            ))}
          </div>
        </div>
      );
}

function DC() 
{
    return (
        <div className='backgroundColorForDC'>
            <div className='dc-page-inner'>
                <h2>
                    <img
src={DCLogo}
                        className="logoBorder"
                        alt="DC Logo"
                    />
                </h2>
                <DCTitles />
            </div>
        </div>);
}
  
export default DC;