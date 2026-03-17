import React from 'react';
import { useNavigate } from 'react-router-dom';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/megamanalies')}>Allies</button>
      <button onClick={() => navigate('/megamanenimies')}>Enemies</button>
    </nav>
  );
}

function MegaMan() {
  return (
    <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f7dd17-d73b-4ed1-84c0-fcd3cd10b494/d3jor3g-36cd00eb-444b-4159-b9d1-7515358dfeb7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZjdkZDE3LWQ3M2ItNGVkMS04NGMwLWZjZDNjZDEwYjQ5NFwvZDNqb3IzZy0zNmNkMDBlYi00NDRiLTQxNTktYjlkMS03NTE1MzU4ZGZlYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xG5-17vzYloJIvWylPa-qZCE6cRKT_iYmMJUUQ5a0qc"
            className="logoSize"
            alt="Mega Man Logo"
          />
        </h2>
        <NavigationMenu />
      </div>
      <div style={imageWrapperStyle}>
        <img src="https://static.herobloks.com/l/figure_images/18/7/3/id13604~c33564~u1.jpg" className="legoTeamFigureImage" alt="Mega Man Figure" />
      </div>
    </>
  );
}

export default MegaMan;
  