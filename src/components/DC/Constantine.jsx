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


function Constantine()
{
    return (
      <>
        <h2>
            <img
                src="https://www.pngkey.com/png/detail/138-1381792_constantine-image-constantine-tv-series-logo.png"
                className="logoSize"
                alt="Constantine Logo"
            />
        </h2>
        <NavigationMenu />
        <p>
          <img
              src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6dd3382a-4876-4b94-9e2d-b7f4a01ccf5e/deewxx1-f97aec6d-3613-4735-b281-eb64cdc4bdde.png/v1/fill/w_1024,h_582,q_80,strp/lego_constantine_by_cosmicthunder_deewxx1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgyIiwicGF0aCI6IlwvZlwvNmRkMzM4MmEtNDg3Ni00Yjk0LTllMmQtYjdmNGEwMWNjZjVlXC9kZWV3eHgxLWY5N2FlYzZkLTM2MTMtNDczNS1iMjgxLWViNjRjZGM0YmRkZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.C_kWARqjjQUC6QZwEkYhJs9r-kyGqmq9g05xhcUSPvU"
              class = "legoTeamFigureImage"
              alt="Constantine Figure"
          />
        </p>  
      </>
    );
}

export default Constantine;