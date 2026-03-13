import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gridTemplateRows: 'repeat(12, 1fr)',    
    gap: '0.5px',
    width: '450px',   
    height: '125px', 
    border: '2px solid black',
    backgroundColor: 'grey',
};

const cellStyle = 
{
    border: '.5px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
};


function CapcomTitles()
{
  const navigate = useNavigate();

  const cells = [

    <button key="megaman" onClick={() => navigate('/megaman')}>
    <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f7dd17-d73b-4ed1-84c0-fcd3cd10b494/d3jor3g-36cd00eb-444b-4159-b9d1-7515358dfeb7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZjdkZDE3LWQ3M2ItNGVkMS04NGMwLWZjZDNjZDEwYjQ5NFwvZDNqb3IzZy0zNmNkMDBlYi00NDRiLTQxNTktYjlkMS03NTE1MzU4ZGZlYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xG5-17vzYloJIvWylPa-qZCE6cRKT_iYmMJUUQ5a0qc"
        className="logoSize"
        alt="Mega Man Logo"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="streetfighter" onClick={() => navigate('/streetfighter')}>
      <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e9/Street_Fighter_Logo.png"
          className="logoSize"
          alt="Street Fighter Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>
  ];

  return(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5px', 
        minHeight: '100h',
      }}>

      <div style={gridStyle}>
        {cells.map((content, i) => (
          <div key={i} style={cellStyle}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );

}

function Capcom() 
{
  return (
          
    <div>
        <h1>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/5592px-Capcom_logo.svg.png"
              className="logoBorder"
              alt="Capcom Logo"
          />
        </h1>
        <CapcomTitles />
    </div>
        
        );
}

export default Capcom;