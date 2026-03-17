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

function LegoTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="agents" onClick={() => navigate('/agents')}>
        <img
            src="https://atlbrick.com/cdn/shop/collections/Ultra_Agents_logo.jpg?v=1713541696"
            className="logoSize"
            alt="Agents Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="bionicle" onClick={() => navigate('/bionicle')}>
        <img
            src="https://www.lingoblog.dk/wp-content/uploads/2023/05/bionicle.jpg"
            className="logoSize"
            alt="Bionicle Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="kinghtskingdom" onClick={() => navigate('/knightskingdom')}>
        <img
            src="https://poggers.com/cdn/shop/articles/a3d9ba5a5ca2d60dd0f4bdf1f4932bda_b89f140e-605b-4ac4-b7c6-57de418e0a8e_1383x777_crop_center.webp?v=1708120498"
            className="logoSize"
            alt="Kinghts Kingdom Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="ninjago" onClick={() => navigate('/ninjago')}>
        <img
            src="https://i.pinimg.com/474x/61/f5/39/61f53935cdbe6e36f8bc8470404e634a.jpg"
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
        <div>
              <h2>
              <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
                    className="logoBorder"
                    alt="LEGO Logo"       
              />
              </h2>
              <LegoTitles />
        </div>
      );
}

export default LEGO;