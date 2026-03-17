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

function DCTitles()
{
    const navigate = useNavigate();

    const cells = [

        <button key="aquaman" onClick={() => navigate('/aquaman')}>
            <img
                src="https://m.media-amazon.com/images/I/61DEVEWM2UL._AC_UF894,1000_QL80_.jpg"
                className="logoSize"
                alt="Aquaman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="authority" onClick={() => navigate('/authority')}>
            <img
                src="https://windycity-3d.com/cdn/shop/files/il_fullxfull.5633439476_fx00_d8a760d6-47d6-4ab4-a8dc-64546417fd49.jpg?v=1722789985"
                className="logoSize"
                alt="The Authority Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="batman" onClick={() => navigate('/batman')}>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/batman-1-logo-png-transparent.png"
                className="logoSize"
                alt="Batman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
         <button key="bluebeetle" onClick={() => navigate('/bluebeetle')}>
            <img
                src="https://comicvine.gamespot.com/a/uploads/original/11133/111332930/6782225-4338517262-latest"
                className="logoSize"
                alt="Blue Beetle Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="boostergold" onClick={() => navigate('/boostergold')}>
            <img
                src="https://i0.wp.com/earth7269.files.wordpress.com/2017/02/boostergoldlogo.jpg?w=674"
                className="logoSize"
                alt="Booster Gold Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="constantine" onClick={() => navigate('/constantine')}>
            <img
                src="https://www.pngkey.com/png/detail/138-1381792_constantine-image-constantine-tv-series-logo.png"
                className="logoSize"
                alt="Constantine Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="doompatrol" onClick={() => navigate('/doompatrol')}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUnXbd7q8wQc30b4BfzMmVd9ZNws_ec0th6I1sW-cD_GmSjZWd1vn7gnIIvvLLF14UZM&usqp=CAU"
                className="logoSize"
                alt="Doom Patrol Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="drfate" onClick={() => navigate('/drfate')}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f0/2015_Doctor_Fate_logo.png"
                className="logoSize"
                alt="Dr Fate Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="flash" onClick={() => navigate('/flash')}>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/flash-logo-png-transparent.png"
                className="logoSize"
                alt="Flash Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="greenarrow" onClick={() => navigate('/greenarrow')}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Green_arrow_logo_2016.png"
                className="logoSize"
                alt="Green Arrow Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="greenlantern" onClick={() => navigate('/greenlantern')}>
            <img
                src="https://w0.peakpx.com/wallpaper/611/885/HD-wallpaper-green-lantern-logo-comics-dc-comics.jpg"
                className="logoSize"
                alt="Green Lantern Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jla" onClick={() => navigate('/jla')}>
            <img
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/02/justice-league-of-america-header.jpg"
                className="logoSize"
                alt="JLA Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jonahhex" onClick={() => navigate('/jonahhex')}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuBAmHI57wvJvhJS9pJge6SPH44XZOO6CRTAQaML7v7o3zkWDW5PbUpu0Gzd_Yvi_3iU&usqp=CAU"
                className="logoSize"
                alt="Jonah Hex Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="jsa" onClick={() => navigate('/jsa')}>
            <img
                src="https://insidepulse.com/wp-content/uploads/2019/08/Justice-Society-of-America-logo-JSA.png"
                className="logoSize"
                alt="JSA Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
         </button>,
         <button key="legionofsuperheroes" onClick={() => navigate('/legionofsuperheroes')}>
            <img
                src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Legion-of-Super-Heroes-logo.png"
                className="logoSize"
                alt="legion of Superheroes Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
         </button>,
         <button key="phantomstranger" onClick={() => navigate('/phantomstranger')}>
            <img
                src="https://i0.wp.com/kleinletters.com/Blog/wp-content/uploads/2013/12/Showcase80PhantStrang.jpg?resize=600%2C254"
                className="logoSize"
                alt="Phantom Stranger Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="shazam" onClick={() => navigate('/shazam')}>
            <img
                src="https://i5.walmartimages.com/seo/DC-Comics-Shazam-Logo-Symbol-White-Licensed-1-25-Inch-Button-87743_d8e55efa-6952-4e34-961f-50cac940c70d.9270b5408f4c4f1ac504bdefdaffa4a8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                className="logoSize"
                alt="Shazam Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>,
        <button key="specter" onClick={() => navigate('/specter')}>
            <img
                src="http://graphicnovels.info/books/Spectre-logo.gif"
                className="logoSize"
                alt="Spector Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
         <button key="superman" onClick={() => navigate('/superman')}>
            <img
                src="https://cdn.freebiesupply.com/logos/large/2x/superman-1-logo-svg-vector.svg"
                className="logoSize"
                alt="Superman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="teentitans" onClick={() => navigate('/teentitans')}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Teen_Titans_-_logo_%28English%29.png/1200px-Teen_Titans_-_logo_%28English%29.png"
                className="logoSize"
                alt="Teen Titans Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="thewatchman" onClick={() => navigate('/thewatchman')}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Watchmen_logo.svg/2560px-Watchmen_logo.svg.png"
                className="logoSize"
                alt="The Watchman Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </button>,
          <button key="wildcats" onClick={() => navigate('/wildcats')}>
            <img
                src="https://mekulius.com/comics/Logos/WildCATsV1Logo.gif"
                className="logoSize"
                alt="Wildcats Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            </button>,
          <button key="wonderwoman" onClick={() => navigate('/wonderwoman')}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fTj25R0qh6vjZt2Ygw-aBH3HabL3jENcJQ&s"
                className="logoSize"
                alt="Wonder Woman Logo"
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

function DC() 
{
    return (
        <div className='backgroundColorForDC'>
            <div className='dc-page-inner'>
                <h2>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DC_Comics_2024.svg/1200px-DC_Comics_2024.svg.png" 
                        className="logoBorder"
                        alt="DC Logo"
                    />
                </h2>
                <DCTitles />
            </div>
        </div>);
}
  
export default DC;