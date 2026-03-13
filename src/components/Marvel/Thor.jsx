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

function Thor()
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://images-platform.99static.com/832kw4mFW8XI45oB5QsnjE2iIHY=/97x107:1902x1912/fit-in/99designs-contests-attachments/105/105781/attachment_105781910"
            className="logoSize"
            alt="Thor Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://brickcentral.net/wp-content/uploads/2022/02/glowingbrickette_76209_hammerminifig-864x576.jpg"
            className="legoTeamFigureImage"
            alt="Thor Figure"
          />
        </p>  
      </div>
    );
}
  
export default Thor;