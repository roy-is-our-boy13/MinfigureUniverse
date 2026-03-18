import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};

// Updated to a 3x3 CSS Grid layout
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
  gap: '20px',
  maxWidth: '800px',
  margin: '1rem auto',
  padding: '0 20px'
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/')}>Alies</button>
      <button onClick={() => navigate('/')}>Villians</button>
    </nav>
  );
}

function SpiderManAlies() {
  // Titles extracted from the character pic provided
  const allies = [
    "Spider-Man", "Miles Morales", "Spider-Gwen",
    "Spider-Ham", "Spider-Man Noir", "Peni Parker",
    "Spider-Punk", "Cyborg Spider-Woman", "Spider-Byte", 
    "Black Cat", "Silver Sable", "Prowler", "Agent Venom",
    "Toxin", "Solo", "Madam Web"
  ];

  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Spider-Man Allies</h2>
        <NavigationMenu />
      </div>

      <div style={gridContainerStyle}>
        {allies.map((ally, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{ally}</h3>
            {/* You can add <img> tags here later */}
            <div style={{ height: '100px', background: '#ddd', borderRadius: '4px' }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpiderManAlies;
