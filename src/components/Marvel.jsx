import React, { useRef } from 'react';
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

const headerBarStyle = {
  backgroundColor: '#6b2d7a',
  color: 'white',
  textAlign: 'center',
  padding: '10px 20px',
  fontSize: '1.1rem',
  fontWeight: 500,
  fontFamily: 'sans-serif',
  marginBottom: 0,
  borderRadius: '12px 12px 0 0',
};

const carouselOuterStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#b8e600',
  border: '4px solid #b8e600',
  borderRadius: '50px',
  padding: '12px 8px',
  gap: '8px',
  maxWidth: '100%',
  overflow: 'hidden',
};

const arrowButtonStyle = {
  flexShrink: 0,
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: '#b8e600',
  border: '3px solid #7ba000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
  minWidth: '44px',
};

const carouselInnerStyle = {
  display: 'flex',
  gap: '6px',
  overflowX: 'auto',
  padding: '4px 8px',
  scrollBehavior: 'smooth',
  flex: 1,
  minWidth: 0,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const brandButtonStyle = {
  flexShrink: 0,
  width: '70px',
  height: '70px',
  border: '3px solid #7ba000',
  borderRadius: '8px',
  backgroundColor: 'white',
  padding: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

function MarvelTitles() 
{
  const navigate = useNavigate();

  const cells = [

    <button key="alphaflight" onClick={() => navigate('/alphaflight')} style={brandButtonStyle}>
        <img
            src={AlphaFlightLogo}
            alt="Alpha Flight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </button>,
    <button key="avengers" onClick={() => navigate('/avengers')} style={brandButtonStyle}>
        <img
            src={AvengersLogo}
            alt="Avengers Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </button>,
    <button key="blackpanther" onClick={() => navigate('/blackpanther')} style={brandButtonStyle}>
        <img
            src={BlackPantherLogo}
            alt="Black Panther Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="blade" onClick={() => navigate('/blade')} style={brandButtonStyle}>
        <img
            src={BladeLogo}
            alt="Blade Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="captainamerica" onClick={() => navigate('/captainamerica')} style={brandButtonStyle}>
        <img
            src={CaptainAmericaLogo}
            alt="Captain America Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="cloakanddagger" onClick={() => navigate('/cloakanddagger')} style={brandButtonStyle}>
        <img
            src={CloakDaggerLogo}
            alt="Cloak And Dagger Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="daredevil" onClick={() => navigate('/daredevil')} style={brandButtonStyle}>
        <img
            src={DaredevilLogo}
            alt="Daredevil Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="deadpool" onClick={() => navigate('/deadpool')} style={brandButtonStyle}>
        <img
            src={DeadpoolLogo}
            alt="Deadpool Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="drstrange" onClick={() => navigate('/drstrange')} style={brandButtonStyle}>
        <img
            src={DoctorStrangeLogo}
            alt="Dr. Strange Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="eternals" onClick={() => navigate('/eternals')} style={brandButtonStyle}>
        <img
            src={EternalsLogo}
            alt="Eternals Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="fantasticfour" onClick={() => navigate('/fantasticfour')} style={brandButtonStyle}>
        <img
            src={FantasticFourLogo}
            alt="Fantastic Four Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </button>,
    <button key="gardiansofthegalaxy" onClick={() => navigate('/gardiansofthegalaxy')} style={brandButtonStyle}>
        <img
            src={GuardiansOfTheGalaxyLogo}
            alt="Gardians Of The Galaxy Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
    </button>,
    <button key="ghostrider" onClick={() => navigate('/ghostrider')} style={brandButtonStyle}>
        <img
            src={GhostRiderLogo}
            alt="Ghost Rider Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="hulk" onClick={() => navigate('/hulk')} style={brandButtonStyle}>
        <img
            src={HulkLogo}
            alt="Hulk Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="inhumans" onClick={() => navigate('/inhumans')} style={brandButtonStyle}>
        <img
            src={InhumansLogo}
            alt="Inhumans Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
    </button>,
     <button key="ironfist" onClick={() => navigate('/ironfist')} style={brandButtonStyle}>
        <img
            src={IronFistLogo}
            alt="Iron Fist Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="ironman" onClick={() => navigate('/ironman')} style={brandButtonStyle}>
         <img
             src={IronManLogo}
             alt="Iron Man Logo"
             style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
     />
    </button>,
     <button key="jessicajones" onClick={() => navigate('/jessicajones')} style={brandButtonStyle}>
        <img
            src={JessicaJonesLogo}
            alt="Jessica Jones Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
    </button>,
    <button key="lukecage" onClick={() => navigate('/lukecage')} style={brandButtonStyle}>
        <img
            src={LukeCageLogo}
            alt="Luke Cage Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="manthing" onClick={() => navigate('/manthing')} style={brandButtonStyle}>
        <img
            src={ManThingLogo}
            alt="Man Thing Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="miracleman" onClick={() => navigate('/miracleman')} style={brandButtonStyle}>
        <img
            src={MiracleManLogo}
            alt="Miracleman Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="moonknight" onClick={() => navigate('/moonknight')} style={brandButtonStyle}>
        <img
            src={MoonKnightLogo}
            alt="Moon Knight Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="newwarriors" onClick={() => navigate('/newwarriors')} style={brandButtonStyle}>
        <img
            src={NewWarriorsLogo}
            alt="New Warriors Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
    </button>,
     <button key="punisher" onClick={() => navigate('/punisher')} style={brandButtonStyle}>
        <img
            src={PunisherLogo}
            alt="Punisher Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="shield" onClick={() => navigate('/shield')} style={brandButtonStyle}>
        <img
            src={ShieldLogo}
            alt="S.H.I.E.L.D Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="spiderman" onClick={() => navigate('/spiderman')} style={brandButtonStyle}>
        <img
            src={SpiderManLogo}
            alt="Spider-Man Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </button>,
    <button key="squadronsupreme" onClick={() => navigate('/squadronsupreme')} style={brandButtonStyle}>
        <img
            src={SquadronSupremeLogo}
            alt="Squadron Supreme Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
    </button>,
    <button key="thor" onClick={() => navigate('/thor')} style={brandButtonStyle}>
        <img
            src={ThorLogo}
            alt="Thor Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
     <button key="thunderbolts" onClick={() => navigate('/thunderbolts')} style={brandButtonStyle}>
        <img
            src={ThunderboltsLogo}
            alt="Thunderbolts Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
     <button key="ultraforce" onClick={() => navigate('/ultraforce')} style={brandButtonStyle}>
        <img
            src={UltraforceLogo}
            alt="Ultraforces Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="venom" onClick={() => navigate('/venom')} style={brandButtonStyle}>
        <img
            src={VenomLogo}
            alt="Venom Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
    </button>,
    <button key="xmen" onClick={() => navigate('/xmen')} style={brandButtonStyle}>
        <img
            src={XMenLogo}
            alt="X-Men Logo"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </button>
  ];

  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '12px',
        maxWidth: '100%',
      }}
    >
      <div style={headerBarStyle}>Choose a Brand:</div>
      <div style={{ ...carouselOuterStyle, width: 'min(95%, 900px)' }}>
        <button
          type="button"
          onClick={() => scrollCarousel('left')}
          style={arrowButtonStyle}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div
          ref={carouselRef}
          style={carouselInnerStyle}
          className="marvel-carousel-scroll"
        >
          {cells}
        </div>
        <button
          type="button"
          onClick={() => scrollCarousel('right')}
          style={arrowButtonStyle}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
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
            /**/
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