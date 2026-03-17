import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';

const gridStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridAutoRows: 'minmax(80px, auto)',
    gap: '0.5px',
    width: '900px',
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

function MattelTitles()
{
    const navigate = useNavigate();

    const cells = [

      <button key="blokbots" onClick={() => navigate('/blokbots')}>
      <img
          src="https://sdmntprwestus.oaiusercontent.com/files/00000000-4144-6230-a8ef-7377b8fcee06/raw?se=2025-05-27T20%3A12%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=d3202cb1-e21a-5a2f-93ed-64569a1c0676&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-26T22%3A21%3A34Z&ske=2025-05-27T22%3A21%3A34Z&sks=b&skv=2024-08-04&sig=wHDvZYuN/gMyOe/Lve82fevo2OpY3ZZULgPjh7RkFHk%3D"
          className="logoSize"
          alt="Blok Bots Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      </button>,
      <button key="dragons" onClick={() => navigate('/dragons')}>
            <img
                src="https://sdmntprwestus.oaiusercontent.com/files/00000000-ed18-6230-a04b-7913344e4041/raw?se=2025-05-27T20%3A14%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=2e8701ae-d667-5f52-8d33-1b6b0b422c56&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-26T22%3A21%3A28Z&ske=2025-05-27T22%3A21%3A28Z&sks=b&skv=2024-08-04&sig=/ikUjxiRSDRYu2Rzkcpdep07twgjhfKSqI9KGl7QBTc%3D"
                className="logoSize"
                alt="Dragons Logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
      </button>,
      <button key="heman" onClick={() => navigate('/heman')}>
        <img
            src="https://www.hemanworld.com/wp-content/uploads/2016/04/club-grayskull-logo.jpg"
            className="logoSize"
            alt="He-man Logo"
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

function Mattel() 
{
    return(
      <div className='backgroundColorForMattel'>
        <div className='franchise-page-inner'>
          <h2>
            <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/09/mattel-logo.jpg"
                  className="logoBorder"
                  alt="Mattel Logo"       
            />
          </h2>
          <MattelTitles />
        </div>
      </div>
    );
}
  
export default Mattel;