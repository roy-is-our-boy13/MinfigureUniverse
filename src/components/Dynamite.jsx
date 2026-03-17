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

function DynamiteTitles()
{
    const navigate = useNavigate();

    const cells = [


      <button key="robocop" onClick={() => navigate('/robocop')}>
        <img
            src="https://sonsofgotham.com/cdn/shop/collections/vendor-robocop.png?v=1655497699&width=1600"
            className="logoSize"
            alt="Robo Cop Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </button>,
      <button key="sonja" onClick={() => navigate('/sonja')}>
      <img
          src="https://image.tmdb.org/t/p/original/edw81TOrBphCtYkfr6PTYWxPEzn.png"
          className="logoSize"
          alt="Sonja  Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
      <button key="terminator" onClick={() => navigate('/terminator')}>
      <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/term_logo.png?itok=Ss0A2VuO"
          className="logoSize"
          alt="Terminator Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="theboys" onClick={() => navigate('/theboys')}>
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Boys_TV_series_logo.png"
        className="logoSize"
        alt="The Boys Logo"
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

function Dynamite()
{
        return(
            <div className='backgroundColorForDynamite'>
              <div className='franchise-page-inner'>
                <h2>
                  <img
                        src="https://www.previewsworld.com/Content/images/PublisherLogos/PL_Dynamite.png"
                        className="logoBorder"
                        alt="Dynamite Logo"       
                  />
                </h2>
                <DynamiteTitles />
              </div>
            </div>
        );
}

export default Dynamite;