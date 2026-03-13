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
    height: '245px', 
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Invincible_comic_series_logo.png/1200px-Invincible_comic_series_logo.png"
            className="logoSize"
            alt="Invincible Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="savagedragon" onClick={() => navigate('/savagedragon')}>
        <img
            src="https://www.savagedragon.com/wp-content/themes/savagetheme/content/images/logos/savagedragon-logo-blue-1.svg"
            className="logoSize"
            alt="Savage Dragon Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="shadownhawk" onClick={() => navigate('/shadownhawk')}>
        <img
            src="https://ih1.redbubble.net/image.2345572536.0444/st,small,507x507-pad,600x600,f8f8f8.jpg"
            className="logoSize"
            alt="Shadownhawk Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="spawn" onClick={() => navigate('/spawn')}>
        <img
            src="https://insidepulse.com/wp-content/uploads/2022/06/Spawn-logo.png"
            className="logoSize"
            alt="Spawn Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="witchblade" onClick={() => navigate('/witchblade')}>
        <img
            src="https://i0.wp.com/kleinletters.com/Blog/wp-content/uploads/2007/11/witchblade4black.jpg"
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
        <h1>
          <img
              src="https://imagecomics.com/assets/img/image-comics-logo.png"
              className="logoBorder"
              alt="Image Logo"
          />
          </h1>
          <ImageTitles />
      </div>);
}
  
export default Image;