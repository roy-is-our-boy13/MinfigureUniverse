import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css'; 
//

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gridTemplateRows: 'repeat(12, 1fr)',    
    gap: '0.5px',
    width: '650px',   
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

function MarvelTitles() 
{
  const navigate = useNavigate();

  const cells = [

    <button key="alphaflight" onClick={() => navigate('/alphaflight')}>
        <img
            src="https://logowik.com/content/uploads/images/alpha-flight1720608387.logowik.com.webp"
            className="logoSize"
            alt="Alpha Flight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="avengers" onClick={() => navigate('/avengers')}>
        <img
            src="https://insidepulse.com/wp-content/uploads/2023/05/The-Avengers-logo.png"
            className="logoSize"
            alt="Avengers Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="blackpanther" onClick={() => navigate('/blackpanther')}>
        <img
            src="https://media.licdn.com/dms/image/v2/C4D08AQGOV0tU9EEZ6Q/croft-frontend-shrinkToFit1024/croft-frontend-shrinkToFit1024/0/1597380334285?e=2147483647&v=beta&t=AfSO-vFM-nzyssDFJlKdeZev6KopyfYOyAKKLUCEghc"
            className="logoSize"
            alt="Black Panther Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="blade" onClick={() => navigate('/blade')}>
        <img
            src="https://famfonts.com/wp-content/uploads/blade-wide.png"
            className="logoSize"
            alt="Blade Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="captainamerica" onClick={() => navigate('/captainamerica')}>
        <img
            src="https://i.pinimg.com/474x/dd/d7/32/ddd7327b5f12eb8189890c98a2bc293f.jpg"
            className="logoSize"
            alt="Captain America Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="captainamerica" onClick={() => navigate('/cloakanddagger')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cloak%26Dagger.png"
            className="logoSize"
            alt="Cloak And Dagger Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="daredevil" onClick={() => navigate('/daredevil')}>
        <img
            src="https://comicbook.com/wp-content/uploads/sites/4/2017/09/de4db8044fde3806bb93e2c5821aedca.png"
            className="logoSize"
            alt="Daredevil Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="deadpool" onClick={() => navigate('/deadpool')}>
        <img
            src="https://pngimg.com/d/deadpool_PNG97.png"
            className="logoSize"
            alt="Deadpool Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="drstrange" onClick={() => navigate('/drstrange')}>
        <img
            src="https://ih1.redbubble.net/image.177744836.7623/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
            className="logoSize"
            alt="Dr. Strange Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="eternals" onClick={() => navigate('/eternals')}>
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30940d8e-7103-4db1-b707-17c9b4fa425c/detxnil-aafa3ffa-78e3-4f9b-a447-e2d9e5032ead.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwOTQwZDhlLTcxMDMtNGRiMS1iNzA3LTE3YzliNGZhNDI1Y1wvZGV0eG5pbC1hYWZhM2ZmYS03OGUzLTRmOWItYTQ0Ny1lMmQ5ZTUwMzJlYWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bf-ZcxlK1svPfuhGLctS3eGSf6aY4JqpIIMNO469d4U"
            className="logoSize"
            alt="Eternals Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="fantasticfour" onClick={() => navigate('/fantasticfour')}>
        <img
            src="https://1000logos.net/wp-content/uploads/2020/09/Fantastic-Four-Logo.png"
            className="logoSize"
            alt="Fantastic Four Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="gardiansofthegalaxy" onClick={() => navigate('/gardiansofthegalaxy')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Guardians_of_the_Galaxy-Logo.png"
            className="logoSize"
            alt="Gardians Of The Galaxy Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="ghostrider" onClick={() => navigate('/ghostrider')}>
        <img
            src="https://cdn2.steamgriddb.com/logo/4064e4d885e4be966c600e071394c636.png"
            className="logoSize"
            alt="Ghost Rider Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="hulk" onClick={() => navigate('/hulk')}>
        <img
            src="https://pngimg.com/d/hulk_PNG5.png"
            className="logoSize"
            alt="Hulk Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="inhumans" onClick={() => navigate('/inhumans')}>
        <img
            src="https://miro.medium.com/v2/resize:fit:600/1*BKEVBH3uUx5EpKAeaAIRtw.png"
            className="logoSize"
            alt="Inhumans Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
     <button key="ironfist" onClick={() => navigate('/ironfist')}>
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cef25d8-f84e-45df-82da-48cc8a866527/dhow8aj-72162248-af98-402c-9d7f-0c137d4bafc8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjZWYyNWQ4LWY4NGUtNDVkZi04MmRhLTQ4Y2M4YTg2NjUyN1wvZGhvdzhhai03MjE2MjI0OC1hZjk4LTQwMmMtOWQ3Zi0wYzEzN2Q0YmFmYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lLGMvJAXYB6EGRoSB-z-0CRugkiBCeSofc1491A2yDM"
            className="logoSize"
            alt="Iron Fist Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="ironman" onClick={() => navigate('/ironman')}>
         <img
             src="https://1000logos.net/wp-content/uploads/2021/05/Iron-Man-Logo.png"
             className="logoSize"
             alt="Iron Man Logo"
             style={{ maxWidth: '100%', maxHeight: '100%' }}
     />
    </button>,
     <button key="jessicajones" onClick={() => navigate('/jessicajones')}>
        <img
            src="https://www.nicepng.com/png/detail/40-401514_marvels-jessica-jones-season-2-jessica-jones-vol.png"
            className="logoSize"
            alt="Jessica Jones Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="lukecage" onClick={() => navigate('/lukecage')}>
        <img
            src="https://www.noff.gg/marvel-snap/res/img/logos/LukeCage.png"
            className="logoSize"
            alt="Luke Cage Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="manthing" onClick={() => navigate('/manthing')}>
        <img
            src="https://fbi.cults3d.com/uploaders/28312882/illustration-file/bc3bb132-3fce-4a0c-98d0-e7852a758a03/Screenshot-2025-01-14-075117.png"
            className="logoSize"
            alt="Man Thing Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="miracleman" onClick={() => navigate('/miracleman')}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpuOcRDF_h_wazKkMuQYQR4C5pOlYkMRE5Q&s"
            className="logoSize"
            alt="Miracleman Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="moonknight" onClick={() => navigate('/moonknight')}>
        <img
            src="https://1000logos.net/wp-content/uploads/2022/09/Marvels-Moon-Knight-Logo.png"
            className="logoSize"
            alt="Moon Knight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="newwarriors" onClick={() => navigate('/newwarriors')}>
        <img
            src="https://vignette3.wikia.nocookie.net/logocomics/images/8/88/New_Warriors_Logo.png"
            className="logoSize"
            alt="New Warriors Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
     <button key="punisher" onClick={() => navigate('/punisher')}>
        <img
            src="https://imgcdn.stablediffusionweb.com/2024/12/22/b1174a59-9c20-40fc-8a09-e76e9e183ec4.jpg"
            className="logoSize"
            alt="Punisher Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="shield" onClick={() => navigate('/shield')}>
        <img
            src="https://static.wixstatic.com/media/de47c2_eab5b8401529424ca5d4862034bd86c8~mv2.jpg/v1/fill/w_435,h_535,al_c,lg_1,q_80,enc_avif,quality_auto/de47c2_eab5b8401529424ca5d4862034bd86c8~mv2.jpg"
            className="logoSize"
            alt="S.H.I.E.L.D Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="spiderman" onClick={() => navigate('/spiderman')}>
        <img
            src="https://1000logos.net/wp-content/uploads/2023/02/Spiderman-Logo-1996.png"
            className="logoSize"
            alt="Spider-Man Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="squadronsupreme" onClick={() => navigate('/squadronsupreme')}>
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f42d92-f61b-4fed-a7ae-4f3d9ed8c6aa/dgqalav-0a1db3c9-343b-4478-915a-e33ca405a71c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZjQyZDkyLWY2MWItNGZlZC1hN2FlLTRmM2Q5ZWQ4YzZhYVwvZGdxYWxhdi0wYTFkYjNjOS0zNDNiLTQ0NzgtOTE1YS1lMzNjYTQwNWE3MWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4SapBq_qieC0SbrDYjNlAwuKrZIMM3V6ZDDKnkms2hU"
            className="logoSize"
            alt="Squadron Supreme Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="thor" onClick={() => navigate('/thor')}>
        <img
            src="https://images-platform.99static.com/832kw4mFW8XI45oB5QsnjE2iIHY=/97x107:1902x1912/fit-in/99designs-contests-attachments/105/105781/attachment_105781910"
            className="logoSize"
            alt="Thor Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
     <button key="thunderbolts" onClick={() => navigate('/thunderbolts')}>
        <img
            src="https://images.seeklogo.com/logo-png/58/2/thunderbolts-logo-png_seeklogo-582410.png"
            className="logoSize"
            alt="Thunderbolts Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
     <button key="ultraforce" onClick={() => navigate('/ultraforce')}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GgAWpjnrC6MUlKeM6luryN2y_stChMt-V0rTHgoD0psoNUWsB-sE2rMT0Ozk6gdtRlI&usqp=CAU"
            className="logoSize"
            alt="Ultraforces Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="venom" onClick={() => navigate('/venom')}>
        <img
            src="https://stickers-4u.myshopify.com/cdn/shop/products/venom1white.jpg?v=1634410860"
            className="logoSize"
            alt="Venom Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="xmen" onClick={() => navigate('/xmen')}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/X-Men_-_The_Animated_Series_-_logo.svg"
            className="logoSize"
            alt="X-Men Logo"
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

function Marvel() 
{
  return(
    <div className='backgroundColorForMarvel'>
      <h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjiNrQ5jdPNoyHc8Rf6cGiFNq-50tDtutdg&s"
          /*className="logoSize"*/
          className="logoBorder"
          alt="Marvel Logo"
        />
      </h2>
      <MarvelTitles />
    </div>
  );
}

export default Marvel;