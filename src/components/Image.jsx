import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import ImageLogo from '../assets/Logo_Icons/Title_Logos/Image_Comics_Logo.png';
import InvincibleLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Invincible_Logos.png';
import SavageDragonLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Savage_Dragon_Logo.png';
import ShadowHawkLogo from '../assets/Logo_Icons/Image_Comcis_Logos/ShadowHawk_Logo.jpg';
import SpawnLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Spawn_Logo.png';
import WitchbladeLogo from '../assets/Logo_Icons/Image_Comcis_Logos/Witchblade_Logo.png';

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

function ImageTitles()
{
    const navigate = useNavigate();

    const cells = [

      <button key="invincible" onClick={() => navigate('/invincible')}>
        <img
            src={InvincibleLogo}
            className="logoSize"
            alt="Invincible Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="savagedragon" onClick={() => navigate('/savagedragon')}>
        <img
            src={SavageDragonLogo}
            className="logoSize"
            alt="Savage Dragon Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="shadownhawk" onClick={() => navigate('/shadownhawk')}>
        <img
            src={ShadowHawkLogo}
            className="logoSize"
            alt="Shadownhawk Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="spawn" onClick={() => navigate('/spawn')}>
        <img
            src={SpawnLogo}
            className="logoSize"
            alt="Spawn Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="witchblade" onClick={() => navigate('/witchblade')}>
        <img
            src={WitchbladeLogo}
            className="logoSize"
            alt="Witchblade Logo"
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