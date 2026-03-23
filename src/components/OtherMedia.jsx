import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import { BrandCarousel, brandButtonStyle, brandImgStyle } from './BrandCarousel';

function OtherTitles()
{
    const navigate = useNavigate();

    const cells = [
        <button key="halo" onClick={() => navigate('/halo')} style={brandButtonStyle}>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/halo-logo-png-transparent.png" alt="Halo Logo" style={brandImgStyle} />
        </button>,
        <button key="judgedredd" onClick={() => navigate('/judgedredd')} style={brandButtonStyle}>
            <img src="https://sonsofgotham.com/cdn/shop/collections/download_1.jpg?v=1670955632" alt="Judge Dredd Logo" style={brandImgStyle} />
        </button>,
        <button key="mortalkombat" onClick={() => navigate('/mortalkombat')} style={brandButtonStyle}>
            <img src="https://cdna.artstation.com/p/assets/images/images/016/514/720/large/victor-catib-logo-mk-vetorizado-completo.jpg?1552442118" alt="Mortal Kombat Logo" style={brandImgStyle} />
        </button>,
        <button key="rocketeer" onClick={() => navigate('/rocketeer')} style={brandButtonStyle}>
            <img src="https://insidepulse.com/wp-content/uploads/2022/06/The-Rocketeer-logo-OG.png" alt="Rocketeer Logo" style={brandImgStyle} />
        </button>,
        <button key="thundercats" onClick={() => navigate('/thundercats')} style={brandButtonStyle}>
            <img src="https://1000logos.net/wp-content/uploads/2023/07/ThunderCats-Logo-1985.png" alt="Thundercats Logo" style={brandImgStyle} />
        </button>,
        <button key="tick" onClick={() => navigate('/tick')} style={brandButtonStyle}>
            <img src="https://i.redd.it/i72wmka4je571.png" alt="Tick Logo" style={brandImgStyle} />
        </button>,
        <button key="tmnt" onClick={() => navigate('/tmnt')} style={brandButtonStyle}>
            <img src="https://preview.redd.it/favorite-tmnt-logo-v0-eoy4xf4d64k81.jpg?width=640&crop=smart&auto=webp&s=a5a21bff6b3c5812ea397742c75c537d6300d1ba" alt="TMNT Logo" style={brandImgStyle} />
        </button>
    ];

    return <BrandCarousel>{cells}</BrandCarousel>;
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