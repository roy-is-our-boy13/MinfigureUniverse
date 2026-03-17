import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import Marvel from './components/Marvel.jsx';
import DC from './components/DC.jsx';
import Image from './components/Image.jsx';
import StarWars from './components/StarWars.jsx';
import Capcom from './components/Capcom.jsx';
import Hasbro from './components/Hasbro.jsx';
import Mattel from './components/Mattel.jsx';
import Nintendo from './components/Nintendo.jsx';
import Sega from './components/Sega.jsx';
import ToeiCompany from './components/ToeiCompany.jsx';
import HannaBarbera from './components/HannaBarbera.jsx';
import Dynamite from './components/Dynamite.jsx';
import LEGO from './components/LEGO.jsx';
import OtherMedia from './components/OtherMedia.jsx';
import Contact from './components/Contact.jsx';

// Marvel
import AlphaFlight from './components/Marvel/AlphaFlight.jsx';
import AlphaFlightAlies from './components/Marvel/AlphaFlight/AlphaFlightAlies.jsx';
import AlphaFlightEnimies from './components/Marvel/AlphaFlight/AlphaFlightEnimies.jsx';
import Avengers from './components/Marvel/Avengers.jsx';
import AvengersAlies from './components/Marvel/Avengers/AvengersAlies.jsx';
import AvengersEnimies from './components/Marvel/Avengers/AvengersEnimies.jsx';
import BlackPanther from './components/Marvel/BlackPanther.jsx';
import BlackPantherAlies from './components/Marvel/BlackPanther/BlackPantherAlies.jsx';
import BlackPantherEnimies from './components/Marvel/BlackPanther/BlackPantherEnimies.jsx';
import Blade from './components/Marvel/Blade.jsx';
import BladeAlies from './components/Marvel/Blade/BladeAlies.jsx';
import BladeEnimies from './components/Marvel/Blade/BladeEnimies.jsx';
import CaptainAmerica from './components/Marvel/CaptainAmerica.jsx';
import CaptainAmericaAlies from './components/Marvel/CaptainAmerica/CaptainAmericaAlies.jsx';
import CaptainAmericaEnimies from './components/Marvel/CaptainAmerica/CaptainAmericaEnimies.jsx';
import CloakAndDagger from './components/Marvel/CloakAndDagger.jsx';
import CloakAndDaggerAlies from './components/Marvel/CloakAndDagger/CloakAndDaggerAlies.jsx';
import CloakAndDaggerEnimies from './components/Marvel/CloakAndDagger/CloakAndDaggerEnimies.jsx';
import Daredevil from './components/Marvel/Daredevil.jsx';
import DaredevilAlies from './components/Marvel/Daredevil/DaredevilAlies.jsx';
import DaredevilEnimies from './components/Marvel/Daredevil/DaredevilEnimies.jsx';
import Deadpool from './components/Marvel/Deadpool.jsx';
import DeadpoolAlies from './components/Marvel/Deadpool/DeadpoolAlies.jsx';
import DeadpoolEnimies from './components/Marvel/Deadpool/DeadpoolEnimies.jsx';
import DrStrange from './components/Marvel/DrStrange.jsx';
import DrStrangeAlies from './components/Marvel/DrStrange/DrStrangeAlies.jsx';
import DrStrangeEnimies from './components/Marvel/DrStrange/DrStrangeEnimies.jsx';
import Eternals from './components/Marvel/Eternals.jsx';
import EternalsAlies from './components/Marvel/Eternals/EternalsAlies.jsx';
import EternalsEnimies from './components/Marvel/Eternals/EternalsEnimies.jsx';
import FantasticFour from './components/Marvel/FantasticFour.jsx';
import FantasticFourAlies from './components/Marvel/FantasticFour/FantasticFourAlies.jsx';
import FantasticFourEnimies from './components/Marvel/FantasticFour/FantasticFourEnimies.jsx';
import GardiansOfTheGalaxy from './components/Marvel/GardiansOfTheGalaxy.jsx';
import GardiansOfTheGalaxyAlies from './components/Marvel/GardiansOfTheGalaxy/GardiansOfTheGalaxyAlies.jsx';
import GardiansOfTheGalaxyEnimies from './components/Marvel/GardiansOfTheGalaxy/GardiansOfTheGalaxyEnimies.jsx';
import GhostRider from './components/Marvel/GhostRider.jsx';
import GhostRiderAlies from './components/Marvel/GhostRider/GhostRiderAlies.jsx';
import GhostRiderEnimies from './components/Marvel/GhostRider/GhostRiderEnimies.jsx';
import Hulk from './components/Marvel/Hulk.jsx';
import HulkAlies from './components/Marvel/Hulk/HulkAlies.jsx';
import HulkEnimies from './components/Marvel/Hulk/HulkEnimies.jsx';
import Inhumans from './components/Marvel/Inhumans.jsx';
import InhumansAlies from './components/Marvel/Inhumans/InhumansAlies.jsx';
import InhumansEnimies from './components/Marvel/Inhumans/InhumansEnimies.jsx';
import IronFist from './components/Marvel/IronFist.jsx';
import IronFistAlies from './components/Marvel/IronFist/IronFistAlies.jsx';
import IronFistEnimies from './components/Marvel/IronFist/IronFistEnimies.jsx';
import IronMan from './components/Marvel/IronMan.jsx';
import IronManAlies from './components/Marvel/IronMan/IronManAlies.jsx';
import IronManEnimies from './components/Marvel/IronMan/IronManEnimies.jsx';
import JessicaJones from './components/Marvel/JessicaJones.jsx';
import JessicaJonesAlies from './components/Marvel/JessicaJones/JessicaJonesAlies.jsx';
import JessicaJonesEnimies from './components/Marvel/JessicaJones/JessicaJonesEnimies.jsx';
import LukeCage from './components/Marvel/LukeCage.jsx';
import LukeCageAlies from './components/Marvel/LukeCage/LukeCageAlies.jsx';
import LukeCageEnimies from './components/Marvel/LukeCage/LukeCageEnimies.jsx';
import ManThing from './components/Marvel/ManThing.jsx';
import ManThingAlies from './components/Marvel/ManThing/ManThingAlies.jsx';
import ManThingEnimies from './components/Marvel/ManThing/ManThingEnimies.jsx';
import Miracleman from './components/Marvel/Miracleman.jsx';
import MiraclemanAlies from './components/Marvel/Miracleman/MiraclemanAlies.jsx';
import MiraclemanEnimies from './components/Marvel/Miracleman/MiraclemanEnimies.jsx';
import MoonKnight from './components/Marvel/MoonKnight.jsx';
import MoonKnightAlies from './components/Marvel/MoonKnight/MoonKnightAlies.jsx';
import MoonKnightEnimies from './components/Marvel/MoonKnight/MoonKnightEnimies.jsx';
import NewWarriors from './components/Marvel/NewWarriors.jsx';
import NewWarriorsAlies from './components/Marvel/NewWarriors/NewWarriorsAlies.jsx';
import NewWarriorsEnimies from './components/Marvel/NewWarriors/NewWarriorsEnimies.jsx';
import Punisher from './components/Marvel/Punisher.jsx';
import PunisherAlies from './components/Marvel/Punisher/PunisherAlies.jsx';
import PunisherEnimies from './components/Marvel/Punisher/PunisherEnimies.jsx';
import Shield from './components/Marvel/Shield.jsx';
import ShieldAlies from './components/Marvel/Shield/ShieldAlies.jsx';
import ShieldEnimies from './components/Marvel/Shield/ShieldEnimies.jsx';
import SpiderMan from './components/Marvel/SpiderMan.jsx';
import SpiderManAlies from './components/Marvel/SpiderMan/SpiderManAlies.jsx';
import SpiderManEnimies from './components/Marvel/SpiderMan/SpiderManEnimies.jsx';
import SquadronSupreme from './components/Marvel/SquadronSupreme.jsx';
import SquadronSupremeAlies from './components/Marvel/SquadronSupreme/SquadronSupremeAlies.jsx';
import SquadronSupremeEnimies from './components/Marvel/SquadronSupreme/SquadronSupremeEnimies.jsx';
import Thor from './components/Marvel/Thor.jsx';
import ThorAlies from './components/Marvel/Thor/ThorAlies.jsx';
import ThorEnimies from './components/Marvel/Thor/ThorEnimies.jsx';
import Thunderbolts from './components/Marvel/Thunderbolts.jsx';
import ThunderboltsAlies from './components/Marvel/Thunderbolts/ThunderboltsAlies.jsx';
import ThunderboltsEnimies from './components/Marvel/Thunderbolts/ThunderboltsEnimies.jsx';
import Ultraforce from './components/Marvel/Ultraforce.jsx';
import UltraforceAlies from './components/Marvel/Ultraforce/UltraforceAlies.jsx';
import UltraforceEnimies from './components/Marvel/Ultraforce/UltraforceEnimies.jsx';
import Venom from './components/Marvel/Venom.jsx';
import VenomAlies from './components/Marvel/Venom/VenomAlies.jsx';
import VenomEnimies from './components/Marvel/Venom/VenomEnimies.jsx';
import XMen from './components/Marvel/XMen.jsx';
import XMenAlies from './components/Marvel/XMen/XMenAlies.jsx';
import XMenEnimies from './components/Marvel/XMen/XMenEnimies.jsx';

// DC
import Aquaman from './components/DC/Aquaman.jsx';
import AquamanAlies from './components/DC/Aquaman/AquamanAlies.jsx';
import AquamanEnimies from './components/DC/Aquaman/AquamanEnimies.jsx';
import Authority from './components/DC/Authority.jsx';
import AuthorityAlies from './components/DC/Authority/AuthorityAlies.jsx';
import AuthorityEnimies from './components/DC/Authority/AuthorityEnimies.jsx';
import Batman from './components/DC/Batman.jsx';
import BatmanAlies from './components/DC/Batman/BatmanAlies.jsx';
import BatmanEnimies from './components/DC/Batman/BatmanEnimies.jsx';
import BlueBeetle from './components/DC/BlueBeetle.jsx';
import BlueBeetleAlies from './components/DC/BlueBeetle/BlueBeetleAlies.jsx';
import BlueBeetleEnimies from './components/DC/BlueBeetle/BlueBeetleEnimies.jsx';
import BoosterGold from './components/DC/BoosterGold.jsx';
import BoosterGoldAlies from './components/DC/BoosterGold/BoosterGoldAlies.jsx';
import BoosterGoldEnimies from './components/DC/BoosterGold/BoosterGoldEnimies.jsx';
import Constantine from './components/DC/Constantine.jsx';
import ConstantineAlies from './components/DC/Constantine/ConstantineAlies.jsx';
import ConstantineEnimies from './components/DC/Constantine/ConstantineEnimies.jsx';
import DoomPatrol from './components/DC/DoomPatrol.jsx';
import DoomPatrolAlies from './components/DC/DoomPatrol/DoomPatrolAlies.jsx';
import DoomPatrolEnimies from './components/DC/DoomPatrol/DoomPatrolEnimies.jsx';
import DrFate from './components/DC/DrFate.jsx';
import DrFateAlies from './components/DC/DrFate/DrFateAlies.jsx';
import DrFateEnimies from './components/DC/DrFate/DrFateEnimies.jsx';
import Flash from './components/DC/Flash.jsx';
import FlashAlies from './components/DC/Flash/FlashAlies.jsx';
import FlashEnimies from './components/DC/Flash/FlashEnimies.jsx';
import GreenArrow from './components/DC/GreenArrow.jsx';
import GreenArrowAlies from './components/DC/GreenArrow/GreenArrowAlies.jsx';
import GreenArrowEnimies from './components/DC/GreenArrow/GreenArrowEnimies.jsx';
import GreenLantern from './components/DC/GreenLantern.jsx';
import GreenLanternAlies from './components/DC/GreenLantern/GreenLanternAlies.jsx';
import GreenLanternEnimies from './components/DC/GreenLantern/GreenLanternEnimies.jsx';
import JLA from './components/DC/JLA.jsx';
import JLAAlies from './components/DC/JLA/JLAAlies.jsx';
import JLAEnimies from './components/DC/JLA/JLAEnimies.jsx';
import JonahHex from './components/DC/JonahHex.jsx';
import JonahHexAlies from './components/DC/JonahHex/JonahHexAlies.jsx';
import JonahHexEnimies from './components/DC/JonahHex/JonahHexEnimies.jsx';
import JSA from './components/DC/JSA.jsx';
import JSAAlies from './components/DC/JSA/JSAAlies.jsx';
import JSAEnimies from './components/DC/JSA/JSAEnimies.jsx';
import LegionOfSuperheroes from './components/DC/LegionOfSuperheroes.jsx';
import LegionOfSuperheroesAlies from './components/DC/LegionOfSuperheroes/LegionOfSuperheroesAlies.jsx';
import LegionOfSuperheroesEnimies from './components/DC/LegionOfSuperheroes/LegionOfSuperheroesEnimies.jsx';
import PhantomStranger from './components/DC/PhantomStranger.jsx';
import PhantomStrangerAlies from './components/DC/PhantomStranger/PhantomStrangerAlies.jsx';
import PhantomStrangerEnimies from './components/DC/PhantomStranger/PhantomStrangerEnimies.jsx';
import Shazam from './components/DC/Shazam.jsx';
import ShazamAlies from './components/DC/Shazam/ShazamAlies.jsx';
import ShazamEnimies from './components/DC/Shazam/ShazamEnimies.jsx';
import Specter from './components/DC/Specter.jsx';
import SpecterAlies from './components/DC/Specter/SpecterAlies.jsx';
import SpecterEnimies from './components/DC/Specter/SpecterEnimies.jsx';
import Superman from './components/DC/Superman.jsx';
import SupermanAlies from './components/DC/Superman/SupermanAlies.jsx';
import SupermanEnimies from './components/DC/Superman/SupermanEnimies.jsx';
import TeenTitans from './components/DC/TeenTitans.jsx';
import TeenTitansAlies from './components/DC/TeenTitans/TeenTitansAlies.jsx';
import TeenTitansEnimies from './components/DC/TeenTitans/TeenTitansEnimies.jsx';
import TheWatchman from './components/DC/TheWatchman.jsx';
import TheWatchmanAlies from './components/DC/TheWatchman/TheWatchmanAlies.jsx';
import TheWatchmanEnimies from './components/DC/TheWatchman/TheWatchmanEnimies.jsx';
import Wildcats from './components/DC/Wildcats.jsx';
import WildcatsAlies from './components/DC/Wildcats/WildcatsAlies.jsx';
import WildcatsEnimies from './components/DC/Wildcats/WildcatsEnimies.jsx';
import WonderWoman from './components/DC/WonderWoman.jsx';
import WonderWomanAlies from './components/DC/WonderWoman/WonderWomanAlies.jsx';
import WonderWomanEnimies from './components/DC/WonderWoman/WonderWomanEnimies.jsx';

// Capcom
import MegaMan from './components/Capcom/MegaMan.jsx';
import StreetFighter from './components/Capcom/StreetFighter.jsx';

// Hasbro
import GIJoe from './components/Hasbro/GIJoe.jsx';
import Micronauts from './components/Hasbro/Micronauts.jsx';
import PowerRangers from './components/Hasbro/PowerRangers.jsx';
import RomTheSpaceKnight from './components/Hasbro/RomTheSpaceKnight.jsx';
import Transformers from './components/Hasbro/Transformers.jsx';

// Image Comics
import Invincible from './components/Image/Invincible.jsx';
import SavageDragon from './components/Image/SavageDragon.jsx';
import Shadownhawk from './components/Image/Shadowhawk.jsx';
import Spawn from './components/Image/Spawn.jsx';
import Witchblade from './components/Image/Witchblade.jsx';

// Lucasfilm
import IndianaJones from './components/Lucasfilm/IndianaJones.jsx';
import Starwars from './components/Lucasfilm/Starwars.jsx';

// Mattel
import BlokBots from './components/Mattel/BlokBots.jsx';
import Dragons from './components/Mattel/Dragons.jsx';
import HeMan from './components/Mattel/HeMan.jsx';

// Nintendo
import DonkeyKong from './components/Nintendo/DonkeyKong.jsx';
import FZero from './components/Nintendo/FZero.jsx';
import Kirby from './components/Nintendo/Kirby.jsx';
import Mario from './components/Nintendo/Mario.jsx';
import Metroid from './components/Nintendo/Metroid.jsx';
import Pokémon from './components/Nintendo/Pokémon.jsx';
import StarFox from './components/Nintendo/StarFox.jsx';
import Zelda from './components/Nintendo/Zelda.jsx';

// Sega
import Sonic from './components/Sega/Sonic.jsx';

// Toei
import KamenRider from './components/Toei/KamenRider.jsx';
import JapSpiderMan from './components/Toei/JapSpiderMan.jsx';

// Hanna Barbera
import ScoobyDoo from './components/HannaBarbera/ScoobyDoo.jsx';
import SpaceGhost from './components/HannaBarbera/SpaceGhost.jsx';

// Dynamite
import RoboCop from './components/Dynamite/RoboCop.jsx';
import Sonja from './components/Dynamite/Sonja.jsx';
import Terminator from './components/Dynamite/Terminator.jsx';
import TheBoys from './components/Dynamite/TheBoys.jsx';

// LEGO
import Agents from './components/LEGO/Agents.jsx';
import Bionicle from './components/LEGO/Bionicle.jsx';
import KnightsKingdom from './components/LEGO/KnightsKingdom.jsx';
import Ninjago from './components/LEGO/Ninjago.jsx';

// Other Medias
import Halo from './components/OtherMedia/Halo.jsx';
import JudgeDredd from './components/OtherMedia/JudgeDredd.jsx';
import MortalKombat from './components/OtherMedia/MortalKombat.jsx';
import Rocketeer from './components/OtherMedia/Rocketeer.jsx';
import Thundercats  from './components/OtherMedia/Thundercats.jsx';
import Tick from './components/OtherMedia/Tick.jsx';
import TMNT from './components/OtherMedia/TMNT.jsx';

import './App.css';

import AlphaFlightHeroes from './components/Marvel/AlphaFlight/AlphaFlightHeroes.jsx';
import AlphaFlightVillians from './components/Marvel/AlphaFlight/AlphaFlightVillians.jsx';

const MARVEL_MENU_ITEMS = [
  { path: '/alphaflight', label: 'Alpha Flight' },
  { path: '/avengers', label: 'Avengers' },
  { path: '/blackpanther', label: 'Black Panther' },
  { path: '/blade', label: 'Blade' },
  { path: '/captainamerica', label: 'Captain America' },
  { path: '/cloakanddagger', label: 'Cloak and Dagger' },
  { path: '/daredevil', label: 'Daredevil' },
  { path: '/deadpool', label: 'Deadpool' },
  { path: '/drstrange', label: 'Dr. Strange' },
  { path: '/eternals', label: 'Eternals' },
  { path: '/fantasticfour', label: 'Fantastic Four' },
  { path: '/gardiansofthegalaxy', label: 'Guardians of the Galaxy' },
  { path: '/ghostrider', label: 'Ghost Rider' },
  { path: '/hulk', label: 'Hulk' },
  { path: '/inhumans', label: 'Inhumans' },
  { path: '/ironfist', label: 'Iron Fist' },
  { path: '/ironman', label: 'Iron Man' },
  { path: '/jessicajones', label: 'Jessica Jones' },
  { path: '/lukecage', label: 'Luke Cage' },
  { path: '/manthing', label: 'Man-Thing' },
  { path: '/miracleman', label: 'Miracleman' },
  { path: '/moonknight', label: 'Moon Knight' },
  { path: '/newwarriors', label: 'New Warriors' },
  { path: '/punisher', label: 'Punisher' },
  { path: '/shield', label: 'S.H.I.E.L.D.' },
  { path: '/spiderman', label: 'Spider-Man' },
  { path: '/squadronsupreme', label: 'Squadron Supreme' },
  { path: '/thor', label: 'Thor' },
  { path: '/thunderbolts', label: 'Thunderbolts' },
  { path: '/Ultraforce', label: 'Ultraforce' },
  { path: '/venom', label: 'Venom' },
  { path: '/xmen', label: 'X-Men' },
];

const DC_MENU_ITEMS = [
  { path: '/aquaman', label: 'Aquaman' },
  { path: '/authority', label: 'The Authority' },
  { path: '/batman', label: 'Batman' },
  { path: '/bluebeetle', label: 'Blue Beetle' },
  { path: '/BoosterGold', label: 'Booster Gold' },
  { path: '/constantine', label: 'Constantine' },
  { path: '/doompatrol', label: 'Doom Patrol' },
  { path: '/drfate', label: 'Dr. Fate' },
  { path: '/flash', label: 'The Flash' },
  { path: '/greenarrow', label: 'Green Arrow' },
  { path: '/greenlantern', label: 'Green Lantern' },
  { path: '/jla', label: 'JLA' },
  { path: '/jonahhex', label: 'Jonah Hex' },
  { path: '/jsa', label: 'JSA' },
  { path: '/legionofsuperheroes', label: 'Legion of Superheroes' },
  { path: '/phantomstranger', label: 'Phantom Stranger' },
  { path: '/shazam', label: 'Shazam' },
  { path: '/specter', label: 'Specter' },
  { path: '/superman', label: 'Superman' },
  { path: '/teentitans', label: 'Teen Titans' },
  { path: '/thewatchman', label: 'The Watchman' },
  { path: '/wildcats', label: 'Wildcats' },
  { path: '/wonderwoman', label: 'Wonder Woman' },
];

const IMAGE_MENU_ITEMS = [
  { path: '/invincible', label: 'Invincible' },
  { path: '/savagedragon', label: 'Savage Dragon' },
  { path: '/shadownhawk', label: 'Shadowhawk' },
  { path: '/spawn', label: 'Spawn' },
  { path: '/witchblade', label: 'Witchblade' },
];

function MarvelDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/marvel')} aria-haspopup="true" aria-expanded="false">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjiNrQ5jdPNoyHc8Rf6cGiFNq-50tDtutdg&s" className="logoSize" alt="Marvel" />
      </button>
      <div className="dropdown-panel">
        {MARVEL_MENU_ITEMS.map(({ path, label }) => (
          <button
            key={path}
            className="dropdown-item"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DCDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/dc')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DC_Comics_2024.svg/1200px-DC_Comics_2024.svg.png" className="logoSize" alt="DC" />
      </button>
      <div className="dropdown-panel">
        {DC_MENU_ITEMS.map(({ path, label }) => (
          <button
            key={path}
            className="dropdown-item"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ImageDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/image')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Image_Comics_logo.svg" className="logoSize" alt="Image Comics" />
      </button>
      <div className="dropdown-panel">
        {IMAGE_MENU_ITEMS.map(({ path, label }) => (
          <button
            key={path}
            className="dropdown-item"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavigationMenu() 
{
  
  const navigate = useNavigate();

  return (
      <nav className="menu">
        <ul>
          <li className="dropdown-li">
            <MarvelDropdown />
          </li>
          <li className="dropdown-li">
            <DCDropdown />
          </li>
          <li className="dropdown-li">
            <ImageDropdown />
          </li>
          <button onClick={() => navigate('/starwars')} className="buttonTwo">
            <img src="https://vectorseek.com/wp-content/uploads/2024/01/Lucasfilm-LTD-Logo-Vector.svg-.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/capcom')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/5592px-Capcom_logo.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/hasbro')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hasbro_logo.svg/1200px-Hasbro_logo.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/mattel')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mattel_%282019%29.svg/1200px-Mattel_%282019%29.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/nintendo')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/sega')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/2560px-SEGA_logo.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/toei')} className="buttonTwo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcLSx_ieNlGqjqXjDw__B0dD1d3I6z5zIXg&s" className="logoSize" />
          </button>
          <button onClick={() => navigate('/hannabarbera')} className="buttonTwo">
            <img src="https://1000logos.net/wp-content/uploads/2020/10/Hanna-Barbera-logo.jpg" className="logoSize" />
          </button>
          <button onClick={() => navigate('/dynamite')} className="buttonTwo">
            <img src="https://www.previewsworld.com/Content/images/PublisherLogos/PL_Dynamite.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/lego')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/othermedia')} className="buttonTwo">
            Other Media
          </button>
        </ul>
      </nav> 
  );
}

function CopyRights() 
{
  return (
    <div>
      <p className="smallText">
            This site serves as a private photo gallery for minifigures and is not affiliated with Lego,
            Mega, Hasbro, Marvel, DC, Lucasfilm, Mattel, Captions, etc. All characters depicted are 
            properties of their respective owners.
      </p>
    </div>
  );
}

function App() 
{
  return (
    <div className="backgroundColor">
    <div className='pageWrapper'>
    <Router>
        <header>
          <div className='borderColor'>
            <h1>Minifigures</h1>
            <NavigationMenu />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Franchise Routes */}
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<DC />} />
          <Route path="/image" element={<Image />} />
          <Route path="/starwars" element={<StarWars />} />
          <Route path="/capcom" element={<Capcom />} />
          <Route path="/hasbro" element={<Hasbro />} />
          <Route path="/mattel" element={<Mattel />} />
          <Route path="/nintendo" element={<Nintendo />} />
          <Route path="/sega" element={<Sega />} />
          <Route path="/toei" element={<ToeiCompany />} />
          <Route path="/hannabarbera" element={<HannaBarbera />} />
          <Route path="/dynamite" element={<Dynamite />} />
          <Route path="/lego" element={<LEGO />} />
          <Route path="/othermedia" element={<OtherMedia />} />
          <Route path="/contact" element={<Contact />} />

          {/* Marvel Subroutes */}
          <Route path="/alphaflight" element={<AlphaFlight />} />
            <Route path="/alphaflightheros" element={<AlphaFlightHeroes />} />
            <Route path="/alphaflightvillians" element={<AlphaFlightVillians />} />
            <Route path="/alphaflightalies" element={<AlphaFlightAlies />} />
            <Route path="/alphaflightenimies" element={<AlphaFlightEnimies />} />

          <Route path="/avengers" element={<Avengers />} />
          <Route path="/avengersalies" element={<AvengersAlies />} />
          <Route path="/avengersenimies" element={<AvengersEnimies />} />
          <Route path="/blackpanther" element={<BlackPanther />} />
          <Route path="/blackpantheralies" element={<BlackPantherAlies />} />
          <Route path="/blackpantherenimies" element={<BlackPantherEnimies />} />
          <Route path="/blade" element={<Blade />} />
          <Route path="/bladealies" element={<BladeAlies />} />
          <Route path="/bladeenimies" element={<BladeEnimies />} />
          <Route path="/captainamerica" element={<CaptainAmerica />} />
          <Route path="/captainamericaalies" element={<CaptainAmericaAlies />} />
          <Route path="/captainamericaenimies" element={<CaptainAmericaEnimies />} />
          <Route path="/cloakanddagger" element={<CloakAndDagger />} />
          <Route path="/cloakanddaggeralies" element={<CloakAndDaggerAlies />} />
          <Route path="/cloakanddaggerenimies" element={<CloakAndDaggerEnimies />} />
          <Route path="/daredevil" element={<Daredevil />} />
          <Route path="/daredevilalies" element={<DaredevilAlies />} />
          <Route path="/daredevilenimies" element={<DaredevilEnimies />} />
          <Route path="/deadpool" element={<Deadpool />} />
          <Route path="/deadpoolalies" element={<DeadpoolAlies />} />
          <Route path="/deadpoolenimies" element={<DeadpoolEnimies />} />
          <Route path="/drstrange" element={<DrStrange />} />
          <Route path="/drstrangealies" element={<DrStrangeAlies />} />
          <Route path="/drstrangeenimies" element={<DrStrangeEnimies />} />
          <Route path="/eternals" element={<Eternals />} />
          <Route path="/eternalsalies" element={<EternalsAlies />} />
          <Route path="/eternalsenimies" element={<EternalsEnimies />} />
          <Route path="/fantasticfour" element={<FantasticFour />} />
          <Route path="/fantasticfouralies" element={<FantasticFourAlies />} />
          <Route path="/fantasticfourenimies" element={<FantasticFourEnimies />} />
          <Route path="/gardiansofthegalaxy" element={<GardiansOfTheGalaxy />} />
          <Route path="/gardiansofthegalaxyalies" element={<GardiansOfTheGalaxyAlies />} />
          <Route path="/gardiansofthegalaxyenimies" element={<GardiansOfTheGalaxyEnimies />} />
          <Route path="/ghostrider" element={<GhostRider />} />
          <Route path="/ghostrideralies" element={<GhostRiderAlies />} />
          <Route path="/ghostriderenimies" element={<GhostRiderEnimies />} />
          <Route path="/hulk" element={<Hulk />} />
          <Route path="/hulkalies" element={<HulkAlies />} />
          <Route path="/hulkenimies" element={<HulkEnimies />} />
          <Route path="/inhumans" element={<Inhumans />} />
          <Route path="/inhumansalies" element={<InhumansAlies />} />
          <Route path="/inhumansenimies" element={<InhumansEnimies />} />
          <Route path="/ironfist" element={<IronFist />} />
          <Route path="/ironfistalies" element={<IronFistAlies />} />
          <Route path="/ironfistenimies" element={<IronFistEnimies />} />
          <Route path="/ironman" element={<IronMan />} />
          <Route path="/ironmanalies" element={<IronManAlies />} />
          <Route path="/ironmanenimies" element={<IronManEnimies />} />
          <Route path="/jessicajones" element={<JessicaJones />} />
          <Route path="/jessicajonesalies" element={<JessicaJonesAlies />} />
          <Route path="/jessicajonesenimies" element={<JessicaJonesEnimies />} />
          <Route path="/lukecage" element={<LukeCage />} />
          <Route path="/lukecagealies" element={<LukeCageAlies />} />
          <Route path="/lukecageenimies" element={<LukeCageEnimies />} />
          <Route path="/manthing" element={<ManThing />} />
          <Route path="/manthingalies" element={<ManThingAlies />} />
          <Route path="/manthingenimies" element={<ManThingEnimies />} />
          <Route path="/miracleman" element={<Miracleman />} />
          <Route path="/miraclemanalies" element={<MiraclemanAlies />} />
          <Route path="/miraclemanenimies" element={<MiraclemanEnimies />} />
          <Route path="/moonknight" element={<MoonKnight />} />
          <Route path="/moonknightalies" element={<MoonKnightAlies />} />
          <Route path="/moonknightenimies" element={<MoonKnightEnimies />} />
          <Route path="/newwarriors" element={<NewWarriors />} />
          <Route path="/newwarriorsalies" element={<NewWarriorsAlies />} />
          <Route path="/newwarriorsenimies" element={<NewWarriorsEnimies />} />
          <Route path="/punisher" element={<Punisher />} />
          <Route path="/punisheralies" element={<PunisherAlies />} />
          <Route path="/punisherenimies" element={<PunisherEnimies />} />
          <Route path="/shield" element={<Shield />} />
          <Route path="/shieldalies" element={<ShieldAlies />} />
          <Route path="/shieldenimies" element={<ShieldEnimies />} />
          <Route path="/spiderman" element={<SpiderMan />} />
          <Route path="/spidermanalies" element={<SpiderManAlies />} />
          <Route path="/spidermanenimies" element={<SpiderManEnimies />} />
          <Route path="/squadronsupreme" element={<SquadronSupreme />} />
          <Route path="/squadronsupremealies" element={<SquadronSupremeAlies />} />
          <Route path="/squadronsupremeenimies" element={<SquadronSupremeEnimies />} />
          <Route path="/thor" element={<Thor />} />
          <Route path="/thoralies" element={<ThorAlies />} />
          <Route path="/thorenimies" element={<ThorEnimies />} />
          <Route path="/thunderbolts" element={<Thunderbolts />} />
          <Route path="/thunderboltsalies" element={<ThunderboltsAlies />} />
          <Route path="/thunderboltsenimies" element={<ThunderboltsEnimies />} />
          <Route path="/Ultraforce" element={<Ultraforce />} />
          <Route path="/Ultraforcealies" element={<UltraforceAlies />} />
          <Route path="/Ultraforceenimies" element={<UltraforceEnimies />} />
          <Route path="/venom" element={<Venom />} />
          <Route path="/venomalies" element={<VenomAlies />} />
          <Route path="/venomenimies" element={<VenomEnimies />} />
          <Route path="/xmen" element={<XMen />} />
          <Route path="/xmenalies" element={<XMenAlies />} />
          <Route path="/xmenenimies" element={<XMenEnimies />} />

          {/* DC Subroutes */}
          <Route path="/aquaman" element={<Aquaman />} />
          <Route path="/aquamanalies" element={<AquamanAlies />} />
          <Route path="/aquamanenimies" element={<AquamanEnimies />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/authorityalies" element={<AuthorityAlies />} />
          <Route path="/authorityenimies" element={<AuthorityEnimies />} />
          <Route path="/batman" element={<Batman />} />
          <Route path="/batmanalies" element={<BatmanAlies />} />
          <Route path="/batmanenimies" element={<BatmanEnimies />} />
          <Route path="/bluebeetle" element={<BlueBeetle />} />
          <Route path="/bluebeetlealies" element={<BlueBeetleAlies />} />
          <Route path="/bluebeetleenimies" element={<BlueBeetleEnimies />} />
          <Route path="/BoosterGold" element={<BoosterGold />} />
          <Route path="/BoosterGoldalies" element={<BoosterGoldAlies />} />
          <Route path="/BoosterGoldenimies" element={<BoosterGoldEnimies />} />
          <Route path="/constantine" element={<Constantine />} />
          <Route path="/constantinealies" element={<ConstantineAlies />} />
          <Route path="/constantineenimies" element={<ConstantineEnimies />} />
          <Route path="/doompatrol" element={<DoomPatrol />} />
          <Route path="/doompatrolalies" element={<DoomPatrolAlies />} />
          <Route path="/doompatrolenimies" element={<DoomPatrolEnimies />} />
          <Route path="/drfate" element={<DrFate />} />
          <Route path="/drfatealies" element={<DrFateAlies />} />
          <Route path="/drfateenimies" element={<DrFateEnimies />} />
          <Route path="/flash" element={<Flash />} />
          <Route path="/flashalies" element={<FlashAlies />} />
          <Route path="/flashenimies" element={<FlashEnimies />} />
          <Route path="/greenarrow" element={<GreenArrow />} />
          <Route path="/greenarrowalies" element={<GreenArrowAlies />} />
          <Route path="/greenarrowenimies" element={<GreenArrowEnimies />} />
          <Route path="/greenlantern" element={<GreenLantern />} />
          <Route path="/greenlanternalies" element={<GreenLanternAlies />} />
          <Route path="/greenlanternenimies" element={<GreenLanternEnimies />} />
          <Route path="/jla" element={<JLA />} />
          <Route path="/jlaalies" element={<JLAAlies />} />
          <Route path="/jlaenimies" element={<JLAEnimies />} />
          <Route path="/jonahhex" element={<JonahHex />} />
          <Route path="/jonahhexalies" element={<JonahHexAlies />} />
          <Route path="/jonahhexenimies" element={<JonahHexEnimies />} />
          <Route path="/jsa" element={<JSA />} />
          <Route path="/jsaalies" element={<JSAAlies />} />
          <Route path="/jsaenimies" element={<JSAEnimies />} />
          <Route path="/legionofsuperheroes" element={<LegionOfSuperheroes />} />
          <Route path="/legionofsuperheroesalies" element={<LegionOfSuperheroesAlies />} />
          <Route path="/legionofsuperheroesenimies" element={<LegionOfSuperheroesEnimies />} />
          <Route path="/phantomstranger" element={<PhantomStranger />} />
          <Route path="/phantomstrangeralies" element={<PhantomStrangerAlies />} />
          <Route path="/phantomstrangerenimies" element={<PhantomStrangerEnimies />} />
          <Route path="/shazam" element={<Shazam />} />
          <Route path="/shazamalies" element={<ShazamAlies />} />
          <Route path="/shazamenimies" element={<ShazamEnimies />} />
          <Route path="/specter" element={<Specter />} />
          <Route path="/specteralies" element={<SpecterAlies />} />
          <Route path="/specterenimies" element={<SpecterEnimies />} />
          <Route path="/superman" element={<Superman />} />
          <Route path="/supermanalies" element={<SupermanAlies />} />
          <Route path="/supermanenimies" element={<SupermanEnimies />} />
          <Route path="/teentitans" element={<TeenTitans />} />
          <Route path="/teentitansalies" element={<TeenTitansAlies />} />
          <Route path="/teentitansenimies" element={<TeenTitansEnimies />} />
          <Route path="/thewatchman" element={<TheWatchman />} />
          <Route path="/thewatchmanalies" element={<TheWatchmanAlies />} />
          <Route path="/thewatchmanenimies" element={<TheWatchmanEnimies />} />
          <Route path="/wildcats" element={<Wildcats />} />
          <Route path="/wildcatsalies" element={<WildcatsAlies />} />
          <Route path="/wildcatsenimies" element={<WildcatsEnimies />} />
          <Route path="/wonderwoman" element={<WonderWoman />} />
          <Route path="/wonderwomanalies" element={<WonderWomanAlies />} />
          <Route path="/wonderwomanenimies" element={<WonderWomanEnimies />} />

          {/* Capcom Subroutes */}
          <Route path="/megaman" element={<MegaMan />} />
          <Route path="/streetfighter" element={<StreetFighter />} />

          {/* Hasbro Subroutes */}
          <Route path="/gijoe" element={<GIJoe />} />
          <Route path="/micronauts" element={<Micronauts />} />
          <Route path="/powerrangers" element={<PowerRangers />} />
          <Route path="/romthespaceknight" element={<RomTheSpaceKnight />} />
          <Route path="/transformers" element={<Transformers />} />

          {/* Image Comics Subroutes */}
          <Route path="/invincible" element={<Invincible />} />
          <Route path="/savagedragon" element={<SavageDragon />} />
          <Route path="/shadownhawk" element={<Shadownhawk />} />
          <Route path="/spawn" element={<Spawn />} />
          <Route path="/witchblade" element={<Witchblade />} />

          {/* Lucasfilm Subroutes */}
          <Route path="/indianajones" element={<IndianaJones />} />
          <Route path="/starwars-lucasfilm" element={<Starwars />} /> 

          {/* Mattel Subroutes */}
          <Route path="/blokbots" element={<BlokBots />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/HeMan" element={<HeMan />} />

          {/* Nintendo Subroutes */}
          <Route path="/donkeykong" element={<DonkeyKong />} />
          <Route path="/fzero" element={<FZero />} />
          <Route path="/kirby" element={<Kirby />} />
          <Route path="/mario" element={<Mario />} />
          <Route path="/metroid" element={<Metroid />} />
          <Route path="/pokémon" element={<Pokémon />} />
          <Route path="/starfox" element={<StarFox />} />
          <Route path="/zelda" element={<Zelda />} />

          {/* Sega Subroute */}
          <Route path="/sonic" element={<Sonic />} />

          {/* Toei Subroute */}
          <Route path="/kamenrider" element={<KamenRider />} />
          <Route path="/japspiderman" element={<JapSpiderMan />} />

          {/* Hanna Barbera Subroute */}
          <Route path="/scoobydoo" element={<ScoobyDoo />} />
          <Route path="/spaceghost" element={<SpaceGhost />} />

          {/* Dynamite Subroute */}
          <Route path="/robocop" element={<RoboCop />} />
          <Route path="/sonja" element={<Sonja />} />
          <Route path="/terminator" element={<Terminator />} />
          <Route path="/theboys" element={<TheBoys />} />

          {/* LEGO Subroute */}
          <Route path="/agents" element={<Agents />} />
          <Route path="/bionicle" element={<Bionicle />} />
          <Route path="/knightskingdom" element={<KnightsKingdom />} />
          <Route path="/ninjago" element={<Ninjago />} />

          {/* Other Medias Subroute */}
          <Route path="/halo" element={<Halo />} />
          <Route path="/judgedredd" element={<JudgeDredd />} />
          <Route path="/mortalkombat" element={<MortalKombat />} />
          <Route path="/rocketeer" element={<Rocketeer />} />
          <Route path="/thundercats" element={<Thundercats />} />
          <Route path="/tick" element={<Tick />} />
          <Route path="/tmnt" element={<TMNT />} />
          
        </Routes>
        <div className='borderColor'>
          <div className="mainContent">
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
          </div>
          <CopyRights />
        </div>
    </Router>
    </div>
  </div>
  );
}

export default App;