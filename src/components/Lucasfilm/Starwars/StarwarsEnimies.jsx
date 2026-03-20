import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  maxWidth: '800px',
  margin: '1rem auto',
  padding: '0 20px',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/starwars-lucasfilm')}>Main</button>
      <button onClick={() => navigate('/starwars-lucasfilmalies')}>Allies</button>
      <button onClick={() => navigate('/starwars-lucasfilmenimies')}>Enemies</button>
    </nav>
  );
}

function StarwarsEnimies() {
  const enemies = [
    'Darth Vader', 'Emperor Palpatine', 'Darth Maul',
    'Kylo Ren', 'Count Dooku', 'General Grievous',
    'Grand Moff Tarkin', 'Boba Fett', 'Jabba the Hutt',
    'First Order', 'Sith', 'Inquisitors',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Star Wars Enemies</h2>
        <NavigationMenu />
      </div>
      <div style={gridContainerStyle}>
        {enemies.map((enemy, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{enemy}</h3>
            <div style={{ height: '100px', background: '#ddd', borderRadius: '4px' }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StarwarsEnimies;
