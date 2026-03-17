import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';

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

function SegaTitles()
{
  const navigate = useNavigate();

  const cells = [

    <button key="sonic" onClick={() => navigate('/sonic')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sonic_The_Hedgehog.svg/1200px-Sonic_The_Hedgehog.svg.png"
            className="logoSize"
            alt="Sonic Logo"
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

function Sega() 
{
    return (

      <div>
        <h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/2560px-SEGA_logo.svg.png"
          className="logoBorder"
          alt="Sega Logo"
      />

      </h1>
      <SegaTitles />
      </div>);

  }
  export default Sega;