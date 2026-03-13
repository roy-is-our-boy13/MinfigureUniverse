import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gridTemplateRows: 'repeat(13, 1fr)',    
    gap: '0.5px',
    width: '650px',   
    height: '123px', 
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


function HasbroTitles()
{
    const navigate = useNavigate();

    const cells = [

      <button key="gijoe" onClick={() => navigate('/gijoe')}>
            <img
                src="https://www.thesimplemanstore.com/cdn/shop/files/GiJoeLogomagnet_theSimpleMan.webp?v=1684445934"
                className="logoSize"
                alt="GIJoe Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="micronauts" onClick={() => navigate('/micronauts')}>
            <img
                src="https://i.pinimg.com/474x/d7/30/1a/d7301ae3cfedeb9695e65804b54d176f.jpg"
                className="logoSize"
                alt="Micronauts Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="romthespaceknight" onClick={() => navigate('/romthespaceknight')}>
            <img
                src="https://images.shoutwiki.com/idwhasbro/thumb/6/6d/ROM_logo.png/1200px-ROM_logo.png"
                className="logoSize"
                alt="Rom The Space Knight Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="transformers" onClick={() => navigate('/transformers')}>
        <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1381c7cf-3074-4fbe-ab72-3245d1242c37/d84ps76-fbf6e75c-e633-4c40-bd89-0f5ecb598f86.png/v1/fill/w_800,h_212/transformers_g1_logo_autobot_theme_by_wargodarts_d84ps76-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyIiwicGF0aCI6IlwvZlwvMTM4MWM3Y2YtMzA3NC00ZmJlLWFiNzItMzI0NWQxMjQyYzM3XC9kODRwczc2LWZiZjZlNzVjLWU2MzMtNGM0MC1iZDg5LTBmNWVjYjU5OGY4Ni5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7Z-cKdJ_H_Qq83ySm-NpxDQFHfJ5eaustvcxsKq5wCg"
              className="logoSize"
              alt="Transformers Logo"
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

function Hasbro() 
{
  return (
          <div>
            <h2>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01093dcf-3500-4866-b84d-fb3c90fa9cfc/dg07pl4-cbd0e04d-d987-405a-b2a3-41285e5f3482.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDkzZGNmLTM1MDAtNDg2Ni1iODRkLWZiM2M5MGZhOWNmY1wvZGcwN3BsNC1jYmQwZTA0ZC1kOTg3LTQwNWEtYjJhMy00MTI4NWU1ZjM0ODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J4pT1vjwT5wWpGpk7LS-Ocg_xW-IbNqrJ-3_yBrebhM" 
                className="logoBorder"
                alt="Hasbro Logo"
              />
            </h2>
            <HasbroTitles />
        </div>);
}

export default Hasbro;