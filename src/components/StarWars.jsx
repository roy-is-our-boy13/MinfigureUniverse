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


function LucasFilmTitles()
{
  const navigate = useNavigate();

  const cells = [

        <button key="indianajones" onClick={() => navigate('/indianajones')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAqTfBRuQDblgeEoBzM5BhwU67llc1Ja9Qg&s"
                    className="logoSize"
                    alt="Indiana Jonesc Logo"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
        </button>,
        <button key="starwars-lucasfilm" onClick={() => navigate('/starwars-lucasfilm')}>
              <img
                  src="https://media.designrush.com/inspirations/304680/conversions/Star_Wars_Logo1-preview.jpg"
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
                src="https://vectorseek.com/wp-content/uploads/2024/01/Lucasfilm-LTD-Logo-Vector.svg-.png"
                className="logoBorder"
                alt="LucasFilm Logo"

            />
          </h1>
          <LucasFilmTitles />
        </div>
      </div>);
}
  
export default StwarWars;