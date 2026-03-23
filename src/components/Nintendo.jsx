import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import NintendoLogo from '../assets/Logo_Icons/Title_Logos/Nintendo_Logo.png';
import DonkeyKongLogo from '../assets/Logo_Icons/Nintendo_Logos/Donkey_Kong_Logo.png';
import FZeroLogo from '../assets/Logo_Icons/Nintendo_Logos/F-Zero_Logo.png';
import KirbyLogo from '../assets/Logo_Icons/Nintendo_Logos/Kirby_Logo.png';
import MarioLogo from '../assets/Logo_Icons/Nintendo_Logos/Mario_Logo.png';
import MetroidLogo from '../assets/Logo_Icons/Nintendo_Logos/Metroid_Logo.png';
import PokemonLogo from '../assets/Logo_Icons/Nintendo_Logos/pokemon_Logo.png';
import StarFoxLogo from '../assets/Logo_Icons/Nintendo_Logos/StarFox_Logo.png';
import ZeldaLogo from '../assets/Logo_Icons/Nintendo_Logos/Zelda_Logo.png';

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

function NintendoTitles()
{
  const navigate = useNavigate();

  const cells = [

      <button key="donkeykong" onClick={() => navigate('/donkeykong')}>
              <img
                  src={DonkeyKongLogo}
                  className="logoSize"
                  alt="Donkey Kong Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
      </button>,
      <button key="fzero" onClick={() => navigate('/fzero')}>
              <img
                  src={FZeroLogo}
                  className="logoSize"
                  alt="F-Zero Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
    </button>,
    <button key="kirby" onClick={() => navigate('/kirby')}>
        <img
            src={KirbyLogo}
            className="logoSize"
            alt="Kirby Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="mario" onClick={() => navigate('/mario')}>
            <img
                src={MarioLogo}
                className="logoSize"
                alt="Mario Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
    </button>,
    <button key="metroid" onClick={() => navigate('/metroid')}>
        <img
            src={MetroidLogo}
            className="logoSize"
            alt="Metroid Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="pokémon" onClick={() => navigate('/pokémon')}>
        <img
            src={PokemonLogo}
            className="logoSize"
            alt="Pokémon Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="starfox" onClick={() => navigate('/starfox')}>
        <img
            src={StarFoxLogo}
            className="logoSize"
            alt="Star Fox Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="zelda" onClick={() => navigate('/zelda')}>
        <img
            src={ZeldaLogo}
            className="logoSize"
            alt="Zelda Logo"
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