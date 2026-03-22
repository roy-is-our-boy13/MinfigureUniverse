import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import ToeiLogo from '../assets/Logo_Icons/Title_Logos/Toei_Logo.png';

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


function ToeiTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="kamenrider" onClick={() => navigate('/kamenrider')}>
            <img
                src="https://images.seeklogo.com/logo-png/55/2/kamen-rider-2020-logo-png_seeklogo-553896.png"
                className="logoSize"
                alt="Kamen Rider Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="kjapspiderman" onClick={() => navigate('/japspiderman')}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Japanese_Spider-Man.png/1200px-Japanese_Spider-Man.png"
                className="logoSize"
                alt="Japanese Spider-Man Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="powerrangers" onClick={() => navigate('/powerrangers')}>
            <img
                src="https://i.pinimg.com/736x/4d/93/4b/4d934b3cd75429994b9729995d6ca170.jpg"
                className="logoSize"
                alt="Power Rangers Logo"
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
          }}
        >
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

function ToeiCompany()
{
    return (
        <div className='backgroundColorForToei'>
          <div className='franchise-page-inner'>
            <h2>
              <img
                src={ToeiLogo}
                className="logoBorder"
                alt="Toei Logo"
              />
            </h2>
            <ToeiTitles />
          </div>
        </div>
    );
}

export default ToeiCompany;