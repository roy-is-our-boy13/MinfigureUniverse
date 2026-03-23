import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../App.css';
import MarvelLogo from '../assets/Logo_Icons/Title_Logos/Marvel_Logo.png';
import AlphaFlightLogo from '../assets/Logo_Icons/Marvel_Logos/AlphaFlight_Logo.png';
import AvengersLogo from '../assets/Logo_Icons/Marvel_Logos/Avengers_Logo.png';
import BlackPantherLogo from '../assets/Logo_Icons/Marvel_Logos/Black_Panther_Logo.png';
import BladeLogo from '../assets/Logo_Icons/Marvel_Logos/Blade_Logo.png';
import CaptainAmericaLogo from '../assets/Logo_Icons/Marvel_Logos/Captain_America_Logo.png';
import CloakDaggerLogo from '../assets/Logo_Icons/Marvel_Logos/Cloak&Dagger_logo.png';
import DaredevilLogo from '../assets/Logo_Icons/Marvel_Logos/Daredevil_Logo.png';
import DeadpoolLogo from '../assets/Logo_Icons/Marvel_Logos/Deadpool_Logo.png';
import DoctorStrangeLogo from '../assets/Logo_Icons/Marvel_Logos/Doctor_Strange_Logo.png';
import EternalsLogo from '../assets/Logo_Icons/Marvel_Logos/The_Eternals_Logo.png';
import FantasticFourLogo from '../assets/Logo_Icons/Marvel_Logos/Fantastic_Four_Logo.png';
import GuardiansOfTheGalaxyLogo from '../assets/Logo_Icons/Marvel_Logos/Guardians_of_the_Galaxy_Logo.png';
import GhostRiderLogo from '../assets/Logo_Icons/Marvel_Logos/Ghost_Rider_Logo.png';
import HulkLogo from '../assets/Logo_Icons/Marvel_Logos/Hulk_Logo.png';
import InhumansLogo from '../assets/Logo_Icons/Marvel_Logos/Inhumans_Logo.png';
import IronFistLogo from '../assets/Logo_Icons/Marvel_Logos/Iron_Fist_Logo.png';
import IronManLogo from '../assets/Logo_Icons/Marvel_Logos/Iron_Man_Logo.png';
import JessicaJonesLogo from '../assets/Logo_Icons/Marvel_Logos/Jessica_Jones_Logo.png';
import LukeCageLogo from '../assets/Logo_Icons/Marvel_Logos/Luke_Cage_Logo.png';
import ManThingLogo from '../assets/Logo_Icons/Marvel_Logos/Man-Thing_Logo.png';
import MiracleManLogo from '../assets/Logo_Icons/Marvel_Logos/MiracleMan_Logo.png';
import MoonKnightLogo from '../assets/Logo_Icons/Marvel_Logos/Moon_Knight_Logo.png';
import NewWarriorsLogo from '../assets/Logo_Icons/Marvel_Logos/New_Warriors_Logo.png';
import PunisherLogo from '../assets/Logo_Icons/Marvel_Logos/Punisher_Logo.png';
import ShieldLogo from '../assets/Logo_Icons/Marvel_Logos/SHIELD_Logo.png';
import SpiderManLogo from '../assets/Logo_Icons/Marvel_Logos/Spider-Man_Logo.png';
import SquadronSupremeLogo from '../assets/Logo_Icons/Marvel_Logos/Squadron_Supreme_Logo.png';
import ThorLogo from '../assets/Logo_Icons/Marvel_Logos/Thor_Logo.png';
import ThunderboltsLogo from '../assets/Logo_Icons/Marvel_Logos/Thunderbolts_Logo.png';
import UltraforceLogo from '../assets/Logo_Icons/Marvel_Logos/Ultraforce_Logo.png';
import VenomLogo from '../assets/Logo_Icons/Marvel_Logos/Venom_Logo.png';
import XMenLogo from '../assets/Logo_Icons/Marvel_Logos/X-Men_Logo.png';

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

function MarvelTitles() 
{
  const navigate = useNavigate();

  const cells = [

    <button key="alphaflight" onClick={() => navigate('/alphaflight')}>
        <img
            src={AlphaFlightLogo}
            className="logoSize"
            alt="Alpha Flight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="avengers" onClick={() => navigate('/avengers')}>
        <img
            src={AvengersLogo}
            className="logoSize"
            alt="Avengers Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="blackpanther" onClick={() => navigate('/blackpanther')}>
        <img
            src={BlackPantherLogo}
            className="logoSize"
            alt="Black Panther Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="blade" onClick={() => navigate('/blade')}>
        <img
            src={BladeLogo}
            className="logoSize"
            alt="Blade Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="captainamerica" onClick={() => navigate('/captainamerica')}>
        <img
            src={CaptainAmericaLogo}
            className="logoSize"
            alt="Captain America Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="cloakanddagger" onClick={() => navigate('/cloakanddagger')}>
        <img
            src={CloakDaggerLogo}
            className="logoSize"
            alt="Cloak And Dagger Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="daredevil" onClick={() => navigate('/daredevil')}>
        <img
            src={DaredevilLogo}
            className="logoSize"
            alt="Daredevil Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="deadpool" onClick={() => navigate('/deadpool')}>
        <img
            src={DeadpoolLogo}
            className="logoSize"
            alt="Deadpool Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="drstrange" onClick={() => navigate('/drstrange')}>
        <img
            src={DoctorStrangeLogo}
            className="logoSize"
            alt="Dr. Strange Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="eternals" onClick={() => navigate('/eternals')}>
        <img
            src={EternalsLogo}
            className="logoSize"
            alt="Eternals Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="fantasticfour" onClick={() => navigate('/fantasticfour')}>
        <img
            src={FantasticFourLogo}
            className="logoSize"
            alt="Fantastic Four Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="gardiansofthegalaxy" onClick={() => navigate('/gardiansofthegalaxy')}>
        <img
            src={GuardiansOfTheGalaxyLogo}
            className="logoSize"
            alt="Gardians Of The Galaxy Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="ghostrider" onClick={() => navigate('/ghostrider')}>
        <img
            src={GhostRiderLogo}
            className="logoSize"
            alt="Ghost Rider Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="hulk" onClick={() => navigate('/hulk')}>
        <img
            src={HulkLogo}
            className="logoSize"
            alt="Hulk Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="inhumans" onClick={() => navigate('/inhumans')}>
        <img
            src={InhumansLogo}
            className="logoSize"
            alt="Inhumans Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
     <button key="ironfist" onClick={() => navigate('/ironfist')}>
        <img
            src={IronFistLogo}
            className="logoSize"
            alt="Iron Fist Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="ironman" onClick={() => navigate('/ironman')}>
         <img
             src={IronManLogo}
             className="logoSize"
             alt="Iron Man Logo"
             style={{ maxWidth: '100%', maxHeight: '100%' }}
     />
    </button>,
     <button key="jessicajones" onClick={() => navigate('/jessicajones')}>
        <img
            src={JessicaJonesLogo}
            className="logoSize"
            alt="Jessica Jones Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="lukecage" onClick={() => navigate('/lukecage')}>
        <img
            src={LukeCageLogo}
            className="logoSize"
            alt="Luke Cage Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="manthing" onClick={() => navigate('/manthing')}>
        <img
            src={ManThingLogo}
            className="logoSize"
            alt="Man Thing Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="miracleman" onClick={() => navigate('/miracleman')}>
        <img
            src={MiracleManLogo}
            className="logoSize"
            alt="Miracleman Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="moonknight" onClick={() => navigate('/moonknight')}>
        <img
            src={MoonKnightLogo}
            className="logoSize"
            alt="Moon Knight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="newwarriors" onClick={() => navigate('/newwarriors')}>
        <img
            src={NewWarriorsLogo}
            className="logoSize"
            alt="New Warriors Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
     <button key="punisher" onClick={() => navigate('/punisher')}>
        <img
            src={PunisherLogo}
            className="logoSize"
            alt="Punisher Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="shield" onClick={() => navigate('/shield')}>
        <img
            src={ShieldLogo}
            className="logoSize"
            alt="S.H.I.E.L.D Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="spiderman" onClick={() => navigate('/spiderman')}>
        <img
            src={SpiderManLogo}
            className="logoSize"
            alt="Spider-Man Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </button>,
    <button key="squadronsupreme" onClick={() => navigate('/squadronsupreme')}>
        <img
            src={SquadronSupremeLogo}
            className="logoSize"
            alt="Squadron Supreme Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
    </button>,
    <button key="thor" onClick={() => navigate('/thor')}>
        <img
            src={ThorLogo}
            className="logoSize"
            alt="Thor Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
     <button key="thunderbolts" onClick={() => navigate('/thunderbolts')}>
        <img
            src={ThunderboltsLogo}
            className="logoSize"
            alt="Thunderbolts Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
     <button key="ultraforce" onClick={() => navigate('/ultraforce')}>
        <img
            src={UltraforceLogo}
            className="logoSize"
            alt="Ultraforces Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="venom" onClick={() => navigate('/venom')}>
        <img
            src={VenomLogo}
            className="logoSize"
            alt="Venom Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </button>,
    <button key="xmen" onClick={() => navigate('/xmen')}>
        <img
            src={XMenLogo}
            className="logoSize"
            alt="X-Men Logo"
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
      }}
    >
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

function Marvel() 
{
  return(
    <div className='backgroundColorForMarvel'>
      <div className='marvel-page-inner'>
        <h2>
          <img
            src={MarvelLogo}
            /*className="logoSize"*/
            className="logoBorder"
            alt="Marvel Logo"
          />
        </h2>
        <MarvelTitles />
      </div>
    </div>
  );
}

export default Marvel;