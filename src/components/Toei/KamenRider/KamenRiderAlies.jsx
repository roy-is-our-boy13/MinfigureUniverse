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
      <button onClick={() => navigate('/kamenrider')}>Main</button>
      <button onClick={() => navigate('/kamenrideralies')}>Allies</button>
      <button onClick={() => navigate('/kamenriderenimies')}>Enemies</button>
    </nav>
  );
}

function KamenRiderAlies() {
  const allies = [
    'Kamen Rider Ichigo', 'Kamen Rider Nigo', 'Rider 1', 'Rider 2',
    'Kamen Rider Black', 'Kamen Rider Kuuga', 'Kamen Rider Agito', 'Kamen Rider Ryuki',
    'Kamen Rider Faiz', 'Kamen Rider Den-O', 'Kamen Rider Decade', 'Kamen Rider Zero-One',
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Kamen Rider Allies</h2>
        <NavigationMenu />
      </div>
      <div style={gridContainerStyle}>
        {allies.map((ally, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{ally}</h3>
            <div style={{ height: '100px', background: '#ddd', borderRadius: '4px' }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default KamenRiderAlies;
