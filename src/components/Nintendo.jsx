import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import NintendoLogo from '../assets/Logo_Icons/Title_Logos/Nintendo_Logo.png';

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
                  src="https://seeklogo.com/images/D/donkey-kong-logo-25FF3959B2-seeklogo.com.png"
                  className="logoSize"
                  alt="Donkey Kong Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
      </button>,
      <button key="fzero" onClick={() => navigate('/fzero')}>
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/7/77/F-Zero_logo.png"
                  className="logoSize"
                  alt="F-Zero Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
    </button>,
    <button key="kirby" onClick={() => navigate('/kirby')}>
        <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/kirby-4-logo.png"
            className="logoSize"
            alt="Kirby Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="mario" onClick={() => navigate('/mario')}>
            <img
                src="https://media.sketchfab.com/models/1d9498955dd040bbb39990459d8730dd/thumbnails/51c0731a7b3e442b89a14986a166b39a/74c268cf531d4b21a6dab61a3a762820.jpeg"
                className="logoSize"
                alt="Mario Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
    </button>,
    <button key="metroid" onClick={() => navigate('/metroid')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Metroid_logo.png"
            className="logoSize"
            alt="Metroid Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="pokémon" onClick={() => navigate('/pokémon')}>
        <img
            src="https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png"
            className="logoSize"
            alt="Pokémon Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="starfox" onClick={() => navigate('/starfox')}>
        <img
            src="https://seeklogo.com/images/S/starfox-logo-1E2B4889EC-seeklogo.com.png"
            className="logoSize"
            alt="Star Fox Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="zelda" onClick={() => navigate('/zelda')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/2560px-Zelda_Logo.svg.png"
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