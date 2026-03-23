import React from 'react';
import { useNavigate } from 'react-router-dom';
import AgentsLogo from '../../assets/Logo_Icons/Lego_Logos/Ultra_Agents_Logo.png';

const headerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '0.5rem' };
const imageWrapperStyle = { display: 'flex', justifyContent: 'center', marginTop: '1rem' };

function NavigationMenu() 
{
  const navigate = useNavigate();
   return (
    <nav style={navStyle}>
      <button onClick={() => navigate('/agentsalies')}>
          Allies
        </button>
        <button onClick={() => navigate('/agentsenimies')}>
          Enemies
    </button>
    </nav>
  );
}

function AgentsFrontPageInterface()
{
  return (
      <>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>
            <img
                src={AgentsLogo}
                className="logoSize"
                alt="Agents Logo"
            />
        </h2>
        <NavigationMenu />
      </div>
        <div style={imageWrapperStyle}>
        <img
              src = "https://mecabricks.com/image/AbjpNw1Qa5y.png"
              className="legoTeamFigureImage"
              alt="Lego Agents Figures" />
      </div>  
      </>
    );
}

function Agents() 
{
    return (<><AgentsFrontPageInterface /></>);
}
export default Agents;