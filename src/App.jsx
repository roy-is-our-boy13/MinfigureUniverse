import { useMemo, useRef, useState } from 'react';
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
import SpiderManFamily from './components/Marvel/SpiderMan/SpiderManFamily.jsx';
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
import MegaManAlies from './components/Capcom/MegaMan/MegaManAlies.jsx';
import MegaManEnimies from './components/Capcom/MegaMan/MegaManEnimies.jsx';
import StreetFighter from './components/Capcom/StreetFighter.jsx';
import StreetFighterAlies from './components/Capcom/StreetFighter/StreetFighterAlies.jsx';
import StreetFighterEnimies from './components/Capcom/StreetFighter/StreetFighterEnimies.jsx';

// Hasbro
import GIJoe from './components/Hasbro/GIJoe.jsx';
import GIJoeAlies from './components/Hasbro/GIJoe/GIJoeAlies.jsx';
import GIJoeEnimies from './components/Hasbro/GIJoe/GIJoeEnimies.jsx';
import Micronauts from './components/Hasbro/Micronauts.jsx';
import MicronautsAlies from './components/Hasbro/Micronauts/MicronautsAlies.jsx';
import MicronautsEnimies from './components/Hasbro/Micronauts/MicronautsEnimies.jsx';
import PowerRangers from './components/Hasbro/PowerRangers.jsx';
import PowerRangersAlies from './components/Hasbro/PowerRangers/PowerRangersAlies.jsx';
import PowerRangersEnimies from './components/Hasbro/PowerRangers/PowerRangersEnimies.jsx';
import RomTheSpaceKnight from './components/Hasbro/RomTheSpaceKnight.jsx';
import RomTheSpaceKnightAlies from './components/Hasbro/RomTheSpaceKnight/RomTheSpaceKnightAlies.jsx';
import RomTheSpaceKnightEnimies from './components/Hasbro/RomTheSpaceKnight/RomTheSpaceKnightEnimies.jsx';
import Transformers from './components/Hasbro/Transformers.jsx';
import TransformersAlies from './components/Hasbro/Transformers/TransformersAlies.jsx';
import TransformersEnimies from './components/Hasbro/Transformers/TransformersEnimies.jsx';

// Image Comics
import Invincible from './components/Image/Invincible.jsx';
import InvincibleAlies from './components/Image/Invincible/InvincibleAlies.jsx';
import InvincibleEnimies from './components/Image/Invincible/InvincibleEnimies.jsx';
import SavageDragon from './components/Image/SavageDragon.jsx';
import SavageDragonAlies from './components/Image/SavageDragon/SavageDragonAlies.jsx';
import SavageDragonEnimies from './components/Image/SavageDragon/SavageDragonEnimies.jsx';
import Shadownhawk from './components/Image/Shadowhawk.jsx';
import ShadownhawkAlies from './components/Image/Shadownhawk/ShadownhawkAlies.jsx';
import ShadownhawkEnimies from './components/Image/Shadownhawk/ShadownhawkEnimies.jsx';
import Spawn from './components/Image/Spawn.jsx';
import SpawnAlies from './components/Image/Spawn/SpawnAlies.jsx';
import SpawnEnimies from './components/Image/Spawn/SpawnEnimies.jsx';
import Witchblade from './components/Image/Witchblade.jsx';
import WitchbladeAlies from './components/Image/Witchblade/WitchbladeAlies.jsx';
import WitchbladeEnimies from './components/Image/Witchblade/WitchbladeEnimies.jsx';

// Lucasfilm
import IndianaJones from './components/Lucasfilm/IndianaJones.jsx';
import IndianaJonesAlies from './components/Lucasfilm/IndianaJones/IndianaJonesAlies.jsx';
import IndianaJonesEnimies from './components/Lucasfilm/IndianaJones/IndianaJonesEnimies.jsx';
import Starwars from './components/Lucasfilm/Starwars.jsx';
import StarwarsAlies from './components/Lucasfilm/Starwars/StarwarsAlies.jsx';
import StarwarsEnimies from './components/Lucasfilm/Starwars/StarwarsEnimies.jsx';

// Mattel
import BlokBots from './components/Mattel/BlokBots.jsx';
import BlokBotsAlies from './components/Mattel/BlokBots/BlokBotsAlies.jsx';
import BlokBotsEnimies from './components/Mattel/BlokBots/BlokBotsEnimies.jsx';
import Dragons from './components/Mattel/Dragons.jsx';
import DragonsAlies from './components/Mattel/Dragons/DragonsAlies.jsx';
import DragonsEnimies from './components/Mattel/Dragons/DragonsEnimies.jsx';
import HeMan from './components/Mattel/HeMan.jsx';
import HeManAlies from './components/Mattel/HeMan/HeManAlies.jsx';
import HeManEnimies from './components/Mattel/HeMan/HeManEnimies.jsx';

// Nintendo
import DonkeyKong from './components/Nintendo/DonkeyKong.jsx';
import DonkeyKongAlies from './components/Nintendo/DonkeyKong/DonkeyKongAlies.jsx';
import DonkeyKongEnimies from './components/Nintendo/DonkeyKong/DonkeyKongEnimies.jsx';
import FZero from './components/Nintendo/FZero.jsx';
import FZeroAlies from './components/Nintendo/FZero/FZeroAlies.jsx';
import FZeroEnimies from './components/Nintendo/FZero/FZeroEnimies.jsx';
import Kirby from './components/Nintendo/Kirby.jsx';
import KirbyAlies from './components/Nintendo/Kirby/KirbyAlies.jsx';
import KirbyEnimies from './components/Nintendo/Kirby/KirbyEnimies.jsx';
import Mario from './components/Nintendo/Mario.jsx';
import MarioAlies from './components/Nintendo/Mario/MarioAlies.jsx';
import MarioEnimies from './components/Nintendo/Mario/MarioEnimies.jsx';
import Metroid from './components/Nintendo/Metroid.jsx';
import MetroidAlies from './components/Nintendo/Metroid/MetroidAlies.jsx';
import MetroidEnimies from './components/Nintendo/Metroid/MetroidEnimies.jsx';
import Pokémon from './components/Nintendo/Pokémon.jsx';
import PokémonAlies from './components/Nintendo/Pokémon/PokémonAlies.jsx';
import PokémonEnimies from './components/Nintendo/Pokémon/PokémonEnimies.jsx';
import StarFox from './components/Nintendo/StarFox.jsx';
import StarFoxAlies from './components/Nintendo/StarFox/StarFoxAlies.jsx';
import StarFoxEnimies from './components/Nintendo/StarFox/StarFoxEnimies.jsx';
import Zelda from './components/Nintendo/Zelda.jsx';
import ZeldaAlies from './components/Nintendo/Zelda/ZeldaAlies.jsx';
import ZeldaEnimies from './components/Nintendo/Zelda/ZeldaEnimies.jsx';

// Sega
import Sonic from './components/Sega/Sonic.jsx';
import SonicAlies from './components/Sega/Sonic/SonicAlies.jsx';
import SonicEnimies from './components/Sega/Sonic/SonicEnimies.jsx';

// Toei
import KamenRider from './components/Toei/KamenRider.jsx';
import KamenRiderAlies from './components/Toei/KamenRider/KamenRiderAlies.jsx';
import KamenRiderEnimies from './components/Toei/KamenRider/KamenRiderEnimies.jsx';
import JapSpiderMan from './components/Toei/JapSpiderMan.jsx';
import JapSpiderManAlies from './components/Toei/JapSpiderMan/JapSpiderManAlies.jsx';
import JapSpiderManEnimies from './components/Toei/JapSpiderMan/JapSpiderManEnimies.jsx';

// Hanna Barbera
import ScoobyDoo from './components/HannaBarbera/ScoobyDoo.jsx';
import ScoobyDooAlies from './components/HannaBarbera/ScoobyDoo/ScoobyDooAlies.jsx';
import ScoobyDooEnimies from './components/HannaBarbera/ScoobyDoo/ScoobyDooEnimies.jsx';
import SpaceGhost from './components/HannaBarbera/SpaceGhost.jsx';
import SpaceGhostAlies from './components/HannaBarbera/SpaceGhost/SpaceGhostAlies.jsx';
import SpaceGhostEnimies from './components/HannaBarbera/SpaceGhost/SpaceGhostEnimies.jsx';

// Dynamite
import RoboCop from './components/Dynamite/RoboCop.jsx';
import RoboCopAlies from './components/Dynamite/RoboCop/RoboCopAlies.jsx';
import RoboCopEnimies from './components/Dynamite/RoboCop/RoboCopEnimies.jsx';
import Sonja from './components/Dynamite/Sonja.jsx';
import SonjaAlies from './components/Dynamite/Sonja/SonjaAlies.jsx';
import SonjaEnimies from './components/Dynamite/Sonja/SonjaEnimies.jsx';
import Terminator from './components/Dynamite/Terminator.jsx';
import TerminatorAlies from './components/Dynamite/Terminator/TerminatorAlies.jsx';
import TerminatorEnimies from './components/Dynamite/Terminator/TerminatorEnimies.jsx';
import TheBoys from './components/Dynamite/TheBoys.jsx';
import TheBoysAlies from './components/Dynamite/TheBoys/TheBoysAlies.jsx';
import TheBoysEnimies from './components/Dynamite/TheBoys/TheBoysEnimies.jsx';

// LEGO
import Agents from './components/LEGO/Agents.jsx';
import AgentsAlies from './components/LEGO/Agents/AgentsAlies.jsx';
import AgentsEnimies from './components/LEGO/Agents/AgentsEnimies.jsx';
import Bionicle from './components/LEGO/Bionicle.jsx';
import BionicleAlies from './components/LEGO/Bionicle/BionicleAlies.jsx';
import BionicleEnimies from './components/LEGO/Bionicle/BionicleEnimies.jsx';
import KnightsKingdom from './components/LEGO/KnightsKingdom.jsx';
import KnightsKingdomAlies from './components/LEGO/KnightsKingdom/KnightsKingdomAlies.jsx';
import KnightsKingdomEnimies from './components/LEGO/KnightsKingdom/KnightsKingdomEnimies.jsx';
import Ninjago from './components/LEGO/Ninjago.jsx';
import NinjagoAlies from './components/LEGO/Ninjago/NinjagoAlies.jsx';
import NinjagoEnimies from './components/LEGO/Ninjago/NinjagoEnimies.jsx';

// Other Medias
import Halo from './components/OtherMedia/Halo.jsx';
import HaloAlies from './components/OtherMedia/Halo/HaloAlies.jsx';
import HaloEnimies from './components/OtherMedia/Halo/HaloEnimies.jsx';
import JudgeDredd from './components/OtherMedia/JudgeDredd.jsx';
import JudgeDreddAlies from './components/OtherMedia/JudgeDredd/JudgeDreddAlies.jsx';
import JudgeDreddEnimies from './components/OtherMedia/JudgeDredd/JudgeDreddEnimies.jsx';
import MortalKombat from './components/OtherMedia/MortalKombat.jsx';
import MortalKombatAlies from './components/OtherMedia/MortalKombat/MortalKombatAlies.jsx';
import MortalKombatEnimies from './components/OtherMedia/MortalKombat/MortalKombatEnimies.jsx';
import Rocketeer from './components/OtherMedia/Rocketeer.jsx';
import RocketeerAlies from './components/OtherMedia/Rocketeer/RocketeerAlies.jsx';
import RocketeerEnimies from './components/OtherMedia/Rocketeer/RocketeerEnimies.jsx';
import Thundercats  from './components/OtherMedia/Thundercats.jsx';
import ThundercatsAlies from './components/OtherMedia/Thundercats/ThundercatsAlies.jsx';
import ThundercatsEnimies from './components/OtherMedia/Thundercats/ThundercatsEnimies.jsx';
import Tick from './components/OtherMedia/Tick.jsx';
import TickAlies from './components/OtherMedia/Tick/TickAlies.jsx';
import TickEnimies from './components/OtherMedia/Tick/TickEnimies.jsx';
import TMNT from './components/OtherMedia/TMNT.jsx';
import TMNTAlies from './components/OtherMedia/TMNT/TMNTAlies.jsx';
import TMNTEnimies from './components/OtherMedia/TMNT/TMNTEnimies.jsx';

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

const LUCASFILM_MENU_ITEMS = [
  { path: '/indianajones', label: 'Indiana Jones' },
  { path: '/starwars-lucasfilm', label: 'Star Wars' },
];

const CAPCOM_MENU_ITEMS = [
  { path: '/megaman', label: 'Mega Man' },
  { path: '/streetfighter', label: 'Street Fighter' },
];

const HASBRO_MENU_ITEMS = [
  { path: '/gijoe', label: 'G.I. Joe' },
  { path: '/micronauts', label: 'Micronauts' },
  { path: '/powerrangers', label: 'Power Rangers' },
  { path: '/romthespaceknight', label: 'Rom the Space Knight' },
  { path: '/transformers', label: 'Transformers' },
];

const MATTEL_MENU_ITEMS = [
  { path: '/blokbots', label: 'Blok Bots' },
  { path: '/dragons', label: 'Dragons' },
  { path: '/HeMan', label: 'He-Man' },
];

const NINTENDO_MENU_ITEMS = [
  { path: '/donkeykong', label: 'Donkey Kong' },
  { path: '/fzero', label: 'F-Zero' },
  { path: '/kirby', label: 'Kirby' },
  { path: '/mario', label: 'Mario' },
  { path: '/metroid', label: 'Metroid' },
  { path: '/pokémon', label: 'Pokémon' },
  { path: '/starfox', label: 'Star Fox' },
  { path: '/zelda', label: 'Zelda' },
];

const SEGA_MENU_ITEMS = [
  { path: '/sonic', label: 'Sonic' },
];

const TOEI_MENU_ITEMS = [
  { path: '/kamenrider', label: 'Kamen Rider' },
  { path: '/japspiderman', label: 'Japanese Spider-Man' },
];

const HANNABARBERA_MENU_ITEMS = [
  { path: '/scoobydoo', label: 'Scooby-Doo' },
  { path: '/spaceghost', label: 'Space Ghost' },
];

const DYNAMITE_MENU_ITEMS = [
  { path: '/robocop', label: 'RoboCop' },
  { path: '/sonja', label: 'Red Sonja' },
  { path: '/terminator', label: 'Terminator' },
  { path: '/theboys', label: 'The Boys' },
];

const LEGO_MENU_ITEMS = [
  { path: '/agents', label: 'Agents' },
  { path: '/bionicle', label: 'Bionicle' },
  { path: '/knightskingdom', label: 'Knights Kingdom' },
  { path: '/ninjago', label: 'Ninjago' },
];

const OTHERMEDIA_MENU_ITEMS = [
  { path: '/halo', label: 'Halo' },
  { path: '/judgedredd', label: 'Judge Dredd' },
  { path: '/mortalkombat', label: 'Mortal Kombat' },
  { path: '/rocketeer', label: 'Rocketeer' },
  { path: '/thundercats', label: 'Thundercats' },
  { path: '/tick', label: 'Tick' },
  { path: '/tmnt', label: 'TMNT' },
];

function SearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const allItems = useMemo(() => {
    const franchiseItems = [
      { path: '/', label: 'Home' },
      { path: '/marvel', label: 'Marvel' },
      { path: '/dc', label: 'DC' },
      { path: '/image', label: 'Image Comics' },
      { path: '/starwars', label: 'Lucasfilm' },
      { path: '/capcom', label: 'Capcom' },
      { path: '/hasbro', label: 'Hasbro' },
      { path: '/mattel', label: 'Mattel' },
      { path: '/nintendo', label: 'Nintendo' },
      { path: '/sega', label: 'Sega' },
      { path: '/toei', label: 'Toei' },
      { path: '/hannabarbera', label: 'Hanna Barbera' },
      { path: '/dynamite', label: 'Dynamite' },
      { path: '/lego', label: 'LEGO' },
      { path: '/othermedia', label: 'Other Media' },
    ];

    const byPath = new Map();
    for (const item of [
      ...franchiseItems,
      ...MARVEL_MENU_ITEMS,
      ...DC_MENU_ITEMS,
      ...IMAGE_MENU_ITEMS,
      ...LUCASFILM_MENU_ITEMS,
      ...CAPCOM_MENU_ITEMS,
      ...HASBRO_MENU_ITEMS,
      ...MATTEL_MENU_ITEMS,
      ...NINTENDO_MENU_ITEMS,
      ...SEGA_MENU_ITEMS,
      ...TOEI_MENU_ITEMS,
      ...HANNABARBERA_MENU_ITEMS,
      ...DYNAMITE_MENU_ITEMS,
      ...LEGO_MENU_ITEMS,
      ...OTHERMEDIA_MENU_ITEMS,
    ]) {
      if (!byPath.has(item.path)) byPath.set(item.path, item);
    }
    return Array.from(byPath.values());
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allItems
      .filter(({ label, path }) => (label + ' ' + path).toLowerCase().includes(q))
      .slice(0, 12);
  }, [allItems, query]);

  const goTo = (path) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="app-search">
      <input
        ref={inputRef}
        className="app-search-input"
        type="search"
        placeholder="Search pages (e.g., Batman, Sonic, Halo)…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          window.setTimeout(() => setIsOpen(false), 120);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setQuery('');
            setIsOpen(false);
            inputRef.current?.blur();
          }
          if (e.key === 'Enter' && results[0]) {
            e.preventDefault();
            goTo(results[0].path);
          }
        }}
        aria-label="Search pages"
      />

      {isOpen && results.length > 0 && (
        <div className="app-search-panel" role="listbox" aria-label="Search results">
          {results.map(({ path, label }) => (
            <button
              key={path}
              type="button"
              className="app-search-item"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => goTo(path)}
              role="option"
            >
              <span className="app-search-item-label">{label}</span>
              <span className="app-search-item-path">{path}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MarvelDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/marvel')} aria-haspopup="true" aria-expanded="false">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjiNrQ5jdPNoyHc8Rf6cGiFNq-50tDtutdg&s" className="logoSize nav-icon nav-icon--marvel" alt="Marvel" />
      </button>
      <div className="dropdown-panel dropdown-panel--marvel">
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DC_Comics_2024.svg/1200px-DC_Comics_2024.svg.png" className="logoSize nav-icon nav-icon--dc" alt="DC" />
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Image_Comics_logo.svg" className="logoSize nav-icon nav-icon--image" alt="Image Comics" />
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

function LucasfilmDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/starwars')} aria-haspopup="true" aria-expanded="false">
        <img src="https://vectorseek.com/wp-content/uploads/2024/01/Lucasfilm-LTD-Logo-Vector.svg-.png" className="logoSize nav-icon nav-icon--lucasfilm" alt="Lucasfilm" />
      </button>
      <div className="dropdown-panel">
        {LUCASFILM_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function CapcomDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/capcom')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/5592px-Capcom_logo.svg.png" className="logoSize nav-icon nav-icon--capcom" alt="Capcom" />
      </button>
      <div className="dropdown-panel">
        {CAPCOM_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function HasbroDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/hasbro')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hasbro_logo.svg/1200px-Hasbro_logo.svg.png" className="logoSize nav-icon nav-icon--hasbro" alt="Hasbro" />
      </button>
      <div className="dropdown-panel">
        {HASBRO_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function MattelDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/mattel')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mattel_%282019%29.svg/1200px-Mattel_%282019%29.svg.png" className="logoSize nav-icon nav-icon--mattel" alt="Mattel" />
      </button>
      <div className="dropdown-panel">
        {MATTEL_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function NintendoDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/nintendo')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png" className="logoSize nav-icon nav-icon--nintendo" alt="Nintendo" />
      </button>
      <div className="dropdown-panel">
        {NINTENDO_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function SegaDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/sega')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/2560px-SEGA_logo.svg.png" className="logoSize nav-icon nav-icon--sega" alt="Sega" />
      </button>
      <div className="dropdown-panel">
        {SEGA_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function ToeiDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/toei')} aria-haspopup="true" aria-expanded="false">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcLSx_ieNlGqjqXjDw__B0dD1d3I6z5zIXg&s" className="logoSize nav-icon nav-icon--toei" alt="Toei" />
      </button>
      <div className="dropdown-panel">
        {TOEI_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function HannaBarberaDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/hannabarbera')} aria-haspopup="true" aria-expanded="false">
        <img src="https://1000logos.net/wp-content/uploads/2020/10/Hanna-Barbera-logo.jpg" className="logoSize nav-icon nav-icon--hannabarbera" alt="Hanna Barbera" />
      </button>
      <div className="dropdown-panel">
        {HANNABARBERA_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function DynamiteDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/dynamite')} aria-haspopup="true" aria-expanded="false">
        <img src="https://www.previewsworld.com/Content/images/PublisherLogos/PL_Dynamite.png" className="logoSize nav-icon nav-icon--dynamite" alt="Dynamite" />
      </button>
      <div className="dropdown-panel">
        {DYNAMITE_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function LEGODropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/lego')} aria-haspopup="true" aria-expanded="false">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png" className="logoSize nav-icon nav-icon--lego" alt="LEGO" />
      </button>
      <div className="dropdown-panel">
        {LEGO_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
        ))}
      </div>
    </div>
  );
}

function OtherMediaDropdown() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-wrapper">
      <button className="buttonTwo dropdown-trigger" onClick={() => navigate('/othermedia')} aria-haspopup="true" aria-expanded="false">
        <span className="dropdown-trigger-text nav-icon nav-icon--othermedia">Other Media</span>
      </button>
      <div className="dropdown-panel">
        {OTHERMEDIA_MENU_ITEMS.map(({ path, label }) => (
          <button key={path} className="dropdown-item" onClick={() => navigate(path)}>{label}</button>
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
          <li className="dropdown-li">
            <LucasfilmDropdown />
          </li>
          <li className="dropdown-li">
            <CapcomDropdown />
          </li>
          <li className="dropdown-li">
            <HasbroDropdown />
          </li>
          <li className="dropdown-li">
            <MattelDropdown />
          </li>
          <li className="dropdown-li">
            <NintendoDropdown />
          </li>
          <li className="dropdown-li">
            <SegaDropdown />
          </li>
          <li className="dropdown-li">
            <ToeiDropdown />
          </li>
          <li className="dropdown-li">
            <HannaBarberaDropdown />
          </li>
          <li className="dropdown-li">
            <DynamiteDropdown />
          </li>
          <li className="dropdown-li">
            <LEGODropdown />
          </li>
          <li className="dropdown-li">
            <OtherMediaDropdown />
          </li>
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
      <Router>
        <header>
          <div className='borderColor'>
            <Link to="/" className="app-title-link" aria-label="Back to home">
              <h1 className="app-title">Minifigures</h1>
            </Link>
            <div className="header-controls">
              <NavigationMenu />
              <SearchBar />
            </div>
          </div>
        </header>
        <div className='pageWrapper'>
          <div className='pageWrapper-inner'>
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
          <Route path="/spidermanfamily" element={<SpiderManFamily />} />
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
          <Route path="/megamanalies" element={<MegaManAlies />} />
          <Route path="/megamanenimies" element={<MegaManEnimies />} />
          <Route path="/streetfighter" element={<StreetFighter />} />
          <Route path="/streetfighteralies" element={<StreetFighterAlies />} />
          <Route path="/streetfighterenimies" element={<StreetFighterEnimies />} />

          {/* Hasbro Subroutes */}
          <Route path="/gijoe" element={<GIJoe />} />
          <Route path="/gijoealies" element={<GIJoeAlies />} />
          <Route path="/gijoeenimies" element={<GIJoeEnimies />} />
          <Route path="/micronauts" element={<Micronauts />} />
          <Route path="/micronautsalies" element={<MicronautsAlies />} />
          <Route path="/micronautsenimies" element={<MicronautsEnimies />} />
          <Route path="/powerrangers" element={<PowerRangers />} />
          <Route path="/powerrangersalies" element={<PowerRangersAlies />} />
          <Route path="/powerrangersenimies" element={<PowerRangersEnimies />} />
          <Route path="/romthespaceknight" element={<RomTheSpaceKnight />} />
          <Route path="/romthespaceknightalies" element={<RomTheSpaceKnightAlies />} />
          <Route path="/romthespaceknightenimies" element={<RomTheSpaceKnightEnimies />} />
          <Route path="/transformers" element={<Transformers />} />
          <Route path="/transformersalies" element={<TransformersAlies />} />
          <Route path="/transformersenimies" element={<TransformersEnimies />} />

          {/* Image Comics Subroutes */}
          <Route path="/invincible" element={<Invincible />} />
          <Route path="/invinciblealies" element={<InvincibleAlies />} />
          <Route path="/invincibleenimies" element={<InvincibleEnimies />} />
          <Route path="/savagedragon" element={<SavageDragon />} />
          <Route path="/savagedragonalies" element={<SavageDragonAlies />} />
          <Route path="/savagedragonenimies" element={<SavageDragonEnimies />} />
          <Route path="/shadownhawk" element={<Shadownhawk />} />
          <Route path="/shadownhawkalies" element={<ShadownhawkAlies />} />
          <Route path="/shadownhawkenimies" element={<ShadownhawkEnimies />} />
          <Route path="/spawn" element={<Spawn />} />
          <Route path="/spawnalies" element={<SpawnAlies />} />
          <Route path="/spawnenimies" element={<SpawnEnimies />} />
          <Route path="/witchblade" element={<Witchblade />} />
          <Route path="/witchbladealies" element={<WitchbladeAlies />} />
          <Route path="/witchbladeenimies" element={<WitchbladeEnimies />} />

          {/* Lucasfilm Subroutes */}
          <Route path="/indianajones" element={<IndianaJones />} />
          <Route path="/indianajonesalies" element={<IndianaJonesAlies />} />
          <Route path="/indianajonesenimies" element={<IndianaJonesEnimies />} />
          <Route path="/starwars-lucasfilm" element={<Starwars />} /> 
          <Route path="/starwars-lucasfilmalies" element={<StarwarsAlies />} />
          <Route path="/starwars-lucasfilmenimies" element={<StarwarsEnimies />} />

          {/* Mattel Subroutes */}
          <Route path="/blokbots" element={<BlokBots />} />
          <Route path="/blokbotsalies" element={<BlokBotsAlies />} />
          <Route path="/blokbotsenimies" element={<BlokBotsEnimies />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/dragonsalies" element={<DragonsAlies />} />
          <Route path="/dragonsenimies" element={<DragonsEnimies />} />
          <Route path="/HeMan" element={<HeMan />} />
          <Route path="/HeManalies" element={<HeManAlies />} />
          <Route path="/HeManenimies" element={<HeManEnimies />} />

          {/* Nintendo Subroutes */}
          <Route path="/donkeykong" element={<DonkeyKong />} />
          <Route path="/donkeykongalies" element={<DonkeyKongAlies />} />
          <Route path="/donkeykongenimies" element={<DonkeyKongEnimies />} />
          <Route path="/fzero" element={<FZero />} />
          <Route path="/fzeroalies" element={<FZeroAlies />} />
          <Route path="/fzeroenimies" element={<FZeroEnimies />} />
          <Route path="/kirby" element={<Kirby />} />
          <Route path="/kirbyalies" element={<KirbyAlies />} />
          <Route path="/kirbyenimies" element={<KirbyEnimies />} />
          <Route path="/mario" element={<Mario />} />
          <Route path="/marioalies" element={<MarioAlies />} />
          <Route path="/marioenimies" element={<MarioEnimies />} />
          <Route path="/metroid" element={<Metroid />} />
          <Route path="/metroidalies" element={<MetroidAlies />} />
          <Route path="/metroidenimies" element={<MetroidEnimies />} />
          <Route path="/pokémon" element={<Pokémon />} />
          <Route path="/pokémonalies" element={<PokémonAlies />} />
          <Route path="/pokémonenimies" element={<PokémonEnimies />} />
          <Route path="/starfox" element={<StarFox />} />
          <Route path="/starfoxalies" element={<StarFoxAlies />} />
          <Route path="/starfoxenimies" element={<StarFoxEnimies />} />
          <Route path="/zelda" element={<Zelda />} />
          <Route path="/zeldaalies" element={<ZeldaAlies />} />
          <Route path="/zeldaenimies" element={<ZeldaEnimies />} />

          {/* Sega Subroute */}
          <Route path="/sonic" element={<Sonic />} />
          <Route path="/sonicalies" element={<SonicAlies />} />
          <Route path="/sonicenimies" element={<SonicEnimies />} />

          {/* Toei Subroute */}
          <Route path="/kamenrider" element={<KamenRider />} />
          <Route path="/kamenrideralies" element={<KamenRiderAlies />} />
          <Route path="/kamenriderenimies" element={<KamenRiderEnimies />} />
          <Route path="/japspiderman" element={<JapSpiderMan />} />
          <Route path="/japspidermanalies" element={<JapSpiderManAlies />} />
          <Route path="/japspidermanenimies" element={<JapSpiderManEnimies />} />

          {/* Hanna Barbera Subroute */}
          <Route path="/scoobydoo" element={<ScoobyDoo />} />
          <Route path="/scoobydooalies" element={<ScoobyDooAlies />} />
          <Route path="/scoobydooenimies" element={<ScoobyDooEnimies />} />
          <Route path="/spaceghost" element={<SpaceGhost />} />
          <Route path="/spaceghostalies" element={<SpaceGhostAlies />} />
          <Route path="/spaceghostenimies" element={<SpaceGhostEnimies />} />

          {/* Dynamite Subroute */}
          <Route path="/robocop" element={<RoboCop />} />
          <Route path="/robocopalies" element={<RoboCopAlies />} />
          <Route path="/robocopenimies" element={<RoboCopEnimies />} />
          <Route path="/sonja" element={<Sonja />} />
          <Route path="/sonjaalies" element={<SonjaAlies />} />
          <Route path="/sonjaenimies" element={<SonjaEnimies />} />
          <Route path="/terminator" element={<Terminator />} />
          <Route path="/terminatoralies" element={<TerminatorAlies />} />
          <Route path="/terminatorenimies" element={<TerminatorEnimies />} />
          <Route path="/theboys" element={<TheBoys />} />
          <Route path="/theboysalies" element={<TheBoysAlies />} />
          <Route path="/theboysenimies" element={<TheBoysEnimies />} />

          {/* LEGO Subroute */}
          <Route path="/agents" element={<Agents />} />
          <Route path="/agentsalies" element={<AgentsAlies />} />
          <Route path="/agentsenimies" element={<AgentsEnimies />} />
          <Route path="/bionicle" element={<Bionicle />} />
          <Route path="/bioniclealies" element={<BionicleAlies />} />
          <Route path="/bionicleenimies" element={<BionicleEnimies />} />
          <Route path="/knightskingdom" element={<KnightsKingdom />} />
          <Route path="/knightskingdomalies" element={<KnightsKingdomAlies />} />
          <Route path="/knightskingdomenimies" element={<KnightsKingdomEnimies />} />
          <Route path="/ninjago" element={<Ninjago />} />
          <Route path="/ninjagoalies" element={<NinjagoAlies />} />
          <Route path="/ninjagoenimies" element={<NinjagoEnimies />} />

          {/* Other Medias Subroute */}
          <Route path="/halo" element={<Halo />} />
          <Route path="/haloalies" element={<HaloAlies />} />
          <Route path="/haloenimies" element={<HaloEnimies />} />
          <Route path="/judgedredd" element={<JudgeDredd />} />
          <Route path="/judgedreddalies" element={<JudgeDreddAlies />} />
          <Route path="/judgedreddenimies" element={<JudgeDreddEnimies />} />
          <Route path="/mortalkombat" element={<MortalKombat />} />
          <Route path="/mortalkombatalies" element={<MortalKombatAlies />} />
          <Route path="/mortalkombatenimies" element={<MortalKombatEnimies />} />
          <Route path="/rocketeer" element={<Rocketeer />} />
          <Route path="/rocketeeralies" element={<RocketeerAlies />} />
          <Route path="/rocketeerenimies" element={<RocketeerEnimies />} />
          <Route path="/thundercats" element={<Thundercats />} />
          <Route path="/thundercatsalies" element={<ThundercatsAlies />} />
          <Route path="/thundercatsenimies" element={<ThundercatsEnimies />} />
          <Route path="/tick" element={<Tick />} />
          <Route path="/tickalies" element={<TickAlies />} />
          <Route path="/tickenimies" element={<TickEnimies />} />
          <Route path="/tmnt" element={<TMNT />} />
          <Route path="/tmntalies" element={<TMNTAlies />} />
          <Route path="/tmntenimies" element={<TMNTEnimies />} />
          
        </Routes>
          </div>
        </div>
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
  );
}

export default App;