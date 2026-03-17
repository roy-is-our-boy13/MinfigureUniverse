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
      <button onClick={() => navigate('/')}>
        Heroes
      </button>
      <button onClick={() => navigate('/')}>
        Villians
      </button>
    </nav>
  );
}

function SquadronSupreme() 
{
   return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f42d92-f61b-4fed-a7ae-4f3d9ed8c6aa/dgqalav-0a1db3c9-343b-4478-915a-e33ca405a71c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZjQyZDkyLWY2MWItNGZlZC1hN2FlLTRmM2Q5ZWQ4YzZhYVwvZGdxYWxhdi0wYTFkYjNjOS0zNDNiLTQ0NzgtOTE1YS1lMzNjYTQwNWE3MWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4SapBq_qieC0SbrDYjNlAwuKrZIMM3V6ZDDKnkms2hU"
              className="logoSize"
              alt="Squadron Supreme Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
            src="https://live.staticflickr.com/4887/46074941651_f6ba76eb8b_c.jpg"
            className="legoTeamFigureImage"
            alt="Squadron Supreme Figures"
          />
        </div>  
      </>
    );
  
}
export default SquadronSupreme;