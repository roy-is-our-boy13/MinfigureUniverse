import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav>
      <div>
        <button onClick={() => navigate('/')}>
          Heroes
        </button>
        <button onClick={() => navigate('/')}>
          Villians
        </button>
      </div>
    </nav>
  );
}

function Mario() 
{
    return (
      <>
        <h2>
             <img
                src="https://media.sketchfab.com/models/1d9498955dd040bbb39990459d8730dd/thumbnails/51c0731a7b3e442b89a14986a166b39a/74c268cf531d4b21a6dab61a3a762820.jpeg"
                className="logoSize"
                alt="Mario Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://shoplineimg.com/5ae29b268d1db9dde9005d08/64daf69ecb9307000de872fa/800x.jpg?"
              class = "legoTeamFigureImage"
              alt="Mario Gang Figures"
          />
        </p>  
      </>
    );

}
  export default Mario;