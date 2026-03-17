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

function OtherTitles()
{
    const navigate = useNavigate();

    const cells = [
    <button key="halo" onClick={() => navigate('/halo')}>
        <img
            src="https://cdn.freebiesupply.com/logos/large/2x/halo-logo-png-transparent.png"
            className="logoSize"
            alt="Halo Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="judgedredd" onClick={() => navigate('/judgedredd')}>
        <img
            src="https://sonsofgotham.com/cdn/shop/collections/download_1.jpg?v=1670955632"
            className="logoSize"
            alt="Judge Dredd Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="mortalkombat" onClick={() => navigate('/mortalkombat')}>
        <img
            src="https://cdna.artstation.com/p/assets/images/images/016/514/720/large/victor-catib-logo-mk-vetorizado-completo.jpg?1552442118"
            className="logoSize"
            alt="Mortal Kombat Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="rocketeer" onClick={() => navigate('/rocketeer')}>
        <img
            src="https://insidepulse.com/wp-content/uploads/2022/06/The-Rocketeer-logo-OG.png"
            className="logoSize"
            alt="Rocketeer Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="thundercats" onClick={() => navigate('/thundercats')}>
        <img
            src="https://1000logos.net/wp-content/uploads/2023/07/ThunderCats-Logo-1985.png"
            className="logoSize"
            alt="Thundercats Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="tick" onClick={() => navigate('/tick')}>
        <img
            src="https://i.redd.it/i72wmka4je571.png"
            className="logoSize"
            alt="Tick Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="tmnt" onClick={() => navigate('/tmnt')}>
        <img
            src="https://preview.redd.it/favorite-tmnt-logo-v0-eoy4xf4d64k81.jpg?width=640&crop=smart&auto=webp&s=a5a21bff6b3c5812ea397742c75c537d6300d1ba"
            className="logoSize"
            alt="TMNT Logo"
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

function OtherMedia()
{
    return(
        <div className='backgroundColorForOtherMedia'>
          <div className='franchise-page-inner'>
            <h2>
              Other Medias
            </h2>
            <OtherTitles />
          </div>
        </div>
    );
}

export default OtherMedia;