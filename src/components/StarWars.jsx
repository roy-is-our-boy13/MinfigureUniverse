import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import LucasfilmLogo from '../assets/Logo_Icons/Title_Logos/LucasFilm_Logo.png';
import IndianaJonesLogo from '../assets/Logo_Icons/Lucasfilm_Logos/Indiana_Jones_logo.png';
import StarWarsLogo from '../assets/Logo_Icons/Lucasfilm_Logos/Star_Wars_Logo.png';

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


function LucasFilmTitles()
{
  const navigate = useNavigate();

  const cells = [

        <button key="indianajones" onClick={() => navigate('/indianajones')}>
                <img
                    src={IndianaJonesLogo}
                    className="logoSize"
                    alt="Indiana Jonesc Logo"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
        </button>,
        <button key="starwars-lucasfilm" onClick={() => navigate('/starwars-lucasfilm')}>
              <img
                  src={StarWarsLogo}
                  className="logoSize"
                  alt="Star Wars Logo"
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

function StwarWars()
{
    return (
      <div className='backgroundColorForLucasFilm'>
        <div className='lucasfilm-page-inner'>
          <h1>
            <img
                src={LucasfilmLogo}
                className="logoBorder"
                alt="LucasFilm Logo"
            />
          </h1>
          <LucasFilmTitles />
        </div>
      </div>);
}
  
export default StwarWars;