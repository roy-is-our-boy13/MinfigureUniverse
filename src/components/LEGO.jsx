import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import LegoLogo from '../assets/Logo_Icons/Title_Logos/Lego_Logo.png';
import AgentsLogo from '../assets/Logo_Icons/Lego_Logos/Ultra_Agents_Logo.png';
import BionicleLogo from '../assets/Logo_Icons/Lego_Logos/Bionicle_Logo.png';
import KnightsKingdomLogo from '../assets/Logo_Icons/Lego_Logos/Knights_Kingdom_Logo.webp';
import NinjagoLogo from '../assets/Logo_Icons/Lego_Logos/Ninjago_Logo.png';


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

function LegoTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="agents" onClick={() => navigate('/agents')}>
        <img
            src={AgentsLogo}
            className="logoSize"
            alt="Agents Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="bionicle" onClick={() => navigate('/bionicle')}>
        <img
            src={BionicleLogo}
            className="logoSize"
            alt="Bionicle Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="kinghtskingdom" onClick={() => navigate('/knightskingdom')}>
        <img
            src={KnightsKingdomLogo}
            className="logoSize"
            alt="Kinghts Kingdom Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="ninjago" onClick={() => navigate('/ninjago')}>
        <img
            src={NinjagoLogo}
            className="logoSize"
            alt="Ninjago Logo"
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

function LEGO()
{
    return(
        <div className='backgroundColorForLEGO'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                    src={LegoLogo}
                    className="logoBorder"
                    alt="LEGO Logo"       
              />
            </h2>
            <LegoTitles />
          </div>
        </div>
    );
}

export default LEGO;