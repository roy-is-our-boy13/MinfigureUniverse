import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gridTemplateRows: 'repeat(12, 1fr)',    
    gap: '0.5px',
    width: '450px',   
    height: '1030px', 
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

function HannaBarberaTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="scoobydoo" onClick={() => navigate('/scoobydoo')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Scooby_doo_logo.png/1200px-Scooby_doo_logo.png"
            className="logoSize"
            alt="Scooby Doo Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
        <button key="spaceghost" onClick={() => navigate('/spaceghost')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/en/8/8e/Space_Ghost_%28TV_series%29.png"
            className="logoSize"
            alt="Space Ghost Logo"
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

function HannaBarbera()
{

    return (
        <div>
      <h2>
        <img
          src="https://1000logos.net/wp-content/uploads/2020/10/Hanna-Barbera-logo.jpg"
          className="logoBorder"
          alt="Hanna Barbera Logo"
      />
      </h2>
      < HannaBarberaTitles />
      </div>

    );
}


export default HannaBarbera;