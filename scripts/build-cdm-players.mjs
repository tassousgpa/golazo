/**
 * Parse CDM 2026 squad list → cdm-players.jsx
 * Run: node scripts/build-cdm-players.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CDM_POS_OVERRIDES } from './cdm-position-overrides.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = 'C:\\Users\\assou\\OneDrive\\Documents\\Joueurs sélectionnés CDM 2026.txt';
const OUT = path.join(__dirname, '..', 'cdm-players.jsx');

const COUNTRY_MAP = {
  'Mexique': 'MEX', 'Afrique du Sud': 'RSA', 'Corée du Sud': 'KOR', 'République tchèque': 'CZE',
  'Canada': 'CAN', 'Bosnie-Herzégovine': 'BIH', 'Qatar': 'QAT', 'Suisse': 'SUI', 'Brésil': 'BRA',
  'Maroc': 'MAR', 'Haïti': 'HAI', 'Écosse': 'SCO', 'États-Unis': 'USA', 'Paraguay': 'PAR',
  'Australie': 'AUS', 'Turquie': 'TUR', 'Allemagne': 'GER', 'Curaçao': 'CUW', "Côte d'Ivoire": 'CIV',
  'Équateur': 'ECU', 'Pays-Bas': 'NED', 'Japon': 'JPN', 'Suède': 'SWE', 'Tunisie': 'TUN',
  'Belgique': 'BEL', 'Égypte': 'EGY', 'Iran': 'IRN', 'Nouvelle-Zélande': 'NZL', 'Espagne': 'ESP',
  'Cap-Vert': 'CPV', 'Arabie saoudite': 'KSA', 'Uruguay': 'URU', 'France': 'FRA', 'Sénégal': 'SEN',
  'Irak': 'IRQ', 'Norvège': 'NOR', 'Argentine': 'ARG', 'Algérie': 'ALG', 'Autriche': 'AUT',
  'Jordanie': 'JOR', 'Portugal': 'POR', 'République démocratique du Congo': 'COD', 'Ouzbékistan': 'UZB',
  'Colombie': 'COL', 'Angleterre': 'ENG', 'Croatie': 'CRO', 'Ghana': 'GHA', 'Panama': 'PAN',
};

const COUNTRY_META = {
  MEX: { name: 'Mexique', flag: ['#006847', '#ffffff', '#ce1126'], dir: 'v' },
  RSA: { name: 'Afrique du Sud', flag: ['#007749', '#ffb81c', '#000000'], dir: 'h' },
  KOR: { name: 'Corée du Sud', flag: ['#ffffff', '#cd2e3a', '#0047a0'], dir: 'h' },
  CZE: { name: 'Répub. tchèque', flag: ['#ffffff', '#d7141a', '#11457e'], dir: 'h' },
  CAN: { name: 'Canada', flag: ['#ff0000', '#ffffff', '#ff0000'], dir: 'v' },
  BIH: { name: 'Bosnie', flag: ['#002395', '#fecb00', '#002395'], dir: 'h' },
  QAT: { name: 'Qatar', flag: ['#8d1b3d', '#ffffff', '#8d1b3d'], dir: 'v' },
  SUI: { name: 'Suisse', flag: ['#ff0000', '#ffffff', '#ff0000'], dir: 'h' },
  BRA: { name: 'Brésil', flag: ['#0a9c4a', '#ffd400', '#0a9c4a'], dir: 'v' },
  MAR: { name: 'Maroc', flag: ['#c1272d', '#0a7b3e', '#c1272d'], dir: 'h' },
  HAI: { name: 'Haïti', flag: ['#00209f', '#d21034', '#00209f'], dir: 'h' },
  SCO: { name: 'Écosse', flag: ['#005eb8', '#ffffff', '#005eb8'], dir: 'h' },
  USA: { name: 'États-Unis', flag: ['#b22234', '#ffffff', '#3c3b6e'], dir: 'h' },
  PAR: { name: 'Paraguay', flag: ['#d52b1e', '#ffffff', '#0038a8'], dir: 'h' },
  AUS: { name: 'Australie', flag: ['#012169', '#ffffff', '#e4002b'], dir: 'h' },
  TUR: { name: 'Turquie', flag: ['#e30a17', '#ffffff', '#e30a17'], dir: 'h' },
  GER: { name: 'Allemagne', flag: ['#111111', '#dd0000', '#ffce00'], dir: 'h' },
  CUW: { name: 'Curaçao', flag: ['#002b7f', '#f9e814', '#002b7f'], dir: 'h' },
  CIV: { name: "Côte d'Ivoire", flag: ['#f77f00', '#ffffff', '#009e60'], dir: 'v' },
  ECU: { name: 'Équateur', flag: ['#ffd100', '#0033a0', '#ce1126'], dir: 'h' },
  NED: { name: 'Pays-Bas', flag: ['#c8102e', '#ffffff', '#21468b'], dir: 'h' },
  JPN: { name: 'Japon', flag: ['#ffffff', '#bc002d', '#ffffff'], dir: 'h' },
  SWE: { name: 'Suède', flag: ['#006aa7', '#fecc00', '#006aa7'], dir: 'h' },
  TUN: { name: 'Tunisie', flag: ['#e70013', '#ffffff', '#e70013'], dir: 'h' },
  BEL: { name: 'Belgique', flag: ['#111111', '#ffd90f', '#e8123b'], dir: 'v' },
  EGY: { name: 'Égypte', flag: ['#ce1126', '#ffffff', '#000000'], dir: 'h' },
  IRN: { name: 'Iran', flag: ['#239f40', '#ffffff', '#da0000'], dir: 'h' },
  NZL: { name: 'N.-Zélande', flag: ['#00247d', '#ffffff', '#cc142b'], dir: 'h' },
  ESP: { name: 'Espagne', flag: ['#c60b1e', '#ffc400', '#c60b1e'], dir: 'h' },
  CPV: { name: 'Cap-Vert', flag: ['#003893', '#ffffff', '#cf2027'], dir: 'h' },
  KSA: { name: 'Arabie saoudite', flag: ['#006c35', '#ffffff', '#006c35'], dir: 'h' },
  URU: { name: 'Uruguay', flag: ['#ffffff', '#0038a8', '#ffffff'], dir: 'h' },
  FRA: { name: 'France', flag: ['#1b3fa0', '#ffffff', '#e8123b'], dir: 'v' },
  SEN: { name: 'Sénégal', flag: ['#0a853f', '#ffe300', '#e31b23'], dir: 'v' },
  IRQ: { name: 'Irak', flag: ['#ce1126', '#ffffff', '#000000'], dir: 'h' },
  NOR: { name: 'Norvège', flag: ['#ba0c2f', '#00205b', '#ffffff'], dir: 'h' },
  ARG: { name: 'Argentine', flag: ['#6ca7e0', '#ffffff', '#6ca7e0'], dir: 'h' },
  ALG: { name: 'Algérie', flag: ['#006233', '#ffffff', '#d21034'], dir: 'v' },
  AUT: { name: 'Autriche', flag: ['#ed2939', '#ffffff', '#ed2939'], dir: 'h' },
  JOR: { name: 'Jordanie', flag: ['#007a3d', '#ffffff', '#000000'], dir: 'h' },
  POR: { name: 'Portugal', flag: ['#0a6b2d', '#d4202a', '#d4202a'], dir: 'v' },
  COD: { name: 'RD Congo', flag: ['#007fff', '#f7d618', '#ce1021'], dir: 'v' },
  UZB: { name: 'Ouzbékistan', flag: ['#1eb53a', '#ffffff', '#0099b5'], dir: 'h' },
  COL: { name: 'Colombie', flag: ['#fcd116', '#003893', '#ce1126'], dir: 'h' },
  ENG: { name: 'Angleterre', flag: ['#ffffff', '#cf142b', '#ffffff'], dir: 'h' },
  CRO: { name: 'Croatie', flag: ['#e8123b', '#ffffff', '#1b3fa0'], dir: 'h' },
  GHA: { name: 'Ghana', flag: ['#006b3f', '#fcd116', '#ce1126'], dir: 'h' },
  PAN: { name: 'Panama', flag: ['#ffffff', '#da121a', '#005293'], dir: 'h' },
};

const NATION_BASE = {
  FRA: 79, BRA: 78, ARG: 77, ENG: 77, ESP: 77, GER: 76, POR: 75, NED: 75, BEL: 74, CRO: 73,
  URU: 73, COL: 72, MEX: 70, USA: 71, MAR: 71, SEN: 70, JPN: 69, KOR: 68, SUI: 69, NOR: 72,
  SWE: 71, TUR: 70, EGY: 69, IRN: 68, ALG: 69, AUT: 70, ECU: 70, PAR: 68, CAN: 69, CZE: 69,
  AUS: 68, GHA: 68, TUN: 67, RSA: 66, BIH: 67, QAT: 66, SCO: 68, CIV: 70, KSA: 67, NZL: 62,
  HAI: 58, JOR: 63, IRQ: 64, CPV: 61, CUW: 64, COD: 67, UZB: 66, PAN: 65,
};

const POS_SECTION = {
  'Gardiens': 'GK',
  'Défenseurs': 'DEF',
  'Milieux': 'MID',
  'Attaquants': 'ATT',
  'Défenseurs / Milieux défensifs': 'DEF',
  'Milieux offensifs / Attaquants': 'ATT',
  'Milieux / Attaquants': null,
};

// Rebuild KNOWN with normalized keys
const KNOWN_RAW = {
  // France
  'kylian mbappé': { pos: 'ATT', ovr: 92 },
  'michael olise': { pos: 'ATT', ovr: 84 },
  'ousmane dembélé': { pos: 'ATT', ovr: 88 },
  'bradley barcola': { pos: 'ATT', ovr: 83 },
  'rayan cherki': { pos: 'ATT', ovr: 82 },
  'désiré doué': { pos: 'ATT', ovr: 81 },
  'jean-philippe mateta': { pos: 'ATT', ovr: 80 },
  'marcus thuram': { pos: 'ATT', ovr: 84 },
  'maghnes akliouche': { pos: 'ATT', ovr: 78 },
  'mike maignan': { pos: 'GK', ovr: 87 },
  'brice samba': { pos: 'GK', ovr: 80 },
  'robin risser': { pos: 'GK', ovr: 74 },
  'william saliba': { pos: 'DEF', ovr: 87 },
  'jules koundé': { pos: 'DEF', ovr: 86 },
  'dayot upamecano': { pos: 'DEF', ovr: 84 },
  'ibrahima konaté': { pos: 'DEF', ovr: 85 },
  'théo hernandez': { pos: 'DEF', ovr: 85 },
  'lucas hernandez': { pos: 'DEF', ovr: 84 },
  'malo gusto': { pos: 'DEF', ovr: 82 },
  'lucas digne': { pos: 'DEF', ovr: 80 },
  'maxence lacroix': { pos: 'DEF', ovr: 81 },
  "n'golo kanté": { pos: 'MID', ovr: 84 },
  'aurélien tchouaméni': { pos: 'MID', ovr: 86 },
  'adrien rabiot': { pos: 'MID', ovr: 83 },
  'manu koné': { pos: 'MID', ovr: 81 },
  'warren zaïre-emery': { pos: 'MID', ovr: 82 },
  // Brazil
  'alisson': { pos: 'GK', ovr: 89 },
  'ederson': { pos: 'GK', ovr: 87 },
  'weverton': { pos: 'GK', ovr: 80 },
  'marquinhos': { pos: 'DEF', ovr: 87 },
  'gabriel magalhães': { pos: 'DEF', ovr: 86 },
  'bremer': { pos: 'DEF', ovr: 85 },
  'danilo': { pos: 'DEF', ovr: 81 },
  'alex sandro': { pos: 'DEF', ovr: 79 },
  'bruno guimarães': { pos: 'MID', ovr: 86 },
  'casemiro': { pos: 'MID', ovr: 84 },
  'lucas paquetá': { pos: 'MID', ovr: 83 },
  'fabinho': { pos: 'MID', ovr: 82 },
  'vini jr.': { pos: 'ATT', ovr: 90 },
  'raphinha': { pos: 'ATT', ovr: 87 },
  'neymar jr.': { pos: 'ATT', ovr: 86 },
  'matheus cunha': { pos: 'ATT', ovr: 83 },
  'gabriel martinelli': { pos: 'ATT', ovr: 84 },
  'endrick': { pos: 'ATT', ovr: 79 },
  // England
  'harry kane': { pos: 'ATT', ovr: 90 },
  'bukayo saka': { pos: 'ATT', ovr: 88 },
  'jude bellingham': { pos: 'MID', ovr: 90 },
  'declan rice': { pos: 'MID', ovr: 87 },
  'eberechi eze': { pos: 'MID', ovr: 84 },
  'marcus rashford': { pos: 'ATT', ovr: 83 },
  'anthony gordon': { pos: 'ATT', ovr: 82 },
  'ollie watkins': { pos: 'ATT', ovr: 83 },
  'ivan toney': { pos: 'ATT', ovr: 82 },
  'noni madueke': { pos: 'ATT', ovr: 80 },
  'jordan pickford': { pos: 'GK', ovr: 84 },
  'john stones': { pos: 'DEF', ovr: 84 },
  'reece james': { pos: 'DEF', ovr: 83 },
  'marc guéhi': { pos: 'DEF', ovr: 83 },
  // Spain
  'rodri': { pos: 'MID', ovr: 90 },
  'pedri': { pos: 'MID', ovr: 88 },
  'lamine yamal': { pos: 'ATT', ovr: 87 },
  'nico williams': { pos: 'ATT', ovr: 86 },
  'dani olmo': { pos: 'ATT', ovr: 85 },
  'mikel merino': { pos: 'MID', ovr: 84 },
  'gavi': { pos: 'MID', ovr: 83 },
  'unai simón': { pos: 'GK', ovr: 86 },
  'david raya': { pos: 'GK', ovr: 85 },
  'aymeric laporte': { pos: 'DEF', ovr: 84 },
  'pau cubarsí': { pos: 'DEF', ovr: 83 },
  // Germany
  'florian wirtz': { pos: 'MID', ovr: 88 },
  'jamal musiala': { pos: 'MID', ovr: 89 },
  'leroy sané': { pos: 'ATT', ovr: 84 },
  'kai havertz': { pos: 'ATT', ovr: 84 },
  'joshua kimmich': { pos: 'MID', ovr: 87 },
  'antonio rüdiger': { pos: 'DEF', ovr: 86 },
  'manuel neuer': { pos: 'GK', ovr: 85 },
  'leon goretzka': { pos: 'MID', ovr: 82 },
  // Portugal
  'cristiano ronaldo': { pos: 'ATT', ovr: 86 },
  'rafael leão': { pos: 'ATT', ovr: 86 },
  'bruno fernandes': { pos: 'MID', ovr: 87 },
  'bernardo silva': { pos: 'MID', ovr: 87 },
  'vitinha': { pos: 'MID', ovr: 85 },
  'joão neves': { pos: 'MID', ovr: 84 },
  'rúben dias': { pos: 'DEF', ovr: 87 },
  'nuno mendes': { pos: 'DEF', ovr: 84 },
  'diogo costa': { pos: 'GK', ovr: 85 },
  // Netherlands — postes officiels CDM 2026 (Koeman / FIFA)
  'virgil van dijk': { pos: 'DEF', ovr: 89 },
  'nathan aké': { pos: 'DEF', ovr: 82 },
  'nathan ake': { pos: 'DEF', ovr: 82 },
  'denzel dumfries': { pos: 'DEF', ovr: 83 },
  'jorrel hato': { pos: 'DEF', ovr: 78 },
  'jurriën timber': { pos: 'DEF', ovr: 83 },
  'jurrien timber': { pos: 'DEF', ovr: 83 },
  'jan paul van hecke': { pos: 'DEF', ovr: 79 },
  'micky van de ven': { pos: 'DEF', ovr: 84 },
  'mark flekken': { pos: 'GK', ovr: 79 },
  'robin roefs': { pos: 'GK', ovr: 76 },
  'bart verbruggen': { pos: 'GK', ovr: 80 },
  'frenkie de jong': { pos: 'MID', ovr: 86 },
  'marten de roon': { pos: 'MID', ovr: 80 },
  'ryan gravenberch': { pos: 'MID', ovr: 82 },
  'teun koopmeiners': { pos: 'MID', ovr: 81 },
  'tijjani reijnders': { pos: 'MID', ovr: 83 },
  'guus til': { pos: 'MID', ovr: 78 },
  'quinten timber': { pos: 'MID', ovr: 77 },
  'mats wieffer': { pos: 'MID', ovr: 78 },
  'brian brobbey': { pos: 'ATT', ovr: 78 },
  'memphis depay': { pos: 'ATT', ovr: 80 },
  'cody gakpo': { pos: 'ATT', ovr: 84 },
  'justin kluivert': { pos: 'ATT', ovr: 79 },
  'noa lang': { pos: 'ATT', ovr: 80 },
  'donyell malen': { pos: 'ATT', ovr: 79 },
  'crysencio summerville': { pos: 'ATT', ovr: 77 },
  'wout weghorst': { pos: 'ATT', ovr: 78 },
  // Belgium
  'kevin de bruyne': { pos: 'MID', ovr: 88 },
  'romelu lukaku': { pos: 'ATT', ovr: 84 },
  'thibaut courtois': { pos: 'GK', ovr: 89 },
  'jérémy doku': { pos: 'ATT', ovr: 83 },
  'youri tielemans': { pos: 'MID', ovr: 82 },
  'axel witsel': { pos: 'MID', ovr: 80 },
  // Argentina
  'lionel messi': { pos: 'ATT', ovr: 90 },
  'lautaro martínez': { pos: 'ATT', ovr: 87 },
  'julián álvarez': { pos: 'ATT', ovr: 86 },
  'alexis mac allister': { pos: 'MID', ovr: 85 },
  'enzo fernández': { pos: 'MID', ovr: 85 },
  'rodrigo de paul': { pos: 'MID', ovr: 84 },
  'emiliano martínez': { pos: 'GK', ovr: 88 },
  'cristian romero': { pos: 'DEF', ovr: 85 },
  'lisandro martínez': { pos: 'DEF', ovr: 84 },
  // Morocco
  'achraf hakimi': { pos: 'DEF', ovr: 86 },
  'yassine bounou': { pos: 'GK', ovr: 84 },
  'sofyan amrabat': { pos: 'MID', ovr: 81 },
  'brahim diaz': { pos: 'ATT', ovr: 83 },
  // USA
  'christian pulisic': { pos: 'ATT', ovr: 84 },
  'tyler adams': { pos: 'MID', ovr: 79 },
  'weston mckennie': { pos: 'MID', ovr: 80 },
  'matt turner': { pos: 'GK', ovr: 78 },
  'sergiño dest': { pos: 'DEF', ovr: 79 },
  // Mexico
  'santiago giménez': { pos: 'ATT', ovr: 81 },
  'raúl jiménez': { pos: 'ATT', ovr: 79 },
  'edson álvarez': { pos: 'MID', ovr: 80 },
  'guillermo ochoa': { pos: 'GK', ovr: 76 },
  // Senegal
  'sadio mané': { pos: 'ATT', ovr: 85 },
  'nicolas jackson': { pos: 'ATT', ovr: 82 },
  'kalidou koulibaly': { pos: 'DEF', ovr: 83 },
  'edouard mendy': { pos: 'GK', ovr: 84 },
  // Egypt
  'mohamed salah': { pos: 'ATT', ovr: 89 },
  'omar marmoush': { pos: 'ATT', ovr: 82 },
  // Norway
  'erling braut haaland': { pos: 'ATT', ovr: 91 },
  'martin ødegaard': { pos: 'MID', ovr: 88 },
  'alexander sørloth': { pos: 'ATT', ovr: 82 },
  // Sweden
  'alexander isak': { pos: 'ATT', ovr: 86 },
  'viktor gyökeres': { pos: 'ATT', ovr: 84 },
  'lucas bergvall': { pos: 'MID', ovr: 80 },
  // Croatia
  'luka modrić': { pos: 'MID', ovr: 86 },
  'mateo kovačić': { pos: 'MID', ovr: 84 },
  'joško gvardiol': { pos: 'DEF', ovr: 85 },
  // Colombia
  'luis díaz': { pos: 'ATT', ovr: 85 },
  'james rodríguez': { pos: 'MID', ovr: 81 },
  'jhon córdoba': { pos: 'ATT', ovr: 80 },
  // Uruguay
  'darwin núñez': { pos: 'ATT', ovr: 83 },
  'federico valverde': { pos: 'MID', ovr: 88 },
  'ronald araujo': { pos: 'DEF', ovr: 85 },
  // Japan
  'takefusa kubo': { pos: 'ATT', ovr: 81 },
  'kaoru mitoma': { pos: 'ATT', ovr: 82 },
  'wataru endo': { pos: 'MID', ovr: 79 },
  'kim minjae': { pos: 'DEF', ovr: 84 },
  'son heungmin': { pos: 'ATT', ovr: 86 },
  'lee kangin': { pos: 'MID', ovr: 81 },
  // Korea - kim minjae is KOR in file? Actually Kim Minjae is in Korea section
  // Ecuador
  'moisés caicedo': { pos: 'MID', ovr: 85 },
  'willian pacho': { pos: 'DEF', ovr: 83 },
  'kendry páez': { pos: 'MID', ovr: 78 },
  'enner valencia': { pos: 'ATT', ovr: 79 },
  'pervis estupiñán': { pos: 'DEF', ovr: 80 },
  'piero hincapié': { pos: 'DEF', ovr: 81 },
  // Turkey
  'hakan çalhanoğlu': { pos: 'MID', ovr: 84 },
  'arda güler': { pos: 'MID', ovr: 80 },
  'kenan yıldız': { pos: 'ATT', ovr: 79 },
  // Algeria
  'riyad mahrez': { pos: 'ATT', ovr: 83 },
  'amine gouiri': { pos: 'ATT', ovr: 80 },
  // Ivory Coast
  'nicolas pépé': { pos: 'ATT', ovr: 80 },
  'franck kessié': { pos: 'MID', ovr: 81 },
  'evan ndicka': { pos: 'DEF', ovr: 83 },
  // Ghana
  'thomas partey': { pos: 'MID', ovr: 82 },
  'antoine semenyo': { pos: 'ATT', ovr: 78 },
  'iñaki williams': { pos: 'ATT', ovr: 81 },
  // Scotland
  'scott mctominay': { pos: 'MID', ovr: 82 },
  'andy robertson': { pos: 'DEF', ovr: 83 },
  // Canada
  'alphonso davies': { pos: 'DEF', ovr: 84 },
  'jonathan david': { pos: 'ATT', ovr: 81 },
  // Czech
  'patrik schick': { pos: 'ATT', ovr: 81 },
  'tomáš souček': { pos: 'MID', ovr: 82 },
  // Switzerland mixed
  'granit xhaka': { pos: 'MID', ovr: 83 },
  'breel embolo': { pos: 'ATT', ovr: 80 },
  'dan ndoye': { pos: 'ATT', ovr: 79 },
  'manuel akanji': { pos: 'DEF', ovr: 83 },
  'gregor kobel': { pos: 'GK', ovr: 85 },
  // Iran
  'mehdi taremi': { pos: 'ATT', ovr: 80 },
  'sardar azmoun': { pos: 'ATT', ovr: 79 },
  // NZ
  'chris wood': { pos: 'ATT', ovr: 77 },
  // COD
  'yoane wissa': { pos: 'ATT', ovr: 79 },
  'aaron wan-bissaka': { pos: 'DEF', ovr: 78 },
  // Uzbekistan
  'abduqodir husanov': { pos: 'DEF', ovr: 76 },
  // Australia
  'harry souttar': { pos: 'DEF', ovr: 76 },
  // Paraguay
  'miguel almirón': { pos: 'ATT', ovr: 79 },
  // Haiti
  'duckens nazon': { pos: 'ATT', ovr: 72 },
};
const KNOWN = Object.fromEntries(Object.entries(KNOWN_RAW).map(([k, v]) => [norm(k), v]));

function norm(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/å/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ğ/g, 'g')
    .trim();
}

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function rarityFromOvr(ovr) {
  if (ovr >= 88) return 'legendaire';
  if (ovr >= 82) return 'epique';
  if (ovr >= 75) return 'rare';
  return 'commun';
}

function genStats(pos, ovr, seed) {
  const h = hash(seed);
  const j = (base, spread = 6) => Math.max(1, Math.min(99, Math.round(base + ((h >> (spread * 2)) % spread) - Math.floor(spread / 2))));
  if (pos === 'GK') return { vit: j(ovr - 8, 8), tir: 25, dri: 35, pas: j(ovr - 4, 8), phy: j(ovr - 2, 6), def: j(ovr + 3, 5) };
  if (pos === 'DEF') return { vit: j(ovr, 6), tir: j(ovr - 18, 8), dri: j(ovr - 6, 8), pas: j(ovr - 2, 6), phy: j(ovr + 2, 6), def: j(ovr + 4, 4) };
  if (pos === 'MID') return { vit: j(ovr, 6), tir: j(ovr - 2, 8), dri: j(ovr + 1, 6), pas: j(ovr + 3, 5), phy: j(ovr, 6), def: j(ovr - 6, 8) };
  return { vit: j(ovr + 2, 6), tir: j(ovr + 3, 5), dri: j(ovr + 2, 6), pas: j(ovr, 6), phy: j(ovr, 6), def: j(ovr - 18, 8) };
}

function tuneStatsToOvr(p, target) {
  const keys = p.pos === 'GK' ? ['def', 'pas', 'phy'] : p.pos === 'DEF' ? ['def', 'phy', 'pas'] : p.pos === 'MID' ? ['pas', 'dri', 'vit'] : ['tir', 'dri', 'vit'];
  for (let n = 0; n < 24; n++) {
    const cur = overall(p);
    if (cur === target) break;
    const k = keys[n % keys.length];
    p.stats[k] = Math.max(1, Math.min(99, p.stats[k] + (target > cur ? 1 : -1)));
    p.ovr = overall(p);
  }
  if (KNOWN[norm(p.name)]) p.ovr = KNOWN[norm(p.name)].ovr;
  else p.ovr = overall(p);
}

function overall(p) {
  const s = p.stats;
  if (p.pos === 'GK') return s.def;
  const w = {
    DEF: { vit: 1, tir: 0.4, dri: 0.6, pas: 1, phy: 1.3, def: 1.6 },
    MID: { vit: 1, tir: 0.9, dri: 1.2, pas: 1.4, phy: 1, def: 0.9 },
    ATT: { vit: 1.2, tir: 1.5, dri: 1.3, pas: 0.9, phy: 0.9, def: 0.4 },
  }[p.pos];
  const keys = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
  let num = 0, den = 0;
  for (const k of keys) { num += s[k] * w[k]; den += w[k]; }
  return Math.round(num / den);
}

function priceFrom(p) {
  const rMul = { commun: 1, rare: 1.35, epique: 1.8, legendaire: 2.6 }[p.rarity];
  let price = Math.round((p.ovr * 1.6 + (p.ovr - 60) * (p.ovr - 60) * 0.05) * rMul / 5) * 5;
  if (price < 15) price = 15;
  return price;
}

function resolvePos(name, section, country) {
  const n = norm(name);
  if (CDM_POS_OVERRIDES[n]) return CDM_POS_OVERRIDES[n];
  if (KNOWN[n]?.pos) return KNOWN[n].pos;
  return inferPos(name, section, country);
}

function inferPos(name, section, country) {
  const k = norm(name);
  if (section === 'GK' || section === 'DEF' || section === 'MID' || section === 'ATT') return section;
  // mixed sections — keyword heuristics
  const n = k;
  if (n.includes('keeper') || n.endsWith(' gk')) return 'GK';
  const attHints = ['striker', 'forward', 'st ', ' cf', 'lw', 'rw'];
  if (KNOWN[k]?.pos) return KNOWN[k].pos;
  // default by name patterns in mixed lists
  const likelyAtt = ['embolo', 'okaf', 'ndoye', 'itten', 'vargas', 'amdouni', 'depay', 'gakpo', 'malen', 'weghorst', 'lang', 'brobbey', 'summerville', 'maeda', 'ueda', 'doan', 'kubo', 'guler', 'yildiz', 'akturkoglu', 'gyokeres', 'isak', 'elanga', 'haaland', 'sorloth', 'larsen', 'salih', 'afif', 'almoez', 'mane', 'jackson', 'ndiaye', 'sarr', 'diao', 'mbappe', 'kane', 'saka', 'rashford', 'ronaldo', 'leao', 'neymar', 'vini', 'raphinha', 'messi', 'lautaro', 'diaz', 'nunez', 'foster', 'wood', 'jimenez', 'gimenez', 'pulisc', 'david', 'larin', 'schick', 'hlozek', 'wissa', 'bakambu', 'mayele', 'banza', 'taremi', 'salah', 'marmoush', 'mahrez', 'gouiri', 'pepe', 'dembele', 'thuram', 'olise', 'cherki', 'yamal', 'williams', 'torres', 'iglesias', 'oyarzabal', 'woltemade', 'beier', 'undav', 'sané', 'havertz', 'musiala', 'wirtz', 'bellingham', 'eze', 'gordon', 'watkins', 'toney', 'madueke', 'arnold', 'gregoritsch', 'kalajdzic'];
  const likelyDef = ['van dijk', 'dias', 'saliba', 'rudiger', 'gvardiol', 'hakimi', 'davies', 'robertson', 'koulibaly', 'ndicka', 'pacho', 'hincapie', 'kim minjae', 'akanji', 'elvedi', 'söyüncü', 'demiral', 'kabak', 'araujo', 'gimenez', 'cucurella', 'laporte', 'cubarsi', 'timber', 'van de ven', 'dumfries', 'kounde', 'konate', 'hernandez', 'upamecano', 'stones', 'guéhi', 'james', 'konsa', 'wan-bissaka', 'mbemba', 'masuaku'];
  const likelyGk = ['maignan', 'courtois', 'alisson', 'ederson', 'neuer', 'pickford', 'simon', 'raya', 'martinez', 'oblak', 'courtois', 'kobel', 'verbruggen', 'flekken', 'turner', 'bounou', 'mendy', 'lafont', 'costa', 'sa', 'onana'];
  for (const x of likelyGk) if (n.includes(x)) return 'GK';
  for (const x of likelyDef) if (n.includes(x)) return 'DEF';
  for (const x of likelyAtt) if (n.includes(x)) return 'ATT';
  return 'MID';
}

function inferOvr(name, pos, country) {
  const k = norm(name);
  if (KNOWN[k]) return KNOWN[k].ovr;
  const base = NATION_BASE[country] || 65;
  const posAdj = { GK: 0, DEF: -1, MID: 0, ATT: 1 }[pos] || 0;
  const h = hash(name + country);
  const variance = (h % 11) - 5;
  let ovr = base + posAdj + variance;
  // starters tend higher within squad — slight boost for first names in list handled by variance
  return Math.max(58, Math.min(92, ovr));
}

function parseFile(text) {
  const lines = text.split(/\r?\n/);
  let country = null;
  let section = null;
  const raw = [];

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (COUNTRY_MAP[t]) { country = COUNTRY_MAP[t]; section = null; continue; }
    if (t.startsWith('(') && t.endsWith('.)')) continue;
    if (POS_SECTION[t] !== undefined) { section = POS_SECTION[t]; continue; }
    if (!country) continue;
    // skip notes in parentheses only lines
    if (t.startsWith('(')) continue;
    let name = t.replace(/\s*\([^)]*\)\s*$/, '').trim();
    if (!name || name.length < 2) continue;
    raw.push({ name, country, section });
  }
  return raw;
}

function buildPlayers(raw) {
  const seen = new Set();
  const players = [];
  let pid = 0;

  for (const r of raw) {
    const key = norm(r.name) + '|' + r.country;
    if (seen.has(key)) continue;
    seen.add(key);

    const pos = resolvePos(r.name, r.section, r.country);
    const ovrTarget = inferOvr(r.name, pos, r.country);
    const stats = genStats(pos, ovrTarget, r.name + r.country);
    const p = {
      id: 'p' + (++pid),
      name: r.name,
      country: r.country,
      pos,
      rarity: rarityFromOvr(ovrTarget),
      stats,
      ovr: 0,
    };
    tuneStatsToOvr(p, ovrTarget);
    p.rarity = rarityFromOvr(p.ovr);
    p.price = priceFrom(p);
    players.push(p);
  }
  return players;
}

const DEMO_SQUAD_NAMES = {
  m1: { gk: 'Mike Maignan', field: ['William Saliba', 'Aurélien Tchouaméni', 'Kylian Mbappé'], bench: ['Ousmane Dembélé', 'Jules Koundé'] },
  m2: { gk: 'Alisson', field: ['Marquinhos', 'Bruno Guimarães', 'Vini Jr.'], bench: ['Gabriel Magalhães', 'Raphinha'] },
  m3: { gk: 'Emiliano Martínez', field: ['Cristian Romero', 'Enzo Fernández', 'Lionel Messi'], bench: ['Lisandro Martínez', 'Julián Álvarez'] },
  m4: { gk: 'Thibaut Courtois', field: ['Virgil van Dijk', 'Kevin De Bruyne', 'Erling Braut Haaland'], bench: ['Jeremy Doku', 'Romelu Lukaku'] },
};

function buildDemoSquads(players) {
  const byNorm = new Map(players.map(p => [norm(p.name), p]));
  const squads = {};
  for (const [mid, spec] of Object.entries(DEMO_SQUAD_NAMES)) {
    const find = (n) => {
      const p = byNorm.get(norm(n));
      if (!p) throw new Error(`Demo player not found: ${n}`);
      return p.id;
    };
    squads[mid] = {
      gk: find(spec.gk),
      field: spec.field.map(find),
      bench: spec.bench.map(find),
    };
  }
  return squads;
}

const text = fs.readFileSync(SRC, 'utf8');
const raw = parseFile(text);
const players = buildPlayers(raw);
const squads = buildDemoSquads(players);

console.log(`Parsed ${raw.length} entries → ${players.length} unique players`);

const out = `// cdm-players.jsx — AUTO-GENERATED from CDM 2026 squad list. Do not edit by hand.
// Regenerate: node scripts/build-cdm-players.mjs

const CDM_COUNTRIES = ${JSON.stringify(COUNTRY_META, null, 2)};

const CDM_PLAYERS = ${JSON.stringify(players, null, 2)};

const CDM_DEMO_SQUADS = ${JSON.stringify(squads, null, 2)};

const CDM_DEMO_ROLES = {
  m1: { corner: null, penalty: null, duelAtt: null, duelDef: null },
  m2: { corner: null, penalty: null, duelAtt: null, duelDef: null },
  m3: { corner: null, penalty: null, duelAtt: null, duelDef: null },
  m4: { corner: null, penalty: null, duelAtt: null, duelDef: null },
};

// resolve roles from squad outfield
function _cdmResolveRoles(squads, byId) {
  const roles = {};
  for (const [mid, sq] of Object.entries(squads)) {
    const ids = [...sq.field, ...sq.bench];
    const pls = ids.map(id => byId(id)).filter(Boolean);
    const att = pls.filter(p => p.pos === 'ATT').sort((a, b) => b.ovr - a.ovr)[0] || pls[0];
    const def = pls.filter(p => p.pos === 'DEF').sort((a, b) => b.ovr - a.ovr)[0] || pls[0];
    const midP = pls.filter(p => p.pos === 'MID').sort((a, b) => b.stats.pas - a.stats.pas)[0] || pls[0];
    roles[mid] = {
      corner: midP?.id || pls[0]?.id,
      penalty: att?.id || pls[0]?.id,
      duelAtt: att?.id || pls[0]?.id,
      duelDef: def?.id || pls[0]?.id,
    };
  }
  return roles;
}

Object.assign(window, { CDM_COUNTRIES, CDM_PLAYERS, CDM_DEMO_SQUADS, CDM_DEMO_ROLES, _cdmResolveRoles });
`;

fs.writeFileSync(OUT, out, 'utf8');
console.log('Wrote', OUT);
