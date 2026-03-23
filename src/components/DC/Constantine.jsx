import React from 'react';
import ConstantineLogo from '../../assets/Logo_Icons/DC_Logos/Constantine_Logo.png';
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
      <button onClick={() => navigate('/constantinealies')}>
        Allies
      </button>
      <button onClick={() => navigate('/constantineenimies')}>
        Enemies
      </button>
    </nav>
  );
}


function Constantine()
{
    return (
      <>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>
            <img
                src={ConstantineLogo}
                className="logoSize"
                alt="Constantine Logo"
            />
          </h2>
          <NavigationMenu />
        </div>
        <div style={imageWrapperStyle}>
          <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6dd3382a-4876-4b94-9e2d-b7f4a01ccf5e/deewxx1-f97aec6d-3613-4735-b281-eb64cdc4bdde.png/v1/fill/w_1024,h_582,q_80,strp/lego_constantine_by_cosmicthunder_deewxx1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgyIiwicGF0aCI6IlwvZlwvNmRkMzM4MmEtNDg3Ni00Yjk0LTllMmQtYjdmNGEwMWNjZjVlXC9kZWV3eHgxLWY5N2FlYzZkLTM2MTMtNDczNS1iMjgxLWViNjRjZGM0YmRkZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.C_kWARqjjQUC6QZwEkYhJs9r-kyGqmq9g05xhcUSPvU"
              className="legoTeamFigureImage"
              alt="Constantine Figure"
          />
        </div>  
      </>
    );
}

export default Constantine;