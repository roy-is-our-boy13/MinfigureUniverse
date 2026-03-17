import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/marioalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/marioenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function Mario() 
{
    return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
             <img
                src="https://media.sketchfab.com/models/1d9498955dd040bbb39990459d8730dd/thumbnails/51c0731a7b3e442b89a14986a166b39a/74c268cf531d4b21a6dab61a3a762820.jpeg"
                className="logoSize"
                alt="Mario Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://shoplineimg.com/5ae29b268d1db9dde9005d08/64daf69ecb9307000de872fa/800x.jpg?"
              className="legoTeamFigureImage"
              alt="Mario Gang Figures" />
      </div>  
      </>
    );

}
  export default Mario;