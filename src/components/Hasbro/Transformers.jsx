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

function Transformers() 
{
    return (
      <>
        <h2>
             <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1381c7cf-3074-4fbe-ab72-3245d1242c37/d84ps76-fbf6e75c-e633-4c40-bd89-0f5ecb598f86.png/v1/fill/w_800,h_212/transformers_g1_logo_autobot_theme_by_wargodarts_d84ps76-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyIiwicGF0aCI6IlwvZlwvMTM4MWM3Y2YtMzA3NC00ZmJlLWFiNzItMzI0NWQxMjQyYzM3XC9kODRwczc2LWZiZjZlNzVjLWU2MzMtNGM0MC1iZDg5LTBmNWVjYjU5OGY4Ni5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7Z-cKdJ_H_Qq83ySm-NpxDQFHfJ5eaustvcxsKq5wCg"
                className="logoSize"
                alt="Transformers Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://www.lego.com/cdn/cs/set/assets/blt36fb03cdeb25ad1a/10302.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1"
              class = "legoTeamFigureImage"
              alt="Transformer Figure"
          />
        </p>  
      </>
    );
}

export default Transformers;