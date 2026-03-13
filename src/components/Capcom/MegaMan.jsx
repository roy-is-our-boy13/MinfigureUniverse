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

function MegaMan() 
{
    return (
      <>
        <h2>
             <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f7dd17-d73b-4ed1-84c0-fcd3cd10b494/d3jor3g-36cd00eb-444b-4159-b9d1-7515358dfeb7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZjdkZDE3LWQ3M2ItNGVkMS04NGMwLWZjZDNjZDEwYjQ5NFwvZDNqb3IzZy0zNmNkMDBlYi00NDRiLTQxNTktYjlkMS03NTE1MzU4ZGZlYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xG5-17vzYloJIvWylPa-qZCE6cRKT_iYmMJUUQ5a0qc"
                className="logoSize"
                alt="Mega Man Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://static.herobloks.com/l/figure_images/18/7/3/id13604~c33564~u1.jpg"
              class = "legoTeamFigureImage"
              alt="Mega Man Figure"
          />
        </p>  
      </>
    );
}

export default MegaMan;
  