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
import Avengers from './components/Marvel/Avengers.jsx';
import BlackPanther from './components/Marvel/BlackPanther.jsx';
import Blade from './components/Marvel/Blade.jsx';
import CaptainAmerica from './components/Marvel/CaptainAmerica.jsx';
import CloakAndDagger from './components/Marvel/CloakAndDagger.jsx';
import Daredevil from './components/Marvel/Daredevil.jsx';
import Deadpool from './components/Marvel/Deadpool.jsx';
import DrStrange from './components/Marvel/DrStrange.jsx';
import Eternals from './components/Marvel/Eternals.jsx';
import FantasticFour from './components/Marvel/FantasticFour.jsx';
import GardiansOfTheGalaxy from './components/Marvel/GardiansOfTheGalaxy.jsx';
import GhostRider from './components/Marvel/GhostRider.jsx';
import Hulk from './components/Marvel/Hulk.jsx';
import Inhumans from './components/Marvel/Inhumans.jsx';
import IronFist from './components/Marvel/IronFist.jsx';
import IronMan from './components/Marvel/IronMan.jsx';
import JessicaJones from './components/Marvel/JessicaJones.jsx';
import LukeCage from './components/Marvel/LukeCage.jsx';
import ManThing from './components/Marvel/ManThing.jsx';
import Miracleman from './components/Marvel/Miracleman.jsx';
import MoonKnight from './components/Marvel/MoonKnight.jsx';
import NewWarriors from './components/Marvel/NewWarriors.jsx';
import Punisher from './components/Marvel/Punisher.jsx';
import Shield from './components/Marvel/Shield.jsx';
import SpiderMan from './components/Marvel/SpiderMan.jsx';
import SquadronSupreme from './components/Marvel/SquadronSupreme.jsx';
import Thor from './components/Marvel/Thor.jsx';
import Thunderbolts from './components/Marvel/Thunderbolts.jsx';
import Ultraforce from './components/Marvel/Ultraforce.jsx';
import Venom from './components/Marvel/Venom.jsx';
import XMen from './components/Marvel/XMen.jsx';

// DC
import Aquaman from './components/DC/Aquaman.jsx';
import Authority from './components/DC/Authority.jsx';
import Batman from './components/DC/Batman.jsx';
import BlueBeetle from './components/DC/BlueBeetle.jsx';
import BoosterGold from './components/DC/BoosterGold.jsx';
import Constantine from './components/DC/Constantine.jsx';
import DoomPatrol from './components/DC/DoomPatrol.jsx';
import DrFate from './components/DC/DrFate.jsx';
import Flash from './components/DC/Flash.jsx';
import GreenArrow from './components/DC/GreenArrow.jsx';
import GreenLantern from './components/DC/GreenLantern.jsx';
import JLA from './components/DC/JLA.jsx';
import JonahHex from './components/DC/JonahHex.jsx';
import JSA from './components/DC/JSA.jsx';
import LegionOfSuperheroes from './components/DC/LegionOfSuperheroes.jsx';
import PhantomStranger from './components/DC/PhantomStranger.jsx';
import Shazam from './components/DC/Shazam.jsx';
import Specter from './components/DC/Specter.jsx';
import Superman from './components/DC/Superman.jsx';
import TeenTitans from './components/DC/TeenTitans.jsx';
import TheWatchman from './components/DC/TheWatchman.jsx';
import Wildcats from './components/DC/Wildcats.jsx';
import WonderWoman from './components/DC/WonderWoman.jsx';

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


function NavigationMenu() 
{
  
  const navigate = useNavigate();

  return (
      <nav className="menu">
        <ul>
          <button onClick={() => navigate('/marvel')} className="buttonTwo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjiNrQ5jdPNoyHc8Rf6cGiFNq-50tDtutdg&s" className="logoSize" />
          </button>
          <button onClick={() => navigate('/dc')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DC_Comics_2024.svg/1200px-DC_Comics_2024.svg.png" className="logoSize" />
          </button>
          <button onClick={() => navigate('/image')} className="buttonTwo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Image_Comics_logo.svg" className="logoSize" />
          </button>
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

          <Route path="/avengers" element={<Avengers />} />
          <Route path="/blackpanther" element={<BlackPanther />} />
          <Route path="/blade" element={<Blade />} />
          <Route path="/captainamerica" element={<CaptainAmerica />} />
          <Route path="/cloakanddagger" element={<CloakAndDagger />} />
          <Route path="/daredevil" element={<Daredevil />} />
          <Route path="/deadpool" element={<Deadpool />} />
          <Route path="/drstrange" element={<DrStrange />} />
          <Route path="/eternals" element={<Eternals />} />
          <Route path="/fantasticfour" element={<FantasticFour />} />
          <Route path="/gardiansofthegalaxy" element={<GardiansOfTheGalaxy />} />
          <Route path="/ghostrider" element={<GhostRider />} />
          <Route path="/hulk" element={<Hulk />} />
          <Route path="/inhumans" element={<Inhumans />} />
          <Route path="/ironfist" element={<IronFist />} />
          <Route path="/ironman" element={<IronMan />} />
          <Route path="/jessicajones" element={<JessicaJones />} />
          <Route path="/lukecage" element={<LukeCage />} />
          <Route path="/manthing" element={<ManThing />} />
          <Route path="/miracleman" element={<Miracleman />} />
          <Route path="/moonknight" element={<MoonKnight />} />
          <Route path="/newwarriors" element={<NewWarriors />} />
          <Route path="/punisher" element={<Punisher />} />
          <Route path="/shield" element={<Shield />} />
          <Route path="/spiderman" element={<SpiderMan />} />
          <Route path="/squadronsupreme" element={<SquadronSupreme />} />
          <Route path="/thor" element={<Thor />} />
          <Route path="/thunderbolts" element={<Thunderbolts />} />
          <Route path="/Ultraforce" element={<Ultraforce />} />
          <Route path="/venom" element={<Venom />} />
          <Route path="/xmen" element={<XMen />} />

          {/* DC Subroutes */}
          <Route path="/aquaman" element={<Aquaman />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/batman" element={<Batman />} />
          <Route path="/bluebeetle" element={<BlueBeetle />} />
          <Route path="/BoosterGold" element={<BoosterGold />} />
          <Route path="/constantine" element={<Constantine />} />
          <Route path="/doompatrol" element={<DoomPatrol />} />
          <Route path="/drfate" element={<DrFate />} />
          <Route path="/flash" element={<Flash />} />
          <Route path="/greenarrow" element={<GreenArrow />} />
          <Route path="/greenlantern" element={<GreenLantern />} />
          <Route path="/jla" element={<JLA />} />
          <Route path="/jonahhex" element={<JonahHex />} />
          <Route path="/jsa" element={<JSA />} />
          <Route path="/legionofsuperheroes" element={<LegionOfSuperheroes />} />
          <Route path="/phantomstranger" element={<PhantomStranger />} />
          <Route path="/shazam" element={<Shazam />} />
          <Route path="/specter" element={<Specter />} />
          <Route path="/superman" element={<Superman />} />
          <Route path="/teentitans" element={<TeenTitans />} />
          <Route path="/thewatchman" element={<TheWatchman />} />
          <Route path="/wildcats" element={<Wildcats />} />
          <Route path="/wonderwoman" element={<WonderWoman />} />

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