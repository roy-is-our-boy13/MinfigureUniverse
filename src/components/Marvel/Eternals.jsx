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

function Eternals() 
{
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30940d8e-7103-4db1-b707-17c9b4fa425c/detxnil-aafa3ffa-78e3-4f9b-a447-e2d9e5032ead.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwOTQwZDhlLTcxMDMtNGRiMS1iNzA3LTE3YzliNGZhNDI1Y1wvZGV0eG5pbC1hYWZhM2ZmYS03OGUzLTRmOWItYTQ0Ny1lMmQ5ZTUwMzJlYWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bf-ZcxlK1svPfuhGLctS3eGSf6aY4JqpIIMNO469d4U"
            className="logoSize"
            alt="Eternals Logo"
          />
        </h2>
        <NavigationMenu />
        <p>
          <img
            src="https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/2021/09/LEGO-Marvel-Eternals-Wave-Review-TIOS8-Review-2-640x360.jpg"
            className="legoTeamFigureImage"
            alt="The Eternals Team Figure"
          />
        </p>  
      </div>
    );
}
export default Eternals;