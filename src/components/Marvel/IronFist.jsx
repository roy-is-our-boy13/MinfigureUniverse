import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/ironfistalies')}>
        Allies
      </button>
      <button onClick={() => navigate('/ironfistenimies')}>
        Enemies
      </button>
    </nav>
  );
}

function IronFist()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cef25d8-f84e-45df-82da-48cc8a866527/dhow8aj-72162248-af98-402c-9d7f-0c137d4bafc8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjZWYyNWQ4LWY4NGUtNDVkZi04MmRhLTQ4Y2M4YTg2NjUyN1wvZGhvdzhhai03MjE2MjI0OC1hZjk4LTQwMmMtOWQ3Zi0wYzEzN2Q0YmFmYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lLGMvJAXYB6EGRoSB-z-0CRugkiBCeSofc1491A2yDM"
              className="logoSize"
              alt="Iron Fist Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://static.herobloks.com/s/figure_images/17/3/3/id0~c3402~u1.jpg"
            className="legoTeamFigureImage"
            alt="Iron Fist Figure"
          />
        </div>  
      </>
    );
}
  
  export default IronFist;