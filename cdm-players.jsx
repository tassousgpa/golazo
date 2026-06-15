// cdm-players.jsx — AUTO-GENERATED from CDM 2026 squad list. Do not edit by hand.
// Regenerate: node scripts/build-cdm-players.mjs

const CDM_COUNTRIES = {
  "MEX": {
    "name": "Mexique",
    "flag": [
      "#006847",
      "#ffffff",
      "#ce1126"
    ],
    "dir": "v"
  },
  "RSA": {
    "name": "Afrique du Sud",
    "flag": [
      "#007749",
      "#ffb81c",
      "#000000"
    ],
    "dir": "h"
  },
  "KOR": {
    "name": "Corée du Sud",
    "flag": [
      "#ffffff",
      "#cd2e3a",
      "#0047a0"
    ],
    "dir": "h"
  },
  "CZE": {
    "name": "Répub. tchèque",
    "flag": [
      "#ffffff",
      "#d7141a",
      "#11457e"
    ],
    "dir": "h"
  },
  "CAN": {
    "name": "Canada",
    "flag": [
      "#ff0000",
      "#ffffff",
      "#ff0000"
    ],
    "dir": "v"
  },
  "BIH": {
    "name": "Bosnie",
    "flag": [
      "#002395",
      "#fecb00",
      "#002395"
    ],
    "dir": "h"
  },
  "QAT": {
    "name": "Qatar",
    "flag": [
      "#8d1b3d",
      "#ffffff",
      "#8d1b3d"
    ],
    "dir": "v"
  },
  "SUI": {
    "name": "Suisse",
    "flag": [
      "#ff0000",
      "#ffffff",
      "#ff0000"
    ],
    "dir": "h"
  },
  "BRA": {
    "name": "Brésil",
    "flag": [
      "#0a9c4a",
      "#ffd400",
      "#0a9c4a"
    ],
    "dir": "v"
  },
  "MAR": {
    "name": "Maroc",
    "flag": [
      "#c1272d",
      "#0a7b3e",
      "#c1272d"
    ],
    "dir": "h"
  },
  "HAI": {
    "name": "Haïti",
    "flag": [
      "#00209f",
      "#d21034",
      "#00209f"
    ],
    "dir": "h"
  },
  "SCO": {
    "name": "Écosse",
    "flag": [
      "#005eb8",
      "#ffffff",
      "#005eb8"
    ],
    "dir": "h"
  },
  "USA": {
    "name": "États-Unis",
    "flag": [
      "#b22234",
      "#ffffff",
      "#3c3b6e"
    ],
    "dir": "h"
  },
  "PAR": {
    "name": "Paraguay",
    "flag": [
      "#d52b1e",
      "#ffffff",
      "#0038a8"
    ],
    "dir": "h"
  },
  "AUS": {
    "name": "Australie",
    "flag": [
      "#012169",
      "#ffffff",
      "#e4002b"
    ],
    "dir": "h"
  },
  "TUR": {
    "name": "Turquie",
    "flag": [
      "#e30a17",
      "#ffffff",
      "#e30a17"
    ],
    "dir": "h"
  },
  "GER": {
    "name": "Allemagne",
    "flag": [
      "#111111",
      "#dd0000",
      "#ffce00"
    ],
    "dir": "h"
  },
  "CUW": {
    "name": "Curaçao",
    "flag": [
      "#002b7f",
      "#f9e814",
      "#002b7f"
    ],
    "dir": "h"
  },
  "CIV": {
    "name": "Côte d'Ivoire",
    "flag": [
      "#f77f00",
      "#ffffff",
      "#009e60"
    ],
    "dir": "v"
  },
  "ECU": {
    "name": "Équateur",
    "flag": [
      "#ffd100",
      "#0033a0",
      "#ce1126"
    ],
    "dir": "h"
  },
  "NED": {
    "name": "Pays-Bas",
    "flag": [
      "#c8102e",
      "#ffffff",
      "#21468b"
    ],
    "dir": "h"
  },
  "JPN": {
    "name": "Japon",
    "flag": [
      "#ffffff",
      "#bc002d",
      "#ffffff"
    ],
    "dir": "h"
  },
  "SWE": {
    "name": "Suède",
    "flag": [
      "#006aa7",
      "#fecc00",
      "#006aa7"
    ],
    "dir": "h"
  },
  "TUN": {
    "name": "Tunisie",
    "flag": [
      "#e70013",
      "#ffffff",
      "#e70013"
    ],
    "dir": "h"
  },
  "BEL": {
    "name": "Belgique",
    "flag": [
      "#111111",
      "#ffd90f",
      "#e8123b"
    ],
    "dir": "v"
  },
  "EGY": {
    "name": "Égypte",
    "flag": [
      "#ce1126",
      "#ffffff",
      "#000000"
    ],
    "dir": "h"
  },
  "IRN": {
    "name": "Iran",
    "flag": [
      "#239f40",
      "#ffffff",
      "#da0000"
    ],
    "dir": "h"
  },
  "NZL": {
    "name": "N.-Zélande",
    "flag": [
      "#00247d",
      "#ffffff",
      "#cc142b"
    ],
    "dir": "h"
  },
  "ESP": {
    "name": "Espagne",
    "flag": [
      "#c60b1e",
      "#ffc400",
      "#c60b1e"
    ],
    "dir": "h"
  },
  "CPV": {
    "name": "Cap-Vert",
    "flag": [
      "#003893",
      "#ffffff",
      "#cf2027"
    ],
    "dir": "h"
  },
  "KSA": {
    "name": "Arabie saoudite",
    "flag": [
      "#006c35",
      "#ffffff",
      "#006c35"
    ],
    "dir": "h"
  },
  "URU": {
    "name": "Uruguay",
    "flag": [
      "#ffffff",
      "#0038a8",
      "#ffffff"
    ],
    "dir": "h"
  },
  "FRA": {
    "name": "France",
    "flag": [
      "#1b3fa0",
      "#ffffff",
      "#e8123b"
    ],
    "dir": "v"
  },
  "SEN": {
    "name": "Sénégal",
    "flag": [
      "#0a853f",
      "#ffe300",
      "#e31b23"
    ],
    "dir": "v"
  },
  "IRQ": {
    "name": "Irak",
    "flag": [
      "#ce1126",
      "#ffffff",
      "#000000"
    ],
    "dir": "h"
  },
  "NOR": {
    "name": "Norvège",
    "flag": [
      "#ba0c2f",
      "#00205b",
      "#ffffff"
    ],
    "dir": "h"
  },
  "ARG": {
    "name": "Argentine",
    "flag": [
      "#6ca7e0",
      "#ffffff",
      "#6ca7e0"
    ],
    "dir": "h"
  },
  "ALG": {
    "name": "Algérie",
    "flag": [
      "#006233",
      "#ffffff",
      "#d21034"
    ],
    "dir": "v"
  },
  "AUT": {
    "name": "Autriche",
    "flag": [
      "#ed2939",
      "#ffffff",
      "#ed2939"
    ],
    "dir": "h"
  },
  "JOR": {
    "name": "Jordanie",
    "flag": [
      "#007a3d",
      "#ffffff",
      "#000000"
    ],
    "dir": "h"
  },
  "POR": {
    "name": "Portugal",
    "flag": [
      "#0a6b2d",
      "#d4202a",
      "#d4202a"
    ],
    "dir": "v"
  },
  "COD": {
    "name": "RD Congo",
    "flag": [
      "#007fff",
      "#f7d618",
      "#ce1021"
    ],
    "dir": "v"
  },
  "UZB": {
    "name": "Ouzbékistan",
    "flag": [
      "#1eb53a",
      "#ffffff",
      "#0099b5"
    ],
    "dir": "h"
  },
  "COL": {
    "name": "Colombie",
    "flag": [
      "#fcd116",
      "#003893",
      "#ce1126"
    ],
    "dir": "h"
  },
  "ENG": {
    "name": "Angleterre",
    "flag": [
      "#ffffff",
      "#cf142b",
      "#ffffff"
    ],
    "dir": "h"
  },
  "CRO": {
    "name": "Croatie",
    "flag": [
      "#e8123b",
      "#ffffff",
      "#1b3fa0"
    ],
    "dir": "h"
  },
  "GHA": {
    "name": "Ghana",
    "flag": [
      "#006b3f",
      "#fcd116",
      "#ce1126"
    ],
    "dir": "h"
  },
  "PAN": {
    "name": "Panama",
    "flag": [
      "#ffffff",
      "#da121a",
      "#005293"
    ],
    "dir": "h"
  }
};

const CDM_PLAYERS = [
  {
    "id": "p1",
    "name": "Raúl Rangel",
    "country": "MEX",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 63,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p2",
    "name": "Guillermo Ochoa",
    "country": "MEX",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 71,
      "tir": 25,
      "dri": 35,
      "pas": 73,
      "phy": 72,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p3",
    "name": "Carlos Acevedo",
    "country": "MEX",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 66,
      "phy": 71,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p4",
    "name": "Israel Reyes",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 53,
      "dri": 65,
      "pas": 71,
      "phy": 75,
      "def": 76
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p5",
    "name": "Jesús Gallardo",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 54,
      "dri": 66,
      "pas": 67,
      "phy": 71,
      "def": 72
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p6",
    "name": "Jorge Sánchez",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 51,
      "dri": 63,
      "pas": 70,
      "phy": 74,
      "def": 73
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p7",
    "name": "César Montes",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 56,
      "dri": 68,
      "pas": 69,
      "phy": 73,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p8",
    "name": "Johan Vásquez",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 50,
      "dri": 62,
      "pas": 63,
      "phy": 67,
      "def": 69
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p9",
    "name": "Mateo Chávez",
    "country": "MEX",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 55,
      "dri": 67,
      "pas": 70,
      "phy": 74,
      "def": 75
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p10",
    "name": "Erik Lira",
    "country": "MEX",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 74,
      "dri": 75,
      "pas": 80,
      "phy": 72,
      "def": 70
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p11",
    "name": "Luis Romo",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 70,
      "pas": 75,
      "phy": 69,
      "def": 65
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p12",
    "name": "Obed Vargas",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 65,
      "dri": 73,
      "pas": 74,
      "phy": 72,
      "def": 61
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p13",
    "name": "Brian Gutiérrez",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 68,
      "dri": 69,
      "pas": 69,
      "phy": 68,
      "def": 64
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p14",
    "name": "Orbelín Pineda",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 71,
      "pas": 78,
      "phy": 67,
      "def": 62
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p15",
    "name": "Edson Álvarez",
    "country": "MEX",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 81,
      "dri": 79,
      "pas": 83,
      "phy": 78,
      "def": 77
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p16",
    "name": "Gilberto Mora",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 73,
      "dri": 70,
      "pas": 77,
      "phy": 69,
      "def": 69
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p17",
    "name": "César Huerta",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 72,
      "pas": 71,
      "phy": 71,
      "def": 66
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p18",
    "name": "Álvaro Fidalgo",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 74,
      "dri": 72,
      "pas": 76,
      "phy": 71,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p19",
    "name": "Luis Chávez",
    "country": "MEX",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 73,
      "dri": 74,
      "pas": 77,
      "phy": 73,
      "def": 69
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p20",
    "name": "Roberto Alvarado",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 80,
      "dri": 75,
      "pas": 71,
      "phy": 71,
      "def": 55
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p21",
    "name": "Alexis Vega",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 75,
      "dri": 75,
      "pas": 74,
      "phy": 74,
      "def": 56
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p22",
    "name": "Julián Quiñones",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 74,
      "dri": 67,
      "pas": 64,
      "phy": 64,
      "def": 47
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p23",
    "name": "Santiago Giménez",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 84,
      "dri": 82,
      "pas": 79,
      "phy": 79,
      "def": 66
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p24",
    "name": "Guillermo Martínez",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 73,
      "dri": 73,
      "pas": 73,
      "phy": 73,
      "def": 49
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p25",
    "name": "Armando González",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 71,
      "dri": 68,
      "pas": 65,
      "phy": 65,
      "def": 48
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p26",
    "name": "Raúl Jiménez",
    "country": "MEX",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 84,
      "dri": 80,
      "pas": 77,
      "phy": 77,
      "def": 61
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p27",
    "name": "Ronwen Williams",
    "country": "RSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 53,
      "tir": 25,
      "dri": 35,
      "pas": 54,
      "phy": 61,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p28",
    "name": "Ricardo Goss",
    "country": "RSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 55,
      "phy": 59,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p29",
    "name": "Sipho Chaine",
    "country": "RSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 64,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p30",
    "name": "Nkosinathi Sibisi",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 39,
      "dri": 51,
      "pas": 58,
      "phy": 62,
      "def": 69
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p31",
    "name": "Olwethu Makhanya",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 48,
      "dri": 60,
      "pas": 61,
      "phy": 65,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p32",
    "name": "Samukele Kabini",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 38,
      "dri": 50,
      "pas": 59,
      "phy": 63,
      "def": 67
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p33",
    "name": "Khulumani Ndamane",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 49,
      "dri": 61,
      "pas": 63,
      "phy": 67,
      "def": 68
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p34",
    "name": "Bradley Cross",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 44,
      "dri": 56,
      "pas": 63,
      "phy": 68,
      "def": 68
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p35",
    "name": "Mbekezeli Mbokazi",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 68,
      "def": 75
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p36",
    "name": "Khuliso Mudau",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 53,
      "dri": 65,
      "pas": 65,
      "phy": 69,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p37",
    "name": "Thabang Matuludi",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 49,
      "dri": 61,
      "pas": 60,
      "phy": 65,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p38",
    "name": "Ime Okon",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 46,
      "dri": 58,
      "pas": 63,
      "phy": 68,
      "def": 72
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p39",
    "name": "Aubrey Modiba",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 68,
      "def": 73
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p40",
    "name": "Kamogelo Sebelebele",
    "country": "RSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 43,
      "dri": 55,
      "pas": 62,
      "phy": 67,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p41",
    "name": "Teboho Mokoena",
    "country": "RSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 61,
      "dri": 64,
      "pas": 72,
      "phy": 61,
      "def": 57
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p42",
    "name": "Sphephelo Sithole",
    "country": "RSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 68,
      "dri": 66,
      "pas": 72,
      "phy": 65,
      "def": 64
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p43",
    "name": "Thalente Mbatha",
    "country": "RSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 58,
      "dri": 66,
      "pas": 67,
      "phy": 62,
      "def": 54
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p44",
    "name": "Jayden Adams",
    "country": "RSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 71,
      "pas": 73,
      "phy": 70,
      "def": 67
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p45",
    "name": "Oswin Appollis",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 73,
      "dri": 71,
      "pas": 68,
      "phy": 68,
      "def": 54
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p46",
    "name": "Relebohile Mofokeng",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 67,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 51
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p47",
    "name": "Themba Zwane",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 74,
      "pas": 72,
      "phy": 72,
      "def": 56
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p48",
    "name": "Evidence Makgopa",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 74,
      "dri": 73,
      "pas": 74,
      "phy": 74,
      "def": 52
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p49",
    "name": "Lyle Foster",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 72,
      "dri": 70,
      "pas": 65,
      "phy": 65,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p50",
    "name": "Iqraam Rayners",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 65,
      "dri": 64,
      "pas": 62,
      "phy": 62,
      "def": 46
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p51",
    "name": "Tshepang Moremi",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 68,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 46
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p52",
    "name": "Thapelo Maseko",
    "country": "RSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 67,
      "dri": 69,
      "pas": 69,
      "phy": 69,
      "def": 50
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p53",
    "name": "Kim Seunggyu",
    "country": "KOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 66,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p54",
    "name": "Song Bumkeun",
    "country": "KOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 63,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p55",
    "name": "Jo Hyeonwoo",
    "country": "KOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 52,
      "tir": 25,
      "dri": 35,
      "pas": 55,
      "phy": 60,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p56",
    "name": "Kim Moonhwan",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 71,
      "phy": 75,
      "def": 80
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p57",
    "name": "Park Jinseob",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 54,
      "dri": 66,
      "pas": 66,
      "phy": 70,
      "def": 75
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p58",
    "name": "Lee Kihyuk",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 51,
      "dri": 63,
      "pas": 71,
      "phy": 75,
      "def": 77
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p59",
    "name": "Cho Yumin",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 61,
      "phy": 65,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p60",
    "name": "Kim Minjae",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 66,
      "dri": 78,
      "pas": 84,
      "phy": 88,
      "def": 86
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p61",
    "name": "Seol Youngwoo",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 46,
      "dri": 58,
      "pas": 60,
      "phy": 65,
      "def": 65
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p62",
    "name": "Lee Taeseok",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 46,
      "dri": 58,
      "pas": 67,
      "phy": 71,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p63",
    "name": "Kim Taehyeon",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 69,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p64",
    "name": "Jens Castrop",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 64,
      "phy": 68,
      "def": 66
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p65",
    "name": "Lee Hanbeom",
    "country": "KOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p66",
    "name": "Kim Jingyu",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 66,
      "dri": 67,
      "pas": 69,
      "phy": 66,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p67",
    "name": "Yang Hyunjun",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 68,
      "dri": 70,
      "pas": 73,
      "phy": 70,
      "def": 64
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p68",
    "name": "Lee Donggyeong",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 61,
      "dri": 69,
      "pas": 71,
      "phy": 64,
      "def": 57
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p69",
    "name": "Hwang Heechan",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 71,
      "dri": 73,
      "pas": 79,
      "phy": 70,
      "def": 67
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p70",
    "name": "Bae Junho",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 70,
      "dri": 69,
      "pas": 75,
      "phy": 67,
      "def": 66
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p71",
    "name": "Eom Jisung",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 71,
      "dri": 72,
      "pas": 76,
      "phy": 70,
      "def": 67
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p72",
    "name": "Lee Jaesung",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 67,
      "dri": 65,
      "pas": 70,
      "phy": 63,
      "def": 63
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p73",
    "name": "Paik Seungho",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 68,
      "dri": 73,
      "pas": 80,
      "phy": 69,
      "def": 64
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p74",
    "name": "Lee Kangin",
    "country": "KOR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 81,
      "dri": 83,
      "pas": 82,
      "phy": 82,
      "def": 77
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p75",
    "name": "Hwang Inbeom",
    "country": "KOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 63,
      "dri": 66,
      "pas": 72,
      "phy": 65,
      "def": 59
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p76",
    "name": "Son Heungmin",
    "country": "KOR",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 92,
      "dri": 87,
      "pas": 84,
      "phy": 84,
      "def": 64
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p77",
    "name": "Oh Hyeongyu",
    "country": "KOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 80,
      "dri": 73,
      "pas": 70,
      "phy": 70,
      "def": 55
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p78",
    "name": "Cho Guesung",
    "country": "KOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 78,
      "dri": 73,
      "pas": 70,
      "phy": 70,
      "def": 50
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p79",
    "name": "Lukáš Horníček",
    "country": "CZE",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 66,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p80",
    "name": "Matěj Kovář",
    "country": "CZE",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 61,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p81",
    "name": "Jindřich Staněk",
    "country": "CZE",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 64,
      "phy": 67,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p82",
    "name": "Vladimír Coufal",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 50,
      "dri": 62,
      "pas": 71,
      "phy": 75,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p83",
    "name": "David Douděra",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 54,
      "dri": 66,
      "pas": 69,
      "phy": 74,
      "def": 79
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p84",
    "name": "Tomáš Holeš",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 52,
      "dri": 64,
      "pas": 65,
      "phy": 69,
      "def": 75
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p85",
    "name": "Robin Hranáč",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 58,
      "dri": 70,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p86",
    "name": "Štěpán Chaloupek",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 50,
      "dri": 62,
      "pas": 65,
      "phy": 69,
      "def": 73
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p87",
    "name": "David Jurásek",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 47,
      "dri": 59,
      "pas": 62,
      "phy": 66,
      "def": 68
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p88",
    "name": "Ladislav Krejčí",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 67,
      "phy": 71,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p89",
    "name": "Jaroslav Zelený",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 52,
      "dri": 64,
      "pas": 69,
      "phy": 73,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p90",
    "name": "David Zima",
    "country": "CZE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 48,
      "dri": 60,
      "pas": 67,
      "phy": 72,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p91",
    "name": "Lukáš Červ",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 66,
      "dri": 65,
      "pas": 68,
      "phy": 64,
      "def": 62
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p92",
    "name": "Vladimír Darida",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 69,
      "dri": 74,
      "pas": 76,
      "phy": 74,
      "def": 65
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p93",
    "name": "Lukáš Provod",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 67,
      "dri": 68,
      "pas": 73,
      "phy": 66,
      "def": 63
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p94",
    "name": "Michal Sadílek",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 59,
      "dri": 67,
      "pas": 68,
      "phy": 63,
      "def": 55
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p95",
    "name": "Hugo Souček",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 58,
      "dri": 67,
      "pas": 69,
      "phy": 63,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p96",
    "name": "Alexandr Sojka",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 72,
      "dri": 75,
      "pas": 77,
      "phy": 73,
      "def": 68
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p97",
    "name": "Tomáš Souček",
    "country": "CZE",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 81,
      "dri": 84,
      "pas": 83,
      "phy": 83,
      "def": 77
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p98",
    "name": "Pavel Šulc",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 71,
      "pas": 73,
      "phy": 69,
      "def": 65
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p99",
    "name": "Denis Višinský",
    "country": "CZE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 66,
      "dri": 66,
      "pas": 70,
      "phy": 63,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p100",
    "name": "Adam Hložek",
    "country": "CZE",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 76,
      "dri": 78,
      "pas": 76,
      "phy": 76,
      "def": 55
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p101",
    "name": "Tomáš Chorý",
    "country": "CZE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 72,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 46
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p102",
    "name": "Mojmír Chytil",
    "country": "CZE",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 81,
      "dri": 76,
      "pas": 72,
      "phy": 72,
      "def": 53
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p103",
    "name": "Patrik Schick",
    "country": "CZE",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 84,
      "tir": 82,
      "dri": 84,
      "pas": 82,
      "phy": 82,
      "def": 59
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p104",
    "name": "Jan Kuchta",
    "country": "CZE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 77,
      "tir": 74,
      "dri": 77,
      "pas": 76,
      "phy": 76,
      "def": 53
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p105",
    "name": "Maxime Crépeau",
    "country": "CAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 67,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p106",
    "name": "Owen Goodman",
    "country": "CAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 66,
      "def": 69
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p107",
    "name": "Dayne St. Clair",
    "country": "CAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 64,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p108",
    "name": "Moïse Bombito",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 51,
      "dri": 63,
      "pas": 68,
      "phy": 72,
      "def": 72
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p109",
    "name": "Derek Cornelius",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 52,
      "dri": 64,
      "pas": 69,
      "phy": 73,
      "def": 73
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p110",
    "name": "Alphonso Davies",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 65,
      "dri": 77,
      "pas": 83,
      "phy": 87,
      "def": 88
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p111",
    "name": "Luc de Fougerolles",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 69,
      "def": 71
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p112",
    "name": "Alistair Johnston",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 51,
      "dri": 63,
      "pas": 70,
      "phy": 75,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p113",
    "name": "Alfie Jones",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 43,
      "dri": 55,
      "pas": 64,
      "phy": 68,
      "def": 70
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p114",
    "name": "Richie Laryea",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 44,
      "dri": 56,
      "pas": 62,
      "phy": 66,
      "def": 67
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p115",
    "name": "Niko Sigur",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 52,
      "dri": 64,
      "pas": 71,
      "phy": 76,
      "def": 79
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p116",
    "name": "Joel Waterman",
    "country": "CAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 58,
      "dri": 70,
      "pas": 70,
      "phy": 74,
      "def": 79
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p117",
    "name": "Ali Ahmed",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 66,
      "dri": 65,
      "pas": 70,
      "phy": 64,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p118",
    "name": "Tajon Buchanan",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 62,
      "dri": 64,
      "pas": 69,
      "phy": 63,
      "def": 58
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p119",
    "name": "Mathieu Choinière",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 67,
      "dri": 72,
      "pas": 78,
      "phy": 68,
      "def": 63
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p120",
    "name": "Stephen Eustáquio",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 70,
      "pas": 71,
      "phy": 66,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p121",
    "name": "Marcelo Flores",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 66,
      "dri": 64,
      "pas": 69,
      "phy": 62,
      "def": 62
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p122",
    "name": "Ismaël Koné",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 74,
      "pas": 77,
      "phy": 72,
      "def": 66
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p123",
    "name": "Liam Millar",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 68,
      "dri": 73,
      "pas": 73,
      "phy": 72,
      "def": 64
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p124",
    "name": "Jonathan Osorio",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 71,
      "dri": 77,
      "pas": 76,
      "phy": 76,
      "def": 67
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p125",
    "name": "Nathan Saliba",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 71,
      "dri": 76,
      "pas": 74,
      "phy": 75,
      "def": 67
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p126",
    "name": "Jacob Shaffelburg",
    "country": "CAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 67,
      "dri": 66,
      "pas": 70,
      "phy": 65,
      "def": 63
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p127",
    "name": "Jonathan David",
    "country": "CAN",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 86,
      "dri": 82,
      "pas": 80,
      "phy": 80,
      "def": 59
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p128",
    "name": "Promise David",
    "country": "CAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 68,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 49
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p129",
    "name": "Cyle Larin",
    "country": "CAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 76,
      "dri": 76,
      "pas": 75,
      "phy": 75,
      "def": 57
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p130",
    "name": "Tani Oluwaseyi",
    "country": "CAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 73,
      "dri": 72,
      "pas": 73,
      "phy": 73,
      "def": 55
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p131",
    "name": "Nikola Vasilj",
    "country": "BIH",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 58,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p132",
    "name": "Martin Zlomislić",
    "country": "BIH",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 61,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p133",
    "name": "Osman Hadžikić",
    "country": "BIH",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 51,
      "tir": 25,
      "dri": 35,
      "pas": 51,
      "phy": 56,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p134",
    "name": "Sead Kolašinac",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 46,
      "dri": 58,
      "pas": 63,
      "phy": 67,
      "def": 71
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p135",
    "name": "Amar Dedić",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 71
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p136",
    "name": "Nihad Mujakić",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 43,
      "dri": 55,
      "pas": 64,
      "phy": 68,
      "def": 73
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p137",
    "name": "Nikola Katić",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p138",
    "name": "Tarik Muharemović",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 45,
      "dri": 57,
      "pas": 65,
      "phy": 69,
      "def": 76
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p139",
    "name": "Stjepan Radeljić",
    "country": "BIH",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 42,
      "dri": 54,
      "pas": 61,
      "phy": 65,
      "def": 71
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p140",
    "name": "Dennis Hadžikadunić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 61,
      "dri": 66,
      "pas": 71,
      "phy": 64,
      "def": 57
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p141",
    "name": "Nidal Čelik",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 63,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 59
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p142",
    "name": "Amir Hadžiahmetović",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 64,
      "dri": 62,
      "pas": 67,
      "phy": 60,
      "def": 60
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p143",
    "name": "Ivan Šunjić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 61,
      "dri": 69,
      "pas": 75,
      "phy": 64,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p144",
    "name": "Ivan Bašić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 61,
      "dri": 64,
      "pas": 70,
      "phy": 63,
      "def": 57
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p145",
    "name": "Dženis Burnić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 71,
      "dri": 74,
      "pas": 74,
      "phy": 73,
      "def": 67
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p146",
    "name": "Ermin Mahmić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 63,
      "dri": 72,
      "pas": 73,
      "phy": 71,
      "def": 59
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p147",
    "name": "Benjamin Tahirović",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 67,
      "dri": 68,
      "pas": 74,
      "phy": 65,
      "def": 63
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p148",
    "name": "Amar Memić",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 74,
      "pas": 75,
      "phy": 73,
      "def": 63
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p149",
    "name": "Armin Gigović",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 64,
      "dri": 61,
      "pas": 68,
      "phy": 60,
      "def": 60
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p150",
    "name": "Kerim Alajbegović",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 59,
      "dri": 64,
      "pas": 66,
      "phy": 63,
      "def": 55
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p151",
    "name": "Esmir Bajraktarević",
    "country": "BIH",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 62,
      "dri": 64,
      "pas": 62,
      "phy": 64,
      "def": 58
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p152",
    "name": "Ermedin Demirović",
    "country": "BIH",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 75,
      "dri": 70,
      "pas": 66,
      "phy": 66,
      "def": 49
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p153",
    "name": "Jovo Lukić",
    "country": "BIH",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 65,
      "dri": 65,
      "pas": 64,
      "phy": 64,
      "def": 41
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p154",
    "name": "Samed Baždar",
    "country": "BIH",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 72,
      "dri": 74,
      "pas": 74,
      "phy": 74,
      "def": 54
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p155",
    "name": "Haris Tabaković",
    "country": "BIH",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 71,
      "dri": 71,
      "pas": 72,
      "phy": 72,
      "def": 53
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p156",
    "name": "Edin Džeko",
    "country": "BIH",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 74,
      "dri": 73,
      "pas": 69,
      "phy": 69,
      "def": 53
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p157",
    "name": "Mahmoud Abunada",
    "country": "QAT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 65,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p158",
    "name": "Meshaal Barsham",
    "country": "QAT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 60,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p159",
    "name": "Salah Zakaria",
    "country": "QAT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 65,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p160",
    "name": "Yousef Ayman Al-Annabi",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 51,
      "dri": 63,
      "pas": 65,
      "phy": 69,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p161",
    "name": "Boualem Khoukhi",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 52,
      "dri": 64,
      "pas": 68,
      "phy": 72,
      "def": 75
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p162",
    "name": "Homam Al Amin",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 64,
      "phy": 68,
      "def": 67
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p163",
    "name": "Lucas Mendes",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 43,
      "dri": 55,
      "pas": 62,
      "phy": 67,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p164",
    "name": "Issa Laï",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 39,
      "dri": 51,
      "pas": 60,
      "phy": 64,
      "def": 63
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p165",
    "name": "Pedro Miguel",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 70,
      "def": 70
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p166",
    "name": "Alaaeldin Hassan",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 43,
      "dri": 55,
      "pas": 57,
      "phy": 62,
      "def": 66
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p167",
    "name": "Sultan Al Brake",
    "country": "QAT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 38,
      "dri": 50,
      "pas": 59,
      "phy": 63,
      "def": 65
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p168",
    "name": "Assim Madibo",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 61,
      "dri": 63,
      "pas": 66,
      "phy": 59,
      "def": 57
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p169",
    "name": "Abdulaziz Hatem",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 63,
      "dri": 69,
      "pas": 67,
      "phy": 68,
      "def": 59
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p170",
    "name": "Ahmed Fathy",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 65,
      "dri": 73,
      "pas": 73,
      "phy": 72,
      "def": 61
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p171",
    "name": "Karim Boudiaf",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 66,
      "dri": 66,
      "pas": 69,
      "phy": 64,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p172",
    "name": "Jassim Gaber",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 68,
      "dri": 69,
      "pas": 71,
      "phy": 69,
      "def": 64
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p173",
    "name": "Mohammed Muntari",
    "country": "QAT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 63,
      "dri": 71,
      "pas": 73,
      "phy": 70,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p174",
    "name": "Ahmed Alaa",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 71,
      "dri": 68,
      "pas": 63,
      "phy": 63,
      "def": 44
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p175",
    "name": "Ahmed Al Janahi",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 68,
      "dri": 71,
      "pas": 70,
      "phy": 70,
      "def": 47
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p176",
    "name": "Akram Afif",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 73,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p177",
    "name": "Almoez Ali",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 69,
      "dri": 72,
      "pas": 70,
      "phy": 70,
      "def": 50
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p178",
    "name": "Edmilson Júnior",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 68,
      "dri": 66,
      "pas": 66,
      "phy": 66,
      "def": 49
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p179",
    "name": "Hassan Al Haydos",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 70,
      "dri": 65,
      "pas": 61,
      "phy": 61,
      "def": 43
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p180",
    "name": "Mohammed Waad",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 74,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 51
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p181",
    "name": "Tamim Mansour",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 69,
      "dri": 66,
      "pas": 63,
      "phy": 63,
      "def": 49
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p182",
    "name": "Youssef Abdurisag",
    "country": "QAT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 75,
      "dri": 72,
      "pas": 69,
      "phy": 69,
      "def": 53
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p183",
    "name": "Marvin Keller",
    "country": "SUI",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 53,
      "tir": 25,
      "dri": 35,
      "pas": 54,
      "phy": 62,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p184",
    "name": "Gregor Kobel",
    "country": "SUI",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 75,
      "tir": 25,
      "dri": 35,
      "pas": 77,
      "phy": 79,
      "def": 85
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p185",
    "name": "Yvon Mvogo",
    "country": "SUI",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 25,
      "dri": 35,
      "pas": 68,
      "phy": 67,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p186",
    "name": "Manuel Akanji",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 68,
      "dri": 80,
      "pas": 83,
      "phy": 86,
      "def": 86
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p187",
    "name": "Aurèle Amenda",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 52,
      "dri": 64,
      "pas": 66,
      "phy": 70,
      "def": 74
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p188",
    "name": "Eray Cömert",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 52,
      "dri": 64,
      "pas": 70,
      "phy": 74,
      "def": 80
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p189",
    "name": "Nico Elvedi",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 41,
      "dri": 53,
      "pas": 62,
      "phy": 66,
      "def": 71
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p190",
    "name": "Luca Jaquez",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 53,
      "dri": 65,
      "pas": 69,
      "phy": 74,
      "def": 80
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p191",
    "name": "Miro Muheim",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 57,
      "dri": 69,
      "pas": 71,
      "phy": 75,
      "def": 77
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p192",
    "name": "Ricardo Rodríguez",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 53,
      "dri": 65,
      "pas": 68,
      "phy": 72,
      "def": 70
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p193",
    "name": "Silvan Widmer",
    "country": "SUI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 68,
      "def": 74
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p194",
    "name": "Michel Aebischer",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 70,
      "dri": 72,
      "pas": 79,
      "phy": 69,
      "def": 66
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p195",
    "name": "Zeki Amdouni",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 78,
      "dri": 73,
      "pas": 69,
      "phy": 69,
      "def": 54
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p196",
    "name": "Breel Embolo",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 83,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 60
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p197",
    "name": "Christian Fassnacht",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 64,
      "dri": 73,
      "pas": 75,
      "phy": 70,
      "def": 60
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p198",
    "name": "Remo Freuler",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 68,
      "dri": 69,
      "pas": 74,
      "phy": 66,
      "def": 64
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p199",
    "name": "Cedric Itten",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 66,
      "dri": 74,
      "pas": 73,
      "phy": 73,
      "def": 62
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p200",
    "name": "Ardon Jashari",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 69,
      "dri": 75,
      "pas": 76,
      "phy": 74,
      "def": 65
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p201",
    "name": "Johan Manzambi",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 73,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 52
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p202",
    "name": "Dan Ndoye",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 81,
      "dri": 81,
      "pas": 80,
      "phy": 80,
      "def": 58
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p203",
    "name": "Noah Okafor",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 77,
      "pas": 73,
      "phy": 73,
      "def": 54
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p204",
    "name": "Fabian Rieder",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 61,
      "dri": 67,
      "pas": 68,
      "phy": 65,
      "def": 57
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p205",
    "name": "Djibril Sow",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 70,
      "dri": 75,
      "pas": 79,
      "phy": 74,
      "def": 66
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p206",
    "name": "Ruben Vargas",
    "country": "SUI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 76,
      "dri": 76,
      "pas": 75,
      "phy": 75,
      "def": 56
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p207",
    "name": "Granit Xhaka",
    "country": "SUI",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 78,
      "dri": 86,
      "pas": 85,
      "phy": 85,
      "def": 74
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p208",
    "name": "Denis Zakaria",
    "country": "SUI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 66,
      "dri": 72,
      "pas": 75,
      "phy": 68,
      "def": 62
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p209",
    "name": "Alisson",
    "country": "BRA",
    "pos": "GK",
    "rarity": "legendaire",
    "stats": {
      "vit": 83,
      "tir": 25,
      "dri": 35,
      "pas": 84,
      "phy": 83,
      "def": 89
    },
    "ovr": 89,
    "price": 480
  },
  {
    "id": "p210",
    "name": "Ederson",
    "country": "BRA",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 75,
      "tir": 25,
      "dri": 35,
      "pas": 76,
      "phy": 80,
      "def": 87
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p211",
    "name": "Weverton",
    "country": "BRA",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 72,
      "tir": 25,
      "dri": 35,
      "pas": 74,
      "phy": 73,
      "def": 80
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p212",
    "name": "Alex Sandro",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 62,
      "dri": 74,
      "pas": 79,
      "phy": 83,
      "def": 82
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p213",
    "name": "Bremer",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 67,
      "dri": 79,
      "pas": 83,
      "phy": 88,
      "def": 90
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p214",
    "name": "Danilo",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 66,
      "dri": 78,
      "pas": 78,
      "phy": 82,
      "def": 87
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p215",
    "name": "Douglas Santos",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 56,
      "dri": 68,
      "pas": 70,
      "phy": 74,
      "def": 81
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p216",
    "name": "Gabriel Magalhães",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 70,
      "dri": 82,
      "pas": 83,
      "phy": 88,
      "def": 92
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p217",
    "name": "Ibañez",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 62,
      "dri": 74,
      "pas": 77,
      "phy": 82,
      "def": 83
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p218",
    "name": "Léo Pereira",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 61,
      "dri": 73,
      "pas": 78,
      "phy": 83,
      "def": 87
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p219",
    "name": "Marquinhos",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 68,
      "dri": 80,
      "pas": 86,
      "phy": 90,
      "def": 91
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p220",
    "name": "Wesley",
    "country": "BRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 53,
      "dri": 65,
      "pas": 75,
      "phy": 79,
      "def": 79
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p221",
    "name": "Bruno Guimarães",
    "country": "BRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 84,
      "dri": 89,
      "pas": 87,
      "phy": 88,
      "def": 80
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p222",
    "name": "Casemiro",
    "country": "BRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 79,
      "dri": 87,
      "pas": 89,
      "phy": 82,
      "def": 75
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p223",
    "name": "Danilo S.",
    "country": "BRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 82,
      "dri": 83,
      "pas": 86,
      "phy": 82,
      "def": 78
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p224",
    "name": "Fabinho",
    "country": "BRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 82,
      "dri": 83,
      "pas": 84,
      "phy": 82,
      "def": 78
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p225",
    "name": "Lucas Paquetá",
    "country": "BRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 83,
      "dri": 84,
      "pas": 87,
      "phy": 83,
      "def": 79
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p226",
    "name": "Endrick",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 82,
      "dri": 81,
      "pas": 78,
      "phy": 78,
      "def": 57
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p227",
    "name": "Gabriel Martinelli",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 86,
      "dri": 85,
      "pas": 83,
      "phy": 83,
      "def": 68
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p228",
    "name": "Igor Thiago",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 87,
      "dri": 86,
      "pas": 84,
      "phy": 84,
      "def": 65
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p229",
    "name": "Luiz Henrique",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 85,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 64
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p230",
    "name": "Matheus Cunha",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 86,
      "dri": 84,
      "pas": 81,
      "phy": 81,
      "def": 68
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p231",
    "name": "Neymar Jr.",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 89,
      "tir": 87,
      "dri": 89,
      "pas": 87,
      "phy": 87,
      "def": 65
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p232",
    "name": "Raphinha",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 89,
      "tir": 89,
      "dri": 88,
      "pas": 88,
      "phy": 88,
      "def": 71
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p233",
    "name": "Rayan",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 85,
      "dri": 84,
      "pas": 83,
      "phy": 83,
      "def": 61
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p234",
    "name": "Vini Jr.",
    "country": "BRA",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 96,
      "dri": 90,
      "pas": 87,
      "phy": 87,
      "def": 75
    },
    "ovr": 90,
    "price": 490
  },
  {
    "id": "p235",
    "name": "Yassine Bounou",
    "country": "MAR",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 79,
      "tir": 25,
      "dri": 35,
      "pas": 80,
      "phy": 78,
      "def": 84
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p236",
    "name": "Munir El Kajoui",
    "country": "MAR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 69,
      "phy": 72,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p237",
    "name": "Ahmed Reda Tagnaouti",
    "country": "MAR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 67,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p238",
    "name": "Noussair Mazraoui",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 68,
      "def": 71
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p239",
    "name": "Anass Salah-Eddine",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 53,
      "dri": 65,
      "pas": 66,
      "phy": 70,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p240",
    "name": "Youssef Belammari",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 71,
      "phy": 75,
      "def": 76
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p241",
    "name": "Nayef Aguerd",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 66,
      "phy": 71,
      "def": 76
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p242",
    "name": "Chadi Riad",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 54,
      "dri": 66,
      "pas": 75,
      "phy": 79,
      "def": 78
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p243",
    "name": "Issa Diop",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 67,
      "phy": 71,
      "def": 69
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p244",
    "name": "Redouane Halhal",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 51,
      "dri": 63,
      "pas": 73,
      "phy": 77,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p245",
    "name": "Achraf Hakimi",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 67,
      "dri": 79,
      "pas": 83,
      "phy": 88,
      "def": 94
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p246",
    "name": "Zakaria El Ouahdi",
    "country": "MAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 47,
      "dri": 59,
      "pas": 66,
      "phy": 70,
      "def": 71
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p247",
    "name": "Samir El Mourabet",
    "country": "MAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 66,
      "dri": 76,
      "pas": 75,
      "phy": 73,
      "def": 62
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p248",
    "name": "Ayyoub Bouaddi",
    "country": "MAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 70,
      "dri": 75,
      "pas": 75,
      "phy": 74,
      "def": 66
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p249",
    "name": "Neil El Aynaoui",
    "country": "MAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 72,
      "dri": 72,
      "pas": 79,
      "phy": 71,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p250",
    "name": "Sofyan Amrabat",
    "country": "MAR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 76,
      "dri": 84,
      "pas": 84,
      "phy": 82,
      "def": 72
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p251",
    "name": "Azzedine Ounahi",
    "country": "MAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 62,
      "dri": 69,
      "pas": 73,
      "phy": 65,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p252",
    "name": "Bilal El Khannouss",
    "country": "MAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 71,
      "pas": 74,
      "phy": 67,
      "def": 58
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p253",
    "name": "Ismael Saibari",
    "country": "MAR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 76,
      "dri": 76,
      "pas": 76,
      "phy": 76,
      "def": 72
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p254",
    "name": "Abdessamad Ezzalzouli",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 71,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 46
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p255",
    "name": "Chemsdine Talbi",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 69,
      "dri": 70,
      "pas": 70,
      "phy": 70,
      "def": 48
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p256",
    "name": "Soufiane Rahimi",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 74,
      "pas": 72,
      "phy": 72,
      "def": 50
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p257",
    "name": "Ayoub El Kaabi",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 70,
      "pas": 71,
      "phy": 71,
      "def": 53
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p258",
    "name": "Brahim Diaz",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 88,
      "dri": 84,
      "pas": 81,
      "phy": 81,
      "def": 65
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p259",
    "name": "Yassine Gessime",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 72,
      "dri": 72,
      "pas": 71,
      "phy": 71,
      "def": 52
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p260",
    "name": "Ayoub Amaimouni",
    "country": "MAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 78,
      "dri": 76,
      "pas": 74,
      "phy": 74,
      "def": 54
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p261",
    "name": "Johnny Placide",
    "country": "HAI",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 48,
      "tir": 25,
      "dri": 35,
      "pas": 49,
      "phy": 52,
      "def": 58
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p262",
    "name": "Alexandre Pierre",
    "country": "HAI",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 52,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 56,
      "def": 58
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p263",
    "name": "Josué Duverger",
    "country": "HAI",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 49,
      "tir": 25,
      "dri": 35,
      "pas": 50,
      "phy": 50,
      "def": 58
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p264",
    "name": "Carlens Arcus",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 38,
      "dri": 50,
      "pas": 57,
      "phy": 61,
      "def": 62
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p265",
    "name": "Wilguens Paugain",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 39,
      "dri": 51,
      "pas": 56,
      "phy": 61,
      "def": 63
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p266",
    "name": "Duke Lacroix",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 38,
      "dri": 50,
      "pas": 57,
      "phy": 61,
      "def": 64
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p267",
    "name": "Martin Experience",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 43,
      "dri": 55,
      "pas": 56,
      "phy": 60,
      "def": 61
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p268",
    "name": "JK Duverne",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 43,
      "dri": 55,
      "pas": 56,
      "phy": 60,
      "def": 63
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p269",
    "name": "Ricardo Adé",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 39,
      "dri": 51,
      "pas": 56,
      "phy": 60,
      "def": 64
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p270",
    "name": "Hannes Delcroix",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 37,
      "dri": 49,
      "pas": 57,
      "phy": 61,
      "def": 65
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p271",
    "name": "Keeto Thermoncy",
    "country": "HAI",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 43,
      "dri": 55,
      "pas": 54,
      "phy": 59,
      "def": 64
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p272",
    "name": "Leverton Pierre",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 58,
      "dri": 64,
      "pas": 71,
      "phy": 60,
      "def": 54
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p273",
    "name": "Carl-Fred Sainthe",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 59,
      "dri": 58,
      "pas": 63,
      "phy": 57,
      "def": 55
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p274",
    "name": "Jean-Jacques Danley",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 59,
      "dri": 59,
      "pas": 60,
      "phy": 58,
      "def": 55
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p275",
    "name": "Jeanricner Bellegarde",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 58,
      "dri": 63,
      "pas": 65,
      "phy": 62,
      "def": 54
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p276",
    "name": "Pierre Woodensky",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 58,
      "dri": 63,
      "pas": 69,
      "phy": 59,
      "def": 54
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p277",
    "name": "Dominique Simon",
    "country": "HAI",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 54,
      "dri": 60,
      "pas": 61,
      "phy": 58,
      "def": 50
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p278",
    "name": "Louicius Deedson",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 61,
      "dri": 62,
      "pas": 61,
      "phy": 61,
      "def": 45
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p279",
    "name": "Ruben Providence",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 60,
      "dri": 61,
      "pas": 60,
      "phy": 60,
      "def": 44
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p280",
    "name": "Josué Casimir",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 62,
      "dri": 59,
      "pas": 55,
      "phy": 55,
      "def": 43
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p281",
    "name": "Derrick Etienne",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 60,
      "dri": 60,
      "pas": 58,
      "phy": 58,
      "def": 37
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p282",
    "name": "Wilson Isidor",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 58,
      "dri": 60,
      "pas": 60,
      "phy": 60,
      "def": 42
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p283",
    "name": "Duckens Nazon",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 74,
      "pas": 71,
      "phy": 71,
      "def": 53
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p284",
    "name": "Frantzdy Pierrot",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 66,
      "dri": 62,
      "pas": 60,
      "phy": 60,
      "def": 40
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p285",
    "name": "Yassin Fortune",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 64,
      "dri": 58,
      "pas": 56,
      "phy": 56,
      "def": 40
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p286",
    "name": "Lenny Joseph",
    "country": "HAI",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 59,
      "dri": 61,
      "pas": 59,
      "phy": 59,
      "def": 36
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p287",
    "name": "Craig Gordon",
    "country": "SCO",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 59,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p288",
    "name": "Angus Gunn",
    "country": "SCO",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 71,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p289",
    "name": "Liam Kelly",
    "country": "SCO",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 70,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p290",
    "name": "Grant Hanley",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 55,
      "dri": 67,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p291",
    "name": "Jack Hendry",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 54,
      "dri": 66,
      "pas": 67,
      "phy": 71,
      "def": 73
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p292",
    "name": "Aaron Hickey",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 68
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p293",
    "name": "Dom Hyam",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 49,
      "dri": 61,
      "pas": 65,
      "phy": 69,
      "def": 68
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p294",
    "name": "Scott McKenna",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 45,
      "dri": 57,
      "pas": 67,
      "phy": 71,
      "def": 70
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p295",
    "name": "Nathan Patterson",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 71,
      "def": 75
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p296",
    "name": "Anthony Ralston",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 46,
      "dri": 58,
      "pas": 59,
      "phy": 63,
      "def": 68
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p297",
    "name": "Andy Robertson",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 65,
      "dri": 77,
      "pas": 83,
      "phy": 87,
      "def": 87
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p298",
    "name": "John Souttar",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 68,
      "def": 68
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p299",
    "name": "Kieran Tierney",
    "country": "SCO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 48,
      "dri": 60,
      "pas": 61,
      "phy": 65,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p300",
    "name": "Ryan Christie",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 65,
      "dri": 67,
      "pas": 73,
      "phy": 64,
      "def": 61
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p301",
    "name": "Findlay Curtis",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 70,
      "dri": 69,
      "pas": 76,
      "phy": 67,
      "def": 66
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p302",
    "name": "Lewis Ferguson",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 65,
      "dri": 69,
      "pas": 72,
      "phy": 68,
      "def": 61
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p303",
    "name": "Ben Gannon-Doak",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 62,
      "dri": 67,
      "pas": 68,
      "phy": 66,
      "def": 58
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p304",
    "name": "Billy Gilmour",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 61,
      "dri": 64,
      "pas": 71,
      "phy": 62,
      "def": 57
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p305",
    "name": "John McGinn",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 61,
      "dri": 66,
      "pas": 69,
      "phy": 65,
      "def": 57
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p306",
    "name": "Kenny McLean",
    "country": "SCO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 61,
      "dri": 70,
      "pas": 72,
      "phy": 67,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p307",
    "name": "Scott McTominay",
    "country": "SCO",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 83,
      "dri": 83,
      "pas": 83,
      "phy": 83,
      "def": 79
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p308",
    "name": "Ché Adams",
    "country": "SCO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 73,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 49
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p309",
    "name": "Lyndon Dykes",
    "country": "SCO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 72,
      "dri": 76,
      "pas": 75,
      "phy": 75,
      "def": 55
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p310",
    "name": "George Hirst",
    "country": "SCO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 68,
      "dri": 66,
      "pas": 63,
      "phy": 63,
      "def": 50
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p311",
    "name": "Lawrence Shankland",
    "country": "SCO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 77,
      "dri": 72,
      "pas": 70,
      "phy": 70,
      "def": 56
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p312",
    "name": "Ross Stewart",
    "country": "SCO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 72,
      "pas": 72,
      "phy": 72,
      "def": 53
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p313",
    "name": "Matt Turner",
    "country": "USA",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 72,
      "tir": 25,
      "dri": 35,
      "pas": 72,
      "phy": 70,
      "def": 78
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p314",
    "name": "Matt Freese",
    "country": "USA",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 73,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p315",
    "name": "Chris Brady",
    "country": "USA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 58,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p316",
    "name": "Sergiño Dest",
    "country": "USA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 60,
      "dri": 72,
      "pas": 79,
      "phy": 83,
      "def": 83
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p317",
    "name": "Chris Richards",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 51,
      "dri": 63,
      "pas": 67,
      "phy": 71,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p318",
    "name": "Antonee Robinson",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 51,
      "dri": 63,
      "pas": 71,
      "phy": 76,
      "def": 77
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p319",
    "name": "Auston Trusty",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 52,
      "dri": 64,
      "pas": 71,
      "phy": 76,
      "def": 80
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p320",
    "name": "Miles Robinson",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 55,
      "dri": 67,
      "pas": 67,
      "phy": 71,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p321",
    "name": "Tim Ream",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 68,
      "def": 72
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p322",
    "name": "Alex Freeman",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 57,
      "dri": 69,
      "pas": 72,
      "phy": 76,
      "def": 76
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p323",
    "name": "Max Arfsten",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 51,
      "dri": 63,
      "pas": 72,
      "phy": 77,
      "def": 79
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p324",
    "name": "Mark McKenzie",
    "country": "USA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 56,
      "dri": 68,
      "pas": 70,
      "phy": 74,
      "def": 77
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p325",
    "name": "Joe Scally",
    "country": "USA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 55,
      "dri": 67,
      "pas": 74,
      "phy": 78,
      "def": 81
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p326",
    "name": "Tyler Adams",
    "country": "USA",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 79,
      "dri": 79,
      "pas": 81,
      "phy": 78,
      "def": 75
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p327",
    "name": "Gio Reyna",
    "country": "USA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 64,
      "dri": 66,
      "pas": 71,
      "phy": 65,
      "def": 60
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p328",
    "name": "Weston McKennie",
    "country": "USA",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 78,
      "dri": 80,
      "pas": 85,
      "phy": 79,
      "def": 74
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p329",
    "name": "Sebastian Berhalter",
    "country": "USA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 61,
      "dri": 70,
      "pas": 70,
      "phy": 69,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p330",
    "name": "Cristian Roldan",
    "country": "USA",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 76,
      "pas": 81,
      "phy": 74,
      "def": 71
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p331",
    "name": "Malik Tillman",
    "country": "USA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 70,
      "dri": 76,
      "pas": 78,
      "phy": 73,
      "def": 66
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p332",
    "name": "Ricardo Pepi",
    "country": "USA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 83,
      "dri": 78,
      "pas": 74,
      "phy": 74,
      "def": 59
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p333",
    "name": "Christian Pulisic",
    "country": "USA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 87,
      "dri": 85,
      "pas": 83,
      "phy": 83,
      "def": 65
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p334",
    "name": "Brenden Aaronson",
    "country": "USA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 77,
      "dri": 78,
      "pas": 77,
      "phy": 77,
      "def": 61
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p335",
    "name": "Haji Wright",
    "country": "USA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 53
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p336",
    "name": "Folarin Balogun",
    "country": "USA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 67,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 49
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p337",
    "name": "Tim Weah",
    "country": "USA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 77,
      "dri": 75,
      "pas": 75,
      "phy": 75,
      "def": 58
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p338",
    "name": "Alex Zendejas",
    "country": "USA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 68,
      "dri": 69,
      "pas": 69,
      "phy": 69,
      "def": 49
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p339",
    "name": "Orlando Gill",
    "country": "PAR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 57,
      "def": 64
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p340",
    "name": "Roberto Fernández",
    "country": "PAR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 58,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p341",
    "name": "Gastón Olveira",
    "country": "PAR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 68,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p342",
    "name": "Juan Cáceres",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 47,
      "dri": 59,
      "pas": 67,
      "phy": 71,
      "def": 78
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p343",
    "name": "Gustavo Velázquez",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 51,
      "dri": 63,
      "pas": 67,
      "phy": 71,
      "def": 70
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p344",
    "name": "Gustavo Gómez",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 45,
      "dri": 57,
      "pas": 60,
      "phy": 65,
      "def": 66
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p345",
    "name": "Junior Alonso",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 47,
      "dri": 59,
      "pas": 68,
      "phy": 73,
      "def": 76
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p346",
    "name": "José Canale",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 71,
      "def": 74
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p347",
    "name": "Omar Alderete",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 49,
      "dri": 61,
      "pas": 70,
      "phy": 74,
      "def": 79
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p348",
    "name": "Alessandro Maidana",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 68
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p349",
    "name": "Fabián Balbuena",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 56,
      "dri": 68,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p350",
    "name": "Diego Gómez",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 42,
      "dri": 54,
      "pas": 61,
      "phy": 66,
      "def": 66
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p351",
    "name": "Mauricio Magalhães",
    "country": "PAR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 46,
      "dri": 58,
      "pas": 68,
      "phy": 72,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p352",
    "name": "Damián Bobadilla",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 62,
      "dri": 64,
      "pas": 65,
      "phy": 63,
      "def": 58
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p353",
    "name": "Braian Ojeda",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 74,
      "pas": 74,
      "phy": 73,
      "def": 63
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p354",
    "name": "Andrés Cubas",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 66,
      "dri": 65,
      "pas": 71,
      "phy": 64,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p355",
    "name": "Matías Galarza",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 70,
      "pas": 77,
      "phy": 69,
      "def": 66
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p356",
    "name": "Alejandro Romero",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 65,
      "dri": 69,
      "pas": 70,
      "phy": 68,
      "def": 61
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p357",
    "name": "Gustavo Caballero",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 64,
      "dri": 66,
      "pas": 67,
      "phy": 64,
      "def": 60
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p358",
    "name": "Ramón Sosa",
    "country": "PAR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 66,
      "dri": 68,
      "pas": 74,
      "phy": 65,
      "def": 62
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p359",
    "name": "Alex Arce",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 69,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 52
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p360",
    "name": "Gabriel Ávalos",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 73,
      "dri": 70,
      "pas": 69,
      "phy": 69,
      "def": 52
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p361",
    "name": "Isidro Pitta",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 74,
      "pas": 72,
      "phy": 72,
      "def": 57
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p362",
    "name": "Miguel Almirón",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 85,
      "dri": 80,
      "pas": 76,
      "phy": 76,
      "def": 58
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p363",
    "name": "Julio Enciso",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 64,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 43
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p364",
    "name": "Antonio Sanabria",
    "country": "PAR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 76,
      "dri": 72,
      "pas": 68,
      "phy": 68,
      "def": 55
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p365",
    "name": "Patrick Beach",
    "country": "AUS",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 66,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p366",
    "name": "Paul Izzo",
    "country": "AUS",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 66,
      "phy": 67,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p367",
    "name": "Maty Ryan",
    "country": "AUS",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 59,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p368",
    "name": "Aziz Behich",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 70,
      "phy": 74,
      "def": 73
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p369",
    "name": "Jordan Bos",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 50,
      "dri": 62,
      "pas": 70,
      "phy": 74,
      "def": 76
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p370",
    "name": "Cameron Burgess",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 56,
      "dri": 68,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p371",
    "name": "Alessandro Circati",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 67,
      "phy": 71,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p372",
    "name": "Milos Degenek",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 42,
      "dri": 54,
      "pas": 61,
      "phy": 66,
      "def": 70
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p373",
    "name": "Jason Geria",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 51,
      "dri": 63,
      "pas": 69,
      "phy": 73,
      "def": 73
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p374",
    "name": "Lucas Herrington",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 53,
      "dri": 65,
      "pas": 70,
      "phy": 74,
      "def": 75
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p375",
    "name": "Jacob Italiano",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 68,
      "phy": 72,
      "def": 74
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p376",
    "name": "Harry Souttar",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 55,
      "dri": 67,
      "pas": 75,
      "phy": 79,
      "def": 83
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p377",
    "name": "Kai Trewin",
    "country": "AUS",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 48,
      "dri": 60,
      "pas": 62,
      "phy": 66,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p378",
    "name": "Cameron Devlin",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 63,
      "dri": 65,
      "pas": 70,
      "phy": 63,
      "def": 59
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p379",
    "name": "Ajdin Hrustic",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 69,
      "dri": 70,
      "pas": 70,
      "phy": 71,
      "def": 65
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p380",
    "name": "Jackson Irvine",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 64,
      "dri": 69,
      "pas": 70,
      "phy": 68,
      "def": 60
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p381",
    "name": "Connor Metcalfe",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 57,
      "dri": 66,
      "pas": 67,
      "phy": 63,
      "def": 53
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p382",
    "name": "Paul Okon-Engstler",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 67,
      "dri": 69,
      "pas": 75,
      "phy": 66,
      "def": 63
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p383",
    "name": "Aiden O'Neill",
    "country": "AUS",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 71,
      "dri": 68,
      "pas": 75,
      "phy": 67,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p384",
    "name": "Nestory Irankunda",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 76,
      "dri": 75,
      "pas": 74,
      "phy": 74,
      "def": 51
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p385",
    "name": "Mathew Leckie",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 73,
      "dri": 71,
      "pas": 66,
      "phy": 66,
      "def": 53
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p386",
    "name": "Awer Mabil",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 70,
      "dri": 65,
      "pas": 61,
      "phy": 61,
      "def": 42
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p387",
    "name": "Mohamed Toure",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 73,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 53
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p388",
    "name": "Nishan Velupillay",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 68,
      "dri": 67,
      "pas": 65,
      "phy": 65,
      "def": 51
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p389",
    "name": "Cristian Volpato",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 73,
      "pas": 73,
      "phy": 73,
      "def": 52
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p390",
    "name": "Tete Yengi",
    "country": "AUS",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 71,
      "dri": 70,
      "pas": 66,
      "phy": 66,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p391",
    "name": "Altay Bayındır",
    "country": "TUR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 64,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p392",
    "name": "Mert Günok",
    "country": "TUR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 64,
      "phy": 67,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p393",
    "name": "Uğurcan Çakır",
    "country": "TUR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 68,
      "phy": 69,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p394",
    "name": "Abdülkerim Bardakcı",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 44,
      "dri": 56,
      "pas": 65,
      "phy": 70,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p395",
    "name": "Merih Demiral",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 51,
      "dri": 63,
      "pas": 70,
      "phy": 74,
      "def": 76
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p396",
    "name": "Çağlar Söyüncü",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 55,
      "dri": 67,
      "pas": 71,
      "phy": 76,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p397",
    "name": "Eren Elmalı",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 44,
      "dri": 56,
      "pas": 64,
      "phy": 68,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p398",
    "name": "Ferdi Kadıoğlu",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 57,
      "dri": 69,
      "pas": 72,
      "phy": 77,
      "def": 78
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p399",
    "name": "Mert Müldür",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 45,
      "dri": 57,
      "pas": 66,
      "phy": 70,
      "def": 69
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p400",
    "name": "Ozan Kabak",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 70,
      "phy": 74,
      "def": 77
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p401",
    "name": "Samet Akaydın",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 53,
      "dri": 65,
      "pas": 66,
      "phy": 70,
      "def": 75
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p402",
    "name": "Zeki Çelik",
    "country": "TUR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 58,
      "dri": 70,
      "pas": 72,
      "phy": 76,
      "def": 78
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p403",
    "name": "Hakan Çalhanoğlu",
    "country": "TUR",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 83,
      "dri": 85,
      "pas": 87,
      "phy": 86,
      "def": 79
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p404",
    "name": "İsmail Yüksek",
    "country": "TUR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 70,
      "pas": 70,
      "phy": 67,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p405",
    "name": "Kaan Ayhan",
    "country": "TUR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 68,
      "dri": 76,
      "pas": 79,
      "phy": 75,
      "def": 64
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p406",
    "name": "Orkun Kökçü",
    "country": "TUR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 63,
      "dri": 65,
      "pas": 71,
      "phy": 62,
      "def": 59
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p407",
    "name": "Salih Özcan",
    "country": "TUR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 74,
      "pas": 77,
      "phy": 72,
      "def": 70
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p408",
    "name": "Arda Güler",
    "country": "TUR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 76,
      "dri": 83,
      "pas": 83,
      "phy": 82,
      "def": 72
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p409",
    "name": "Barış Alper Yılmaz",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 78,
      "dri": 77,
      "pas": 78,
      "phy": 78,
      "def": 56
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p410",
    "name": "Can Uzun",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 69,
      "dri": 67,
      "pas": 64,
      "phy": 64,
      "def": 51
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p411",
    "name": "Deniz Gül",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 48
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p412",
    "name": "İrfan Can Kahveci",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 68,
      "dri": 67,
      "pas": 68,
      "phy": 68,
      "def": 47
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p413",
    "name": "Kenan Yıldız",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 80,
      "dri": 81,
      "pas": 80,
      "phy": 80,
      "def": 63
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p414",
    "name": "Kerem Aktürkoğlu",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 80,
      "dri": 78,
      "pas": 73,
      "phy": 73,
      "def": 56
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p415",
    "name": "Oğuz Aydın",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 71,
      "dri": 67,
      "pas": 65,
      "phy": 65,
      "def": 47
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p416",
    "name": "Yunus Akgün",
    "country": "TUR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 46
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p417",
    "name": "Oliver Baumann",
    "country": "GER",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 75,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p418",
    "name": "Manuel Neuer",
    "country": "GER",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 79,
      "tir": 25,
      "dri": 35,
      "pas": 81,
      "phy": 81,
      "def": 85
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p419",
    "name": "Alexander Nübel",
    "country": "GER",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 68,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 72,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p420",
    "name": "Waldemar Anton",
    "country": "GER",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 57,
      "dri": 69,
      "pas": 74,
      "phy": 78,
      "def": 77
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p421",
    "name": "Nathaniel Brown",
    "country": "GER",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 57,
      "dri": 69,
      "pas": 71,
      "phy": 75,
      "def": 76
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p422",
    "name": "Pascal Groß",
    "country": "GER",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 79,
      "dri": 77,
      "pas": 82,
      "phy": 75,
      "def": 75
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p423",
    "name": "Joshua Kimmich",
    "country": "GER",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 71,
      "dri": 83,
      "pas": 85,
      "phy": 89,
      "def": 92
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p424",
    "name": "Felix Nmecha",
    "country": "GER",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 72,
      "pas": 77,
      "phy": 70,
      "def": 67
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p425",
    "name": "Aleksandar Pavlović",
    "country": "GER",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 74,
      "pas": 77,
      "phy": 71,
      "def": 63
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p426",
    "name": "David Raum",
    "country": "GER",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 56,
      "dri": 68,
      "pas": 70,
      "phy": 74,
      "def": 74
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p427",
    "name": "Antonio Rüdiger",
    "country": "GER",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 70,
      "dri": 82,
      "pas": 83,
      "phy": 87,
      "def": 92
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p428",
    "name": "Nico Schlotterbeck",
    "country": "GER",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 62,
      "dri": 74,
      "pas": 75,
      "phy": 79,
      "def": 80
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p429",
    "name": "Angelo Stiller",
    "country": "GER",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 65,
      "dri": 74,
      "pas": 77,
      "phy": 69,
      "def": 61
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p430",
    "name": "Jonathan Tah",
    "country": "GER",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 63,
      "dri": 75,
      "pas": 77,
      "phy": 81,
      "def": 80
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p431",
    "name": "Malick Thiaw",
    "country": "GER",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 56,
      "dri": 68,
      "pas": 73,
      "phy": 77,
      "def": 76
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p432",
    "name": "Nadiem Amiri",
    "country": "GER",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 72,
      "dri": 77,
      "pas": 76,
      "phy": 76,
      "def": 68
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p433",
    "name": "Maximilian Beier",
    "country": "GER",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 82,
      "dri": 78,
      "pas": 76,
      "phy": 76,
      "def": 61
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p434",
    "name": "Leon Goretzka",
    "country": "GER",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 80,
      "dri": 83,
      "pas": 85,
      "phy": 82,
      "def": 76
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p435",
    "name": "Kai Havertz",
    "country": "GER",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 86,
      "dri": 86,
      "pas": 84,
      "phy": 84,
      "def": 65
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p436",
    "name": "Lennart Karl",
    "country": "GER",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 75,
      "dri": 78,
      "pas": 82,
      "phy": 74,
      "def": 71
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p437",
    "name": "Jamie Leweling",
    "country": "GER",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 77,
      "dri": 83,
      "pas": 85,
      "phy": 80,
      "def": 73
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p438",
    "name": "Jamal Musiala",
    "country": "GER",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 88,
      "tir": 88,
      "dri": 89,
      "pas": 94,
      "phy": 86,
      "def": 84
    },
    "ovr": 89,
    "price": 480
  },
  {
    "id": "p439",
    "name": "Leroy Sané",
    "country": "GER",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 79,
      "dri": 87,
      "pas": 86,
      "phy": 86,
      "def": 75
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p440",
    "name": "Deniz Undav",
    "country": "GER",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 83,
      "tir": 80,
      "dri": 83,
      "pas": 81,
      "phy": 81,
      "def": 64
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p441",
    "name": "Florian Wirtz",
    "country": "GER",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 88,
      "tir": 89,
      "dri": 89,
      "pas": 90,
      "phy": 88,
      "def": 85
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p442",
    "name": "Nick Woltemade",
    "country": "GER",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 79,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 57
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p443",
    "name": "Tyrick Bodak",
    "country": "CUW",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 52,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 60,
      "def": 64
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p444",
    "name": "Trevor Doornbusch",
    "country": "CUW",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 57,
      "phy": 56,
      "def": 61
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p445",
    "name": "Eloy Room",
    "country": "CUW",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 61,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p446",
    "name": "Riechedly Bazoer",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 51,
      "dri": 63,
      "pas": 68,
      "phy": 72,
      "def": 71
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p447",
    "name": "Joshua Brenet",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 39,
      "dri": 51,
      "pas": 60,
      "phy": 64,
      "def": 63
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p448",
    "name": "Roshon van Eijma",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 42,
      "dri": 54,
      "pas": 57,
      "phy": 61,
      "def": 64
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p449",
    "name": "Sherel Floranus",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 42,
      "dri": 54,
      "pas": 61,
      "phy": 65,
      "def": 67
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p450",
    "name": "Deveron Fonville",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 41,
      "dri": 53,
      "pas": 63,
      "phy": 67,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p451",
    "name": "Juriën Gaari",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 41,
      "dri": 53,
      "pas": 62,
      "phy": 66,
      "def": 66
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p452",
    "name": "Armando Obispo",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 46,
      "dri": 58,
      "pas": 59,
      "phy": 63,
      "def": 66
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p453",
    "name": "Shurandy Sambo",
    "country": "CUW",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 45,
      "dri": 57,
      "pas": 62,
      "phy": 66,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p454",
    "name": "Juninho Bacuna",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 62,
      "dri": 63,
      "pas": 68,
      "phy": 62,
      "def": 58
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p455",
    "name": "Leandro Bacuna",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 59,
      "dri": 64,
      "pas": 70,
      "phy": 61,
      "def": 55
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p456",
    "name": "Livano Comenencia",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 62,
      "dri": 64,
      "pas": 62,
      "phy": 64,
      "def": 58
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p457",
    "name": "Kevin Felida",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 58,
      "dri": 66,
      "pas": 68,
      "phy": 65,
      "def": 54
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p458",
    "name": "Ar'Jany Martha",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 58,
      "dri": 68,
      "pas": 68,
      "phy": 64,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p459",
    "name": "Tyrese Noslin",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 56,
      "dri": 59,
      "pas": 66,
      "phy": 57,
      "def": 52
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p460",
    "name": "Godfried Roemeratoe",
    "country": "CUW",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 64,
      "dri": 62,
      "pas": 67,
      "phy": 60,
      "def": 60
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p461",
    "name": "Jeremy Antonisse",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 67,
      "dri": 64,
      "pas": 61,
      "phy": 61,
      "def": 44
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p462",
    "name": "Tahith Chong",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 52
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p463",
    "name": "Kenji Gorré",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 74,
      "dri": 69,
      "pas": 66,
      "phy": 66,
      "def": 46
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p464",
    "name": "Sontje Hansen",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 61,
      "dri": 63,
      "pas": 62,
      "phy": 62,
      "def": 46
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p465",
    "name": "Gervane Kastaneer",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 69,
      "dri": 71,
      "pas": 71,
      "phy": 71,
      "def": 51
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p466",
    "name": "Brandley Kuwas",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 74,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 48
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p467",
    "name": "Jürgen Locadia",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 74,
      "dri": 71,
      "pas": 68,
      "phy": 68,
      "def": 53
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p468",
    "name": "Jearl Margaritha",
    "country": "CUW",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 67,
      "dri": 66,
      "pas": 64,
      "phy": 64,
      "def": 44
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p469",
    "name": "Yahia Fofana",
    "country": "CIV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 62,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p470",
    "name": "Mohamed Koné",
    "country": "CIV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 60,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p471",
    "name": "Alban Lafont",
    "country": "CIV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 63,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p472",
    "name": "Emmanuel Agbadou",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 68,
      "phy": 73,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p473",
    "name": "Clément Akpa",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 58,
      "dri": 70,
      "pas": 72,
      "phy": 76,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p474",
    "name": "Ousmane Diomande",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 68,
      "phy": 72,
      "def": 77
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p475",
    "name": "Guéla Doué",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 67,
      "phy": 71,
      "def": 77
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p476",
    "name": "Ghislain Konan",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 51,
      "dri": 63,
      "pas": 65,
      "phy": 69,
      "def": 72
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p477",
    "name": "Odilon Kossounou",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 45,
      "dri": 57,
      "pas": 64,
      "phy": 68,
      "def": 70
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p478",
    "name": "Evan Ndicka",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 66,
      "dri": 78,
      "pas": 80,
      "phy": 84,
      "def": 89
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p479",
    "name": "Wilfried Singo",
    "country": "CIV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 50,
      "dri": 62,
      "pas": 63,
      "phy": 67,
      "def": 69
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p480",
    "name": "Seko Fofana",
    "country": "CIV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 63,
      "dri": 72,
      "pas": 73,
      "phy": 71,
      "def": 59
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p481",
    "name": "Parfait Guiagon",
    "country": "CIV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 66,
      "dri": 63,
      "pas": 70,
      "phy": 62,
      "def": 62
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p482",
    "name": "Christ Inao Oulaï",
    "country": "CIV",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 76,
      "dri": 75,
      "pas": 79,
      "phy": 74,
      "def": 72
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p483",
    "name": "Franck Kessié",
    "country": "CIV",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 80,
      "dri": 82,
      "pas": 82,
      "phy": 81,
      "def": 76
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p484",
    "name": "Ibrahim Sangaré",
    "country": "CIV",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 74,
      "pas": 81,
      "phy": 72,
      "def": 70
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p485",
    "name": "Jean-Mickaël Seri",
    "country": "CIV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 72,
      "dri": 69,
      "pas": 76,
      "phy": 68,
      "def": 68
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p486",
    "name": "Simon Adingra",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 77,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 54
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p487",
    "name": "Ange-Yoan Bonny",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 78,
      "dri": 76,
      "pas": 74,
      "phy": 74,
      "def": 54
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p488",
    "name": "Amad Diallo",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 69,
      "dri": 68,
      "pas": 64,
      "phy": 64,
      "def": 47
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p489",
    "name": "Oumar Diakité",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 77,
      "dri": 74,
      "pas": 71,
      "phy": 71,
      "def": 55
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p490",
    "name": "Yan Diomande",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 73,
      "dri": 67,
      "pas": 64,
      "phy": 64,
      "def": 52
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p491",
    "name": "Evann Guessand",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 76,
      "dri": 79,
      "pas": 77,
      "phy": 77,
      "def": 59
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p492",
    "name": "Nicolas Pépé",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 84,
      "dri": 82,
      "pas": 80,
      "phy": 80,
      "def": 58
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p493",
    "name": "Bazoumana Touré",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 72,
      "dri": 70,
      "pas": 65,
      "phy": 65,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p494",
    "name": "Elye Wahi",
    "country": "CIV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 70,
      "dri": 68,
      "pas": 65,
      "phy": 65,
      "def": 52
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p495",
    "name": "Alan Franco",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 63,
      "dri": 71,
      "pas": 70,
      "phy": 70,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p496",
    "name": "Alan Minda",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 69,
      "dri": 70,
      "pas": 70,
      "phy": 71,
      "def": 65
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p497",
    "name": "Angelo Preciado",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 47,
      "dri": 59,
      "pas": 69,
      "phy": 73,
      "def": 73
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p498",
    "name": "Anthony Valencia",
    "country": "ECU",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 78,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 57
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p499",
    "name": "Denil Castillo",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 65,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 61
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p500",
    "name": "Enner Valencia",
    "country": "ECU",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 84,
      "dri": 80,
      "pas": 76,
      "phy": 76,
      "def": 60
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p501",
    "name": "Félix Torres",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 52,
      "dri": 64,
      "pas": 68,
      "phy": 73,
      "def": 79
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p502",
    "name": "Gonzalo Valle",
    "country": "ECU",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 64,
      "phy": 66,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p503",
    "name": "Gonzalo Plata",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 63,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 59
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p504",
    "name": "Hernán Galíndez",
    "country": "ECU",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 57,
      "phy": 65,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p505",
    "name": "Jeremy Arévalo",
    "country": "ECU",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 73,
      "pas": 72,
      "phy": 72,
      "def": 48
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p506",
    "name": "Joel Ordóñez",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 54,
      "dri": 66,
      "pas": 69,
      "phy": 74,
      "def": 79
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p507",
    "name": "John Yeboah",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 66,
      "dri": 75,
      "pas": 77,
      "phy": 71,
      "def": 62
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p508",
    "name": "Jordy Caicedo",
    "country": "ECU",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 76,
      "dri": 72,
      "pas": 70,
      "phy": 70,
      "def": 55
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p509",
    "name": "Jordy Alcívar",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 72,
      "pas": 75,
      "phy": 71,
      "def": 66
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p510",
    "name": "Jackson Porozo",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 70,
      "def": 74
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p511",
    "name": "Kendry Páez",
    "country": "ECU",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 74,
      "dri": 79,
      "pas": 85,
      "phy": 76,
      "def": 70
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p512",
    "name": "Kevin Rodríguez",
    "country": "ECU",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 77,
      "dri": 78,
      "pas": 76,
      "phy": 76,
      "def": 58
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p513",
    "name": "Moisés Ramírez",
    "country": "ECU",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 67,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p514",
    "name": "Moisés Caicedo",
    "country": "ECU",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 83,
      "dri": 88,
      "pas": 86,
      "phy": 87,
      "def": 79
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p515",
    "name": "Nilson Angulo",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 72,
      "dri": 72,
      "pas": 76,
      "phy": 69,
      "def": 68
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p516",
    "name": "Pedro Vite",
    "country": "ECU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 69,
      "dri": 74,
      "pas": 80,
      "phy": 71,
      "def": 65
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p517",
    "name": "Pervis Estupiñán",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 60,
      "dri": 72,
      "pas": 79,
      "phy": 83,
      "def": 85
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p518",
    "name": "Piero Hincapié",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 60,
      "dri": 72,
      "pas": 80,
      "phy": 85,
      "def": 85
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p519",
    "name": "Willian Pacho",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 67,
      "dri": 79,
      "pas": 82,
      "phy": 86,
      "def": 85
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p520",
    "name": "Yaimar Medina",
    "country": "ECU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 66,
      "phy": 71,
      "def": 74
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p521",
    "name": "Nathan Aké",
    "country": "NED",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 63,
      "dri": 75,
      "pas": 80,
      "phy": 84,
      "def": 88
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p522",
    "name": "Brian Brobbey",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 84,
      "dri": 78,
      "pas": 76,
      "phy": 76,
      "def": 57
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p523",
    "name": "Memphis Depay",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 83,
      "tir": 80,
      "dri": 83,
      "pas": 81,
      "phy": 81,
      "def": 64
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p524",
    "name": "Virgil van Dijk",
    "country": "NED",
    "pos": "DEF",
    "rarity": "legendaire",
    "stats": {
      "vit": 89,
      "tir": 69,
      "dri": 81,
      "pas": 87,
      "phy": 92,
      "def": 94
    },
    "ovr": 89,
    "price": 480
  },
  {
    "id": "p525",
    "name": "Denzel Dumfries",
    "country": "NED",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 62,
      "dri": 74,
      "pas": 81,
      "phy": 86,
      "def": 90
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p526",
    "name": "Mark Flekken",
    "country": "NED",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 69,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 71,
      "def": 79
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p527",
    "name": "Cody Gakpo",
    "country": "NED",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 89,
      "dri": 85,
      "pas": 82,
      "phy": 82,
      "def": 62
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p528",
    "name": "Ryan Gravenberch",
    "country": "NED",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 78,
      "dri": 84,
      "pas": 86,
      "phy": 81,
      "def": 74
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p529",
    "name": "Jorrel Hato",
    "country": "NED",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 61,
      "dri": 73,
      "pas": 75,
      "phy": 80,
      "def": 85
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p530",
    "name": "Jan Paul van Hecke",
    "country": "NED",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 59,
      "dri": 71,
      "pas": 79,
      "phy": 83,
      "def": 82
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p531",
    "name": "Frenkie de Jong",
    "country": "NED",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 85,
      "dri": 86,
      "pas": 90,
      "phy": 85,
      "def": 81
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p532",
    "name": "Justin Kluivert",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 80,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 59
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p533",
    "name": "Teun Koopmeiners",
    "country": "NED",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 77,
      "dri": 83,
      "pas": 85,
      "phy": 82,
      "def": 73
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p534",
    "name": "Noa Lang",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 84,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 58
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p535",
    "name": "Donyell Malen",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 83,
      "dri": 80,
      "pas": 78,
      "phy": 78,
      "def": 61
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p536",
    "name": "Tijjani Reijnders",
    "country": "NED",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 80,
      "dri": 84,
      "pas": 87,
      "phy": 82,
      "def": 76
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p537",
    "name": "Robin Roefs",
    "country": "NED",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 69,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 69,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p538",
    "name": "Marten de Roon",
    "country": "NED",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 77,
      "dri": 82,
      "pas": 82,
      "phy": 81,
      "def": 73
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p539",
    "name": "Crysencio Summerville",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 82,
      "dri": 78,
      "pas": 74,
      "phy": 74,
      "def": 60
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p540",
    "name": "Guus Til",
    "country": "NED",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 75,
      "dri": 79,
      "pas": 85,
      "phy": 75,
      "def": 71
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p541",
    "name": "Jurriën Timber",
    "country": "NED",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 61,
      "dri": 73,
      "pas": 82,
      "phy": 86,
      "def": 90
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p542",
    "name": "Quinten Timber",
    "country": "NED",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 75,
      "dri": 78,
      "pas": 80,
      "phy": 77,
      "def": 71
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p543",
    "name": "Micky van de Ven",
    "country": "NED",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 62,
      "dri": 74,
      "pas": 83,
      "phy": 87,
      "def": 91
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p544",
    "name": "Bart Verbruggen",
    "country": "NED",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 25,
      "dri": 35,
      "pas": 76,
      "phy": 76,
      "def": 80
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p545",
    "name": "Wout Weghorst",
    "country": "NED",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 81,
      "dri": 79,
      "pas": 79,
      "phy": 79,
      "def": 58
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p546",
    "name": "Mats Wieffer",
    "country": "NED",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 78,
      "pas": 82,
      "phy": 77,
      "def": 74
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p547",
    "name": "Tomoki Hayakawa",
    "country": "JPN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 68,
      "phy": 71,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p548",
    "name": "Keisuke Osako",
    "country": "JPN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 25,
      "dri": 35,
      "pas": 69,
      "phy": 70,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p549",
    "name": "Zion Suzuki",
    "country": "JPN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 70,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p550",
    "name": "Yuto Nagatomo",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 48,
      "dri": 60,
      "pas": 68,
      "phy": 72,
      "def": 74
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p551",
    "name": "Shogo Taniguchi",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 51,
      "dri": 63,
      "pas": 73,
      "phy": 77,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p552",
    "name": "Kou Itakura",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 51,
      "dri": 63,
      "pas": 67,
      "phy": 71,
      "def": 76
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p553",
    "name": "Tsuyoshi Watanabe",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 55,
      "dri": 67,
      "pas": 68,
      "phy": 72,
      "def": 73
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p554",
    "name": "Takehiro Tomiyasu",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 54,
      "dri": 66,
      "pas": 72,
      "phy": 76,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p555",
    "name": "Hiroki Ito",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 72,
      "phy": 76,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p556",
    "name": "Ayumu Seko",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 50,
      "dri": 62,
      "pas": 65,
      "phy": 69,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p557",
    "name": "Yukinari Sugawara",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 70,
      "def": 68
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p558",
    "name": "Junnosuke Suzuki",
    "country": "JPN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 45,
      "dri": 57,
      "pas": 61,
      "phy": 65,
      "def": 70
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p559",
    "name": "Wataru Endo",
    "country": "JPN",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 76,
      "dri": 82,
      "pas": 81,
      "phy": 81,
      "def": 72
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p560",
    "name": "Junya Ito",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 75,
      "pas": 82,
      "phy": 70,
      "def": 63
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p561",
    "name": "Daichi Kamada",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 65,
      "dri": 73,
      "pas": 75,
      "phy": 68,
      "def": 61
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p562",
    "name": "Koki Ogawa",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 71,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p563",
    "name": "Daizen Maeda",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 77,
      "dri": 75,
      "pas": 73,
      "phy": 73,
      "def": 57
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p564",
    "name": "Ritsu Doan",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 64,
      "dri": 69,
      "pas": 71,
      "phy": 66,
      "def": 60
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p565",
    "name": "Ayase Ueda",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 79,
      "dri": 76,
      "pas": 74,
      "phy": 74,
      "def": 53
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p566",
    "name": "Ao Tanaka",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 66,
      "dri": 69,
      "pas": 68,
      "phy": 68,
      "def": 62
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p567",
    "name": "Keito Nakamura",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 62,
      "dri": 65,
      "pas": 69,
      "phy": 64,
      "def": 58
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p568",
    "name": "Kaishu Sano",
    "country": "JPN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 71,
      "pas": 71,
      "phy": 71,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p569",
    "name": "Takefusa Kubo",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 83,
      "tir": 83,
      "dri": 82,
      "pas": 83,
      "phy": 83,
      "def": 60
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p570",
    "name": "Yuito Suzuki",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 77,
      "dri": 71,
      "pas": 68,
      "phy": 68,
      "def": 55
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p571",
    "name": "Kento Shiogai",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 74,
      "dri": 70,
      "pas": 67,
      "phy": 67,
      "def": 51
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p572",
    "name": "Keisuke Goto",
    "country": "JPN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 71,
      "dri": 72,
      "pas": 71,
      "phy": 71,
      "def": 52
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p573",
    "name": "Viktor Johansson",
    "country": "SWE",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 67,
      "tir": 25,
      "dri": 35,
      "pas": 71,
      "phy": 73,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p574",
    "name": "Kristoffer Nordfeldt",
    "country": "SWE",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 68,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p575",
    "name": "Jacob Widell Zetterström",
    "country": "SWE",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 64,
      "phy": 67,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p576",
    "name": "Hjalmar Ekdal",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 74,
      "def": 75
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p577",
    "name": "Gabriel Gudmundsson",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 57,
      "dri": 69,
      "pas": 71,
      "phy": 75,
      "def": 79
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p578",
    "name": "Isak Hien",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 52,
      "dri": 64,
      "pas": 72,
      "phy": 77,
      "def": 82
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p579",
    "name": "Emil Holm",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 68,
      "def": 74
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p580",
    "name": "Gustaf Lagerbielke",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 50,
      "dri": 62,
      "pas": 71,
      "phy": 75,
      "def": 79
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p581",
    "name": "Victor Nilsson Lindelöf",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 70,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p582",
    "name": "Eric Smith",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 46,
      "dri": 58,
      "pas": 66,
      "phy": 71,
      "def": 76
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p583",
    "name": "Carl Starfelt",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 48,
      "dri": 60,
      "pas": 63,
      "phy": 67,
      "def": 70
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p584",
    "name": "Elliot Stroud",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 49,
      "dri": 61,
      "pas": 69,
      "phy": 73,
      "def": 75
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p585",
    "name": "Daniel Svensson",
    "country": "SWE",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 44,
      "dri": 56,
      "pas": 65,
      "phy": 69,
      "def": 71
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p586",
    "name": "Taha Ali",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 69,
      "pas": 69,
      "phy": 69,
      "def": 48
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p587",
    "name": "Yasin Ayari",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 72,
      "dri": 75,
      "pas": 77,
      "phy": 73,
      "def": 68
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p588",
    "name": "Lucas Bergvall",
    "country": "SWE",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 74,
      "dri": 84,
      "pas": 82,
      "phy": 82,
      "def": 70
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p589",
    "name": "Alexander Bernhardsson",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 76,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 52
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p590",
    "name": "Anthony Elanga",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 73,
      "dri": 69,
      "pas": 66,
      "phy": 66,
      "def": 49
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p591",
    "name": "Viktor Gyökeres",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 86,
      "dri": 85,
      "pas": 86,
      "phy": 86,
      "def": 68
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p592",
    "name": "Alexander Isak",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 89,
      "dri": 88,
      "pas": 87,
      "phy": 87,
      "def": 64
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p593",
    "name": "Jesper Karlström",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 68,
      "dri": 74,
      "pas": 76,
      "phy": 71,
      "def": 64
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p594",
    "name": "Gustaf Nilsson",
    "country": "SWE",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 77,
      "tir": 75,
      "dri": 77,
      "pas": 75,
      "phy": 75,
      "def": 54
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p595",
    "name": "Benjamin Nygren",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 72,
      "dri": 71,
      "pas": 75,
      "phy": 71,
      "def": 68
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p596",
    "name": "Ken Sema",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 66,
      "dri": 68,
      "pas": 73,
      "phy": 67,
      "def": 62
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p597",
    "name": "Mattias Svanberg",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 66,
      "dri": 72,
      "pas": 79,
      "phy": 68,
      "def": 62
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p598",
    "name": "Besfort Zeneli",
    "country": "SWE",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 69,
      "dri": 67,
      "pas": 72,
      "phy": 65,
      "def": 65
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p599",
    "name": "Aymen Dahmen",
    "country": "TUN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 53,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 63,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p600",
    "name": "Sadok Ben Hassen",
    "country": "TUN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 63,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p601",
    "name": "Abdessalem Mohamed Chamakh",
    "country": "TUN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 62,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p602",
    "name": "Montassar Talbi",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 47,
      "dri": 59,
      "pas": 68,
      "phy": 72,
      "def": 71
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p603",
    "name": "Dylan Bronn",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 43,
      "dri": 55,
      "pas": 60,
      "phy": 64,
      "def": 70
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p604",
    "name": "Oussama Rekik",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p605",
    "name": "Alaeddine Arous",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 63,
      "phy": 67,
      "def": 67
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p606",
    "name": "Raed Chikhaoui",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 70,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p607",
    "name": "Yassine Valery",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 55,
      "dri": 67,
      "pas": 70,
      "phy": 74,
      "def": 75
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p608",
    "name": "Mohamed Neffati",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p609",
    "name": "Ali Abdi",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 70,
      "phy": 75,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p610",
    "name": "Mohamed Ali Ben Hmida",
    "country": "TUN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 45,
      "dri": 57,
      "pas": 67,
      "phy": 71,
      "def": 70
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p611",
    "name": "Ellyes Skhiri",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 69,
      "dri": 73,
      "pas": 74,
      "phy": 72,
      "def": 65
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p612",
    "name": "Mohamed Ali Ben Romdhane",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 66,
      "dri": 66,
      "pas": 68,
      "phy": 65,
      "def": 62
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p613",
    "name": "Rayan Khedira",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 63,
      "dri": 62,
      "pas": 68,
      "phy": 61,
      "def": 59
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p614",
    "name": "Hannibal Mejbri",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 63,
      "dri": 70,
      "pas": 75,
      "phy": 66,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p615",
    "name": "Anis Ben Slimane",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 59,
      "dri": 67,
      "pas": 67,
      "phy": 64,
      "def": 55
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p616",
    "name": "Mohamed Ben Ouanes",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 63,
      "dri": 71,
      "pas": 72,
      "phy": 68,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p617",
    "name": "Ilies Gharbi",
    "country": "TUN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 66,
      "dri": 74,
      "pas": 80,
      "phy": 69,
      "def": 62
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p618",
    "name": "Kais Ayari",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 78,
      "dri": 74,
      "pas": 72,
      "phy": 72,
      "def": 58
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p619",
    "name": "Seif Tounekti",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 71,
      "dri": 73,
      "pas": 73,
      "phy": 73,
      "def": 56
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p620",
    "name": "Elias Achouri",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 48
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p621",
    "name": "Firas Chaouat",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 66,
      "dri": 65,
      "pas": 61,
      "phy": 61,
      "def": 43
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p622",
    "name": "Hazem Mastouri",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 68,
      "dri": 67,
      "pas": 63,
      "phy": 63,
      "def": 44
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p623",
    "name": "Elias Saad",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 77,
      "dri": 71,
      "pas": 68,
      "phy": 68,
      "def": 56
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p624",
    "name": "Riadh Elloumi",
    "country": "TUN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 65,
      "dri": 65,
      "pas": 64,
      "phy": 64,
      "def": 42
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p625",
    "name": "Thibaut Courtois",
    "country": "BEL",
    "pos": "GK",
    "rarity": "legendaire",
    "stats": {
      "vit": 80,
      "tir": 25,
      "dri": 35,
      "pas": 83,
      "phy": 83,
      "def": 89
    },
    "ovr": 89,
    "price": 480
  },
  {
    "id": "p626",
    "name": "Senne Lammens",
    "country": "BEL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 68,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p627",
    "name": "Mike Penders",
    "country": "BEL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 68,
      "def": 74
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p628",
    "name": "Zeno Debast",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 56,
      "dri": 68,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p629",
    "name": "Arthur Theate",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 57,
      "dri": 69,
      "pas": 75,
      "phy": 80,
      "def": 84
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p630",
    "name": "Koni De Winter",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 58,
      "dri": 70,
      "pas": 74,
      "phy": 78,
      "def": 81
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p631",
    "name": "Brandon Mechele",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 62,
      "dri": 74,
      "pas": 76,
      "phy": 80,
      "def": 83
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p632",
    "name": "Nathan Ngoy",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 62,
      "dri": 74,
      "pas": 76,
      "phy": 80,
      "def": 80
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p633",
    "name": "Thomas Meunier",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 54,
      "dri": 66,
      "pas": 66,
      "phy": 70,
      "def": 75
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p634",
    "name": "Timothy Castagne",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 54,
      "dri": 66,
      "pas": 72,
      "phy": 76,
      "def": 81
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p635",
    "name": "Maxim De Cuyper",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 58,
      "dri": 70,
      "pas": 76,
      "phy": 80,
      "def": 81
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p636",
    "name": "Joaquin Seys",
    "country": "BEL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 58,
      "dri": 70,
      "pas": 73,
      "phy": 77,
      "def": 78
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p637",
    "name": "Kevin De Bruyne",
    "country": "BEL",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 84,
      "dri": 91,
      "pas": 91,
      "phy": 90,
      "def": 80
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p638",
    "name": "Amadou Onana",
    "country": "BEL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 73,
      "dri": 76,
      "pas": 76,
      "phy": 76,
      "def": 69
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p639",
    "name": "Youri Tielemans",
    "country": "BEL",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 77,
      "dri": 84,
      "pas": 88,
      "phy": 80,
      "def": 73
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p640",
    "name": "Hans Vanaken",
    "country": "BEL",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 73,
      "dri": 82,
      "pas": 86,
      "phy": 77,
      "def": 69
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p641",
    "name": "Nicolas Raskin",
    "country": "BEL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 74,
      "dri": 74,
      "pas": 78,
      "phy": 74,
      "def": 70
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p642",
    "name": "Axel Witsel",
    "country": "BEL",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 75,
      "dri": 83,
      "pas": 85,
      "phy": 78,
      "def": 71
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p643",
    "name": "Jérémy Doku",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 83,
      "dri": 85,
      "pas": 85,
      "phy": 85,
      "def": 67
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p644",
    "name": "Leandro Trossard",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 74,
      "dri": 71,
      "pas": 69,
      "phy": 69,
      "def": 53
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p645",
    "name": "Alexis Saelemaekers",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 78,
      "dri": 72,
      "pas": 68,
      "phy": 68,
      "def": 49
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p646",
    "name": "Dodi Lukebakio",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 75,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 51
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p647",
    "name": "Romelu Lukaku",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 87,
      "dri": 86,
      "pas": 83,
      "phy": 83,
      "def": 62
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p648",
    "name": "Charles De Ketelaere",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 71,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 48
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p649",
    "name": "Matías Fernández-Pardo",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 77,
      "pas": 76,
      "phy": 76,
      "def": 53
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p650",
    "name": "Diego Moreira",
    "country": "BEL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 81,
      "dri": 80,
      "pas": 79,
      "phy": 79,
      "def": 57
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p651",
    "name": "Mohamed El Shenawy",
    "country": "EGY",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 65,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p652",
    "name": "Mostafa Chobeir",
    "country": "EGY",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 61,
      "def": 69
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p653",
    "name": "El Mahdi Solimane",
    "country": "EGY",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 65,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p654",
    "name": "Mohamed Ala",
    "country": "EGY",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 58,
      "phy": 58,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p655",
    "name": "Mohamed Hani",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 46,
      "dri": 58,
      "pas": 64,
      "phy": 68,
      "def": 70
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p656",
    "name": "Tarek Ala",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 44,
      "dri": 56,
      "pas": 62,
      "phy": 67,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p657",
    "name": "Hamdi Fathy",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 51,
      "dri": 63,
      "pas": 64,
      "phy": 68,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p658",
    "name": "Ramy Rabia",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 54,
      "dri": 66,
      "pas": 66,
      "phy": 71,
      "def": 73
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p659",
    "name": "Yasser Ibrahim",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 63,
      "phy": 67,
      "def": 65
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p660",
    "name": "Hossam Abdel Majid",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 57,
      "dri": 69,
      "pas": 71,
      "phy": 75,
      "def": 78
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p661",
    "name": "Mohamed Abdel Monem",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 63,
      "phy": 67,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p662",
    "name": "Ahmed Fotouh",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 68,
      "phy": 72,
      "def": 77
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p663",
    "name": "Karim Hafez",
    "country": "EGY",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 55,
      "dri": 67,
      "pas": 69,
      "phy": 74,
      "def": 79
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p664",
    "name": "Marwan Attia",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 74,
      "dri": 71,
      "pas": 78,
      "phy": 70,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p665",
    "name": "Mohand Lasheen",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 70,
      "dri": 70,
      "pas": 74,
      "phy": 68,
      "def": 66
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p666",
    "name": "Nabil Emad Donga",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 70,
      "dri": 69,
      "pas": 72,
      "phy": 66,
      "def": 66
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p667",
    "name": "Mahmoud Saber",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 74,
      "pas": 79,
      "phy": 69,
      "def": 63
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p668",
    "name": "Ahmed Sayed Zizo",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 65,
      "dri": 67,
      "pas": 72,
      "phy": 66,
      "def": 61
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p669",
    "name": "Imam Ashour",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 69,
      "dri": 71,
      "pas": 72,
      "phy": 70,
      "def": 65
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p670",
    "name": "Mostafa Abdel Raouf Ziko",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 70,
      "dri": 73,
      "pas": 73,
      "phy": 73,
      "def": 66
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p671",
    "name": "Mahmoud Trezeguet",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 63,
      "dri": 66,
      "pas": 70,
      "phy": 62,
      "def": 59
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p672",
    "name": "Ibrahim Adel",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 68,
      "dri": 68,
      "pas": 76,
      "phy": 66,
      "def": 64
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p673",
    "name": "Haithem Hassan",
    "country": "EGY",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 64,
      "dri": 70,
      "pas": 71,
      "phy": 69,
      "def": 60
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p674",
    "name": "Mohamed Salah",
    "country": "EGY",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 91,
      "dri": 90,
      "pas": 88,
      "phy": 88,
      "def": 73
    },
    "ovr": 89,
    "price": 480
  },
  {
    "id": "p675",
    "name": "Omar Marmoush",
    "country": "EGY",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 87,
      "dri": 83,
      "pas": 80,
      "phy": 80,
      "def": 62
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p676",
    "name": "Hamza Abdel Karim",
    "country": "EGY",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 73,
      "dri": 68,
      "pas": 66,
      "phy": 66,
      "def": 53
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p677",
    "name": "Alireza Beiranvand",
    "country": "IRN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 66,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p678",
    "name": "Hosein Hoseini",
    "country": "IRN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 66,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p679",
    "name": "Payam Niazmand",
    "country": "IRN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 54,
      "tir": 25,
      "dri": 35,
      "pas": 54,
      "phy": 57,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p680",
    "name": "Shoja Khalilzadeh",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 40,
      "dri": 52,
      "pas": 62,
      "phy": 66,
      "def": 65
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p681",
    "name": "Hosein Kanaani",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 51,
      "dri": 63,
      "pas": 68,
      "phy": 72,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p682",
    "name": "Ali Nemati",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 49,
      "dri": 61,
      "pas": 65,
      "phy": 70,
      "def": 72
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p683",
    "name": "Daniyal Eiri",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p684",
    "name": "Ehsan Hajsafi",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 43,
      "dri": 55,
      "pas": 62,
      "phy": 66,
      "def": 73
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p685",
    "name": "Milad Mohammadi",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 42,
      "dri": 54,
      "pas": 63,
      "phy": 67,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p686",
    "name": "Saleh Hardani",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 62,
      "phy": 66,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p687",
    "name": "Ramin Rezaeiyan",
    "country": "IRN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 40,
      "dri": 52,
      "pas": 62,
      "phy": 66,
      "def": 68
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p688",
    "name": "Saman Ghoddos",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 58,
      "dri": 65,
      "pas": 68,
      "phy": 62,
      "def": 54
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p689",
    "name": "Saeid Ezatolahi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 71,
      "dri": 70,
      "pas": 74,
      "phy": 69,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p690",
    "name": "Rouzbeh Cheshmi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 71,
      "pas": 71,
      "phy": 70,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p691",
    "name": "Amir Mohammad Razagh Nia",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 62,
      "dri": 65,
      "pas": 64,
      "phy": 64,
      "def": 58
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p692",
    "name": "Mohammad Ghorbani",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 62,
      "dri": 72,
      "pas": 71,
      "phy": 69,
      "def": 58
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p693",
    "name": "Mehdi Ghayedi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 73,
      "dri": 73,
      "pas": 74,
      "phy": 72,
      "def": 69
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p694",
    "name": "Ariya Yousefi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 61,
      "dri": 65,
      "pas": 65,
      "phy": 64,
      "def": 57
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p695",
    "name": "Alireza Jahanbakhsh",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 71,
      "dri": 70,
      "pas": 73,
      "phy": 67,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p696",
    "name": "Mehdi Torabi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 68,
      "dri": 71,
      "pas": 74,
      "phy": 70,
      "def": 64
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p697",
    "name": "Mohammad Mohebbi",
    "country": "IRN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 68,
      "dri": 70,
      "pas": 69,
      "phy": 70,
      "def": 64
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p698",
    "name": "Mehdi Taremi",
    "country": "IRN",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 82,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 64
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p699",
    "name": "Amirhossein Hosseinzadeh",
    "country": "IRN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 49
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p700",
    "name": "Denis Dargahi",
    "country": "IRN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 75,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 50
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p701",
    "name": "Ali Alipour",
    "country": "IRN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 76,
      "dri": 74,
      "pas": 72,
      "phy": 72,
      "def": 55
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p702",
    "name": "Shahriyar Moghanloo",
    "country": "IRN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 76,
      "dri": 72,
      "pas": 70,
      "phy": 70,
      "def": 54
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p703",
    "name": "Max Crocombe",
    "country": "NZL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 58,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p704",
    "name": "Alex Paulsen",
    "country": "NZL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 55,
      "def": 61
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p705",
    "name": "Michael Woud",
    "country": "NZL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 48,
      "tir": 25,
      "dri": 35,
      "pas": 51,
      "phy": 57,
      "def": 58
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p706",
    "name": "Tyler Bindon",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 39,
      "dri": 51,
      "pas": 60,
      "phy": 65,
      "def": 68
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p707",
    "name": "Michael Boxall",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 41,
      "dri": 53,
      "pas": 55,
      "phy": 60,
      "def": 64
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p708",
    "name": "Liberato Cacace",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 48,
      "dri": 60,
      "pas": 59,
      "phy": 64,
      "def": 69
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p709",
    "name": "Francis De Vries",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 44,
      "dri": 56,
      "pas": 57,
      "phy": 62,
      "def": 65
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p710",
    "name": "Callan Elliot",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 47,
      "dri": 59,
      "pas": 65,
      "phy": 69,
      "def": 71
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p711",
    "name": "Tim Payne",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 47,
      "dri": 59,
      "pas": 63,
      "phy": 67,
      "def": 72
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p712",
    "name": "Nando Pijnaker",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 44,
      "dri": 56,
      "pas": 59,
      "phy": 64,
      "def": 69
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p713",
    "name": "Tommy Smith",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 42,
      "dri": 54,
      "pas": 56,
      "phy": 61,
      "def": 61
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p714",
    "name": "Finn Surman",
    "country": "NZL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 45,
      "dri": 57,
      "pas": 61,
      "phy": 65,
      "def": 64
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p715",
    "name": "Lachlan Bayliss",
    "country": "NZL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 55,
      "dri": 61,
      "pas": 62,
      "phy": 60,
      "def": 51
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p716",
    "name": "Joe Bell",
    "country": "NZL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 66,
      "dri": 68,
      "pas": 70,
      "phy": 65,
      "def": 62
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p717",
    "name": "Alex Rufer",
    "country": "NZL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 52,
      "dri": 61,
      "pas": 62,
      "phy": 60,
      "def": 48
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p718",
    "name": "Marko Stamenić",
    "country": "NZL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 67,
      "dri": 66,
      "pas": 68,
      "phy": 68,
      "def": 63
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p719",
    "name": "Ryan Thomas",
    "country": "NZL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 62,
      "dri": 68,
      "pas": 71,
      "phy": 64,
      "def": 58
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p720",
    "name": "Kosta Barbarouses",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 63,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 46
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p721",
    "name": "Matt Garbett",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 66,
      "dri": 59,
      "pas": 56,
      "phy": 56,
      "def": 41
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p722",
    "name": "Eli Just",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 73,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 51
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p723",
    "name": "Callum McCowatt",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 66,
      "dri": 68,
      "pas": 66,
      "phy": 66,
      "def": 44
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p724",
    "name": "Ben Old",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 63,
      "dri": 62,
      "pas": 60,
      "phy": 60,
      "def": 46
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p725",
    "name": "Jesse Randall",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 62,
      "dri": 62,
      "pas": 59,
      "phy": 59,
      "def": 42
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p726",
    "name": "Sarpreet Singh",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 74,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 48
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p727",
    "name": "Ben Waine",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 69,
      "dri": 64,
      "pas": 60,
      "phy": 60,
      "def": 41
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p728",
    "name": "Chris Wood",
    "country": "NZL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 82,
      "dri": 78,
      "pas": 74,
      "phy": 74,
      "def": 58
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p729",
    "name": "Unai Simón",
    "country": "ESP",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 75,
      "tir": 25,
      "dri": 35,
      "pas": 77,
      "phy": 82,
      "def": 86
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p730",
    "name": "David Raya",
    "country": "ESP",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 77,
      "tir": 25,
      "dri": 35,
      "pas": 77,
      "phy": 76,
      "def": 85
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p731",
    "name": "Joan García",
    "country": "ESP",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 25,
      "dri": 35,
      "pas": 66,
      "phy": 65,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p732",
    "name": "Pedro Porro",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 50,
      "dri": 62,
      "pas": 70,
      "phy": 74,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p733",
    "name": "Marcos Llorente",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 58,
      "dri": 70,
      "pas": 72,
      "phy": 76,
      "def": 77
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p734",
    "name": "Aymeric Laporte",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 62,
      "dri": 74,
      "pas": 83,
      "phy": 87,
      "def": 92
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p735",
    "name": "Pau Cubarsí",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 80,
      "tir": 65,
      "dri": 77,
      "pas": 80,
      "phy": 84,
      "def": 91
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p736",
    "name": "Marc Pubill",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 54,
      "dri": 66,
      "pas": 73,
      "phy": 77,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p737",
    "name": "Eric García",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 52,
      "dri": 64,
      "pas": 72,
      "phy": 77,
      "def": 81
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p738",
    "name": "Marc Cucurella",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 66,
      "dri": 78,
      "pas": 79,
      "phy": 83,
      "def": 85
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p739",
    "name": "Alejandro Grimaldo",
    "country": "ESP",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 52,
      "dri": 64,
      "pas": 71,
      "phy": 75,
      "def": 76
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p740",
    "name": "Rodri",
    "country": "ESP",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 92,
      "tir": 84,
      "dri": 93,
      "pas": 96,
      "phy": 88,
      "def": 80
    },
    "ovr": 90,
    "price": 490
  },
  {
    "id": "p741",
    "name": "Martín Zubimendi",
    "country": "ESP",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 78,
      "pas": 78,
      "phy": 77,
      "def": 74
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p742",
    "name": "Pedri",
    "country": "ESP",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 87,
      "tir": 89,
      "dri": 88,
      "pas": 91,
      "phy": 87,
      "def": 85
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p743",
    "name": "Fabián Ruiz",
    "country": "ESP",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 68,
      "dri": 75,
      "pas": 79,
      "phy": 71,
      "def": 64
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p744",
    "name": "Mikel Merino",
    "country": "ESP",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 82,
      "dri": 86,
      "pas": 85,
      "phy": 85,
      "def": 78
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p745",
    "name": "Gavi",
    "country": "ESP",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 77,
      "dri": 85,
      "pas": 88,
      "phy": 84,
      "def": 73
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p746",
    "name": "Álex Baena",
    "country": "ESP",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 73,
      "dri": 75,
      "pas": 78,
      "phy": 74,
      "def": 69
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p747",
    "name": "Mikel Oyarzabal",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 80,
      "dri": 77,
      "pas": 72,
      "phy": 72,
      "def": 53
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p748",
    "name": "Lamine Yamal",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 91,
      "dri": 89,
      "pas": 85,
      "phy": 85,
      "def": 66
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p749",
    "name": "Ferran Torres",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 78,
      "dri": 75,
      "pas": 74,
      "phy": 74,
      "def": 57
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p750",
    "name": "Borja Iglesias",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 85,
      "dri": 83,
      "pas": 80,
      "phy": 80,
      "def": 66
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p751",
    "name": "Dani Olmo",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 90,
      "dri": 86,
      "pas": 83,
      "phy": 83,
      "def": 63
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p752",
    "name": "Víctor Muñoz",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 83,
      "dri": 86,
      "pas": 85,
      "phy": 85,
      "def": 61
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p753",
    "name": "Nico Williams",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 89,
      "dri": 88,
      "pas": 86,
      "phy": 86,
      "def": 70
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p754",
    "name": "Yeremy Pino",
    "country": "ESP",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 83,
      "dri": 81,
      "pas": 81,
      "phy": 81,
      "def": 65
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p755",
    "name": "Vozinha",
    "country": "CPV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 62,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p756",
    "name": "Márcio da Rosa",
    "country": "CPV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 53,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 63,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p757",
    "name": "Carlos Santos",
    "country": "CPV",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 59,
      "def": 64
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p758",
    "name": "Steven Moreira",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 45,
      "dri": 57,
      "pas": 60,
      "phy": 65,
      "def": 70
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p759",
    "name": "Wagner Pina",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 37,
      "dri": 49,
      "pas": 56,
      "phy": 60,
      "def": 67
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p760",
    "name": "João Paulo Fernandes",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 43,
      "dri": 55,
      "pas": 56,
      "phy": 60,
      "def": 62
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p761",
    "name": "Sidny Cabral",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 40,
      "dri": 52,
      "pas": 56,
      "phy": 61,
      "def": 63
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p762",
    "name": "Logan Costa",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 40,
      "dri": 52,
      "pas": 57,
      "phy": 61,
      "def": 63
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p763",
    "name": "Roberto Lopes \"Pico\"",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 42,
      "dri": 54,
      "pas": 58,
      "phy": 63,
      "def": 65
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p764",
    "name": "Kelvin Pires",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 42,
      "dri": 54,
      "pas": 58,
      "phy": 62,
      "def": 67
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p765",
    "name": "Stopira",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 43,
      "dri": 55,
      "pas": 57,
      "phy": 61,
      "def": 63
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p766",
    "name": "Edilson Borges \"Diney\"",
    "country": "CPV",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 44,
      "dri": 56,
      "pas": 62,
      "phy": 66,
      "def": 64
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p767",
    "name": "Jamiro Monteiro",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 56,
      "dri": 65,
      "pas": 69,
      "phy": 60,
      "def": 52
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p768",
    "name": "Telmo Arcanjo",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 60,
      "dri": 65,
      "pas": 66,
      "phy": 63,
      "def": 56
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p769",
    "name": "Yannick Semedo",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 58,
      "dri": 65,
      "pas": 68,
      "phy": 62,
      "def": 54
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p770",
    "name": "Laros Duarte",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 55,
      "dri": 60,
      "pas": 61,
      "phy": 57,
      "def": 51
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p771",
    "name": "Deroy Duarte",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 61,
      "dri": 63,
      "pas": 69,
      "phy": 61,
      "def": 57
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p772",
    "name": "Kevin Pina",
    "country": "CPV",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 61,
      "dri": 64,
      "pas": 63,
      "phy": 63,
      "def": 57
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p773",
    "name": "Ryan Mendes",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 68,
      "pas": 69,
      "phy": 69,
      "def": 46
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p774",
    "name": "Willy Semedo",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 68,
      "dri": 62,
      "pas": 60,
      "phy": 60,
      "def": 43
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p775",
    "name": "Garry Rodrigues",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 64,
      "dri": 64,
      "pas": 62,
      "phy": 62,
      "def": 44
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p776",
    "name": "Jovane Cabral",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 64,
      "dri": 66,
      "pas": 64,
      "phy": 64,
      "def": 43
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p777",
    "name": "Nuno da Costa",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 58,
      "dri": 61,
      "pas": 60,
      "phy": 60,
      "def": 37
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p778",
    "name": "Dailon Livramento",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 65,
      "dri": 64,
      "pas": 65,
      "phy": 65,
      "def": 44
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p779",
    "name": "Gilson Benchimol",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 66,
      "dri": 62,
      "pas": 58,
      "phy": 58,
      "def": 43
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p780",
    "name": "Hélio Varela",
    "country": "CPV",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 67,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 46
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p781",
    "name": "Ahmed Alkassar",
    "country": "KSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 58,
      "phy": 63,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p782",
    "name": "Mohammed Alowais",
    "country": "KSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 64,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p783",
    "name": "Nawaf Alaqidi",
    "country": "KSA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 55,
      "phy": 62,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p784",
    "name": "Saud Abdulhamid",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p785",
    "name": "Jehad Thikri",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 43,
      "dri": 55,
      "pas": 63,
      "phy": 67,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p786",
    "name": "Abdulelah Alamri",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 54,
      "dri": 66,
      "pas": 71,
      "phy": 74,
      "def": 75
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p787",
    "name": "Hassan Altambakti",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 49,
      "dri": 61,
      "pas": 69,
      "phy": 73,
      "def": 80
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p788",
    "name": "Ali Lajami",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 44,
      "dri": 56,
      "pas": 65,
      "phy": 69,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p789",
    "name": "Hassan Kadesh",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 43,
      "dri": 55,
      "pas": 62,
      "phy": 66,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p790",
    "name": "Moteb Alharbi",
    "country": "KSA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 48,
      "dri": 60,
      "pas": 64,
      "phy": 68,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p791",
    "name": "Ali Majrashi",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 58,
      "dri": 66,
      "pas": 72,
      "phy": 62,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p792",
    "name": "Mohammed Abu Alshamat",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 67,
      "dri": 72,
      "pas": 77,
      "phy": 69,
      "def": 63
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p793",
    "name": "Ziyad Aljohani",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 63,
      "dri": 62,
      "pas": 65,
      "phy": 62,
      "def": 59
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p794",
    "name": "Nasser Aldawsari",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 68,
      "dri": 74,
      "pas": 76,
      "phy": 72,
      "def": 64
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p795",
    "name": "Mohammed Kanno",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 65,
      "dri": 69,
      "pas": 72,
      "phy": 68,
      "def": 61
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p796",
    "name": "Abdullah Alkhaibari",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 69,
      "dri": 72,
      "pas": 73,
      "phy": 71,
      "def": 65
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p797",
    "name": "Nawaf Buwashl",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 69,
      "dri": 69,
      "pas": 70,
      "phy": 69,
      "def": 65
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p798",
    "name": "Abdullah Alhamddan",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 62,
      "dri": 69,
      "pas": 74,
      "phy": 65,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p799",
    "name": "Khalid Alghannam",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 61,
      "dri": 67,
      "pas": 68,
      "phy": 65,
      "def": 57
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p800",
    "name": "Ala Alhajji",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 62,
      "dri": 71,
      "pas": 72,
      "phy": 70,
      "def": 58
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p801",
    "name": "Musab Aljuwayr",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 60,
      "dri": 69,
      "pas": 70,
      "phy": 67,
      "def": 56
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p802",
    "name": "Sultan Mandash",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 72,
      "pas": 71,
      "phy": 72,
      "def": 66
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p803",
    "name": "Aiman Yahya",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 58,
      "dri": 67,
      "pas": 69,
      "phy": 63,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p804",
    "name": "Salem Aldawsari",
    "country": "KSA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 67,
      "dri": 74,
      "pas": 79,
      "phy": 70,
      "def": 63
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p805",
    "name": "Feras Albrikan",
    "country": "KSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 77,
      "dri": 72,
      "pas": 68,
      "phy": 68,
      "def": 52
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p806",
    "name": "Saleh Alshehri",
    "country": "KSA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 66,
      "dri": 66,
      "pas": 64,
      "phy": 64,
      "def": 47
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p807",
    "name": "Sergio Rochet",
    "country": "URU",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 71,
      "tir": 25,
      "dri": 35,
      "pas": 72,
      "phy": 71,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p808",
    "name": "Fernando Muslera",
    "country": "URU",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 67,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 70,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p809",
    "name": "Santiago Mele",
    "country": "URU",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 71,
      "tir": 25,
      "dri": 35,
      "pas": 71,
      "phy": 73,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p810",
    "name": "Guillermo Varela",
    "country": "URU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 52,
      "dri": 64,
      "pas": 66,
      "phy": 70,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p811",
    "name": "Ronald Araújo",
    "country": "URU",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 66,
      "dri": 78,
      "pas": 83,
      "phy": 87,
      "def": 92
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p812",
    "name": "José María Giménez",
    "country": "URU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 54,
      "dri": 66,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p813",
    "name": "Santiago Bueno",
    "country": "URU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 49,
      "dri": 61,
      "pas": 71,
      "phy": 75,
      "def": 74
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p814",
    "name": "Sebastián Cáceres",
    "country": "URU",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 57,
      "dri": 69,
      "pas": 75,
      "phy": 79,
      "def": 85
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p815",
    "name": "Mathías Olivera",
    "country": "URU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 52,
      "dri": 64,
      "pas": 73,
      "phy": 77,
      "def": 82
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p816",
    "name": "Joaquín Piquerez",
    "country": "URU",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 58,
      "dri": 70,
      "pas": 71,
      "phy": 75,
      "def": 80
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p817",
    "name": "Matías Viña",
    "country": "URU",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 56,
      "dri": 68,
      "pas": 76,
      "phy": 80,
      "def": 84
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p818",
    "name": "Manuel Ugarte",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 68,
      "dri": 74,
      "pas": 75,
      "phy": 72,
      "def": 64
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p819",
    "name": "Emiliano Martínez",
    "country": "URU",
    "pos": "GK",
    "rarity": "legendaire",
    "stats": {
      "vit": 80,
      "tir": 25,
      "dri": 35,
      "pas": 81,
      "phy": 85,
      "def": 88
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p820",
    "name": "Rodrigo Bentancur",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 72,
      "pas": 77,
      "phy": 71,
      "def": 66
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p821",
    "name": "Federico Valverde",
    "country": "URU",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 89,
      "tir": 83,
      "dri": 91,
      "pas": 91,
      "phy": 89,
      "def": 79
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p822",
    "name": "Agustín Canobbio",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 71,
      "dri": 71,
      "pas": 71,
      "phy": 71,
      "def": 67
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p823",
    "name": "Juan Manuel Sanabria",
    "country": "URU",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 72,
      "dri": 78,
      "pas": 79,
      "phy": 76,
      "def": 68
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p824",
    "name": "Giorgian De Arrascaeta",
    "country": "URU",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 76,
      "dri": 80,
      "pas": 77,
      "phy": 79,
      "def": 72
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p825",
    "name": "Nicolás De la Cruz",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 72,
      "dri": 73,
      "pas": 78,
      "phy": 71,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p826",
    "name": "Rodrigo Zalazar",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 71,
      "dri": 75,
      "pas": 76,
      "phy": 75,
      "def": 67
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p827",
    "name": "Facundo Pellistri",
    "country": "URU",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 74,
      "dri": 80,
      "pas": 83,
      "phy": 76,
      "def": 70
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p828",
    "name": "Maximiliano Araújo",
    "country": "URU",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 72,
      "dri": 80,
      "pas": 79,
      "phy": 79,
      "def": 68
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p829",
    "name": "Brian Rodríguez",
    "country": "URU",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 65,
      "dri": 74,
      "pas": 78,
      "phy": 68,
      "def": 61
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p830",
    "name": "Rodrigo Aguirre",
    "country": "URU",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 73,
      "dri": 76,
      "pas": 75,
      "phy": 75,
      "def": 53
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p831",
    "name": "Federico Viñas",
    "country": "URU",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 75,
      "dri": 73,
      "pas": 68,
      "phy": 68,
      "def": 55
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p832",
    "name": "Darwin Núñez",
    "country": "URU",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 88,
      "dri": 83,
      "pas": 81,
      "phy": 81,
      "def": 67
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p833",
    "name": "Mike Maignan",
    "country": "FRA",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 75,
      "tir": 25,
      "dri": 35,
      "pas": 78,
      "phy": 86,
      "def": 87
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p834",
    "name": "Robin Risser",
    "country": "FRA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 66,
      "def": 74
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p835",
    "name": "Brice Samba",
    "country": "FRA",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 71,
      "tir": 25,
      "dri": 35,
      "pas": 75,
      "phy": 77,
      "def": 80
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p836",
    "name": "Lucas Digne",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 59,
      "dri": 71,
      "pas": 78,
      "phy": 83,
      "def": 86
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p837",
    "name": "Malo Gusto",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 66,
      "dri": 78,
      "pas": 80,
      "phy": 84,
      "def": 86
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p838",
    "name": "Lucas Hernandez",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 68,
      "dri": 80,
      "pas": 82,
      "phy": 86,
      "def": 88
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p839",
    "name": "Théo Hernandez",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 64,
      "dri": 76,
      "pas": 85,
      "phy": 89,
      "def": 88
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p840",
    "name": "Ibrahima Konaté",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 64,
      "dri": 76,
      "pas": 84,
      "phy": 88,
      "def": 92
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p841",
    "name": "Jules Koundé",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 69,
      "dri": 81,
      "pas": 84,
      "phy": 88,
      "def": 91
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p842",
    "name": "Maxence Lacroix",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 62,
      "dri": 74,
      "pas": 79,
      "phy": 84,
      "def": 86
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p843",
    "name": "William Saliba",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 70,
      "dri": 82,
      "pas": 86,
      "phy": 90,
      "def": 89
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p844",
    "name": "Dayot Upamecano",
    "country": "FRA",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 64,
      "dri": 76,
      "pas": 82,
      "phy": 87,
      "def": 91
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p845",
    "name": "N'Golo Kanté",
    "country": "FRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 83,
      "dri": 86,
      "pas": 86,
      "phy": 85,
      "def": 79
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p846",
    "name": "Manu Koné",
    "country": "FRA",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 75,
      "dri": 84,
      "pas": 88,
      "phy": 79,
      "def": 71
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p847",
    "name": "Adrien Rabiot",
    "country": "FRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 77,
      "dri": 85,
      "pas": 91,
      "phy": 80,
      "def": 73
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p848",
    "name": "Aurélien Tchouaméni",
    "country": "FRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 80,
      "dri": 89,
      "pas": 89,
      "phy": 88,
      "def": 76
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p849",
    "name": "Warren Zaïre-Emery",
    "country": "FRA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 79,
      "dri": 83,
      "pas": 88,
      "phy": 79,
      "def": 75
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p850",
    "name": "Maghnes Akliouche",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 78,
      "dri": 80,
      "pas": 80,
      "phy": 80,
      "def": 60
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p851",
    "name": "Bradley Barcola",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 85,
      "dri": 85,
      "pas": 85,
      "phy": 85,
      "def": 61
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p852",
    "name": "Rayan Cherki",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 82,
      "dri": 84,
      "pas": 84,
      "phy": 84,
      "def": 67
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p853",
    "name": "Ousmane Dembélé",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 90,
      "dri": 90,
      "pas": 88,
      "phy": 88,
      "def": 73
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p854",
    "name": "Désiré Doué",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 84,
      "dri": 83,
      "pas": 79,
      "phy": 79,
      "def": 64
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p855",
    "name": "Jean-Philippe Mateta",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 86,
      "dri": 81,
      "pas": 77,
      "phy": 77,
      "def": 58
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p856",
    "name": "Kylian Mbappé",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 92,
      "tir": 98,
      "dri": 92,
      "pas": 90,
      "phy": 90,
      "def": 73
    },
    "ovr": 92,
    "price": 515
  },
  {
    "id": "p857",
    "name": "Michael Olise",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 86,
      "dri": 86,
      "pas": 84,
      "phy": 84,
      "def": 69
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p858",
    "name": "Marcus Thuram",
    "country": "FRA",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 85,
      "dri": 86,
      "pas": 85,
      "phy": 85,
      "def": 69
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p859",
    "name": "Edouard Mendy",
    "country": "SEN",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 73,
      "tir": 25,
      "dri": 35,
      "pas": 75,
      "phy": 80,
      "def": 84
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p860",
    "name": "Mory Diaw",
    "country": "SEN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 64,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p861",
    "name": "Yehvann Diouf",
    "country": "SEN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 63,
      "def": 69
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p862",
    "name": "Kalidou Koulibaly",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 67,
      "dri": 79,
      "pas": 81,
      "phy": 86,
      "def": 86
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p863",
    "name": "Moussa Niakhaté",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 45,
      "dri": 57,
      "pas": 62,
      "phy": 67,
      "def": 69
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p864",
    "name": "Mamadou Sarr",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 61,
      "phy": 65,
      "def": 70
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p865",
    "name": "Abdoulaye Seck",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 51,
      "dri": 63,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p866",
    "name": "Krépin Diatta",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 45,
      "dri": 57,
      "pas": 65,
      "phy": 69,
      "def": 76
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p867",
    "name": "Antoine Mendy",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 52,
      "dri": 64,
      "pas": 74,
      "phy": 78,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p868",
    "name": "Ismail Jakobs",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 54,
      "dri": 66,
      "pas": 71,
      "phy": 76,
      "def": 80
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p869",
    "name": "El Hadji Malick Diouf",
    "country": "SEN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 48,
      "dri": 60,
      "pas": 67,
      "phy": 71,
      "def": 74
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p870",
    "name": "Idrissa Gana Gueye",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 70,
      "dri": 68,
      "pas": 72,
      "phy": 67,
      "def": 66
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p871",
    "name": "Lamine Camara",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 67,
      "dri": 76,
      "pas": 78,
      "phy": 75,
      "def": 63
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p872",
    "name": "Pape Gueye",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 64,
      "dri": 65,
      "pas": 69,
      "phy": 64,
      "def": 60
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p873",
    "name": "Pape Matar Sarr",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 72,
      "dri": 73,
      "pas": 79,
      "phy": 70,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p874",
    "name": "Habib Diarra",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 74,
      "pas": 74,
      "phy": 75,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p875",
    "name": "Bara Sapoko Ndiaye",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 72,
      "dri": 76,
      "pas": 73,
      "phy": 75,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p876",
    "name": "Pathé Ciss",
    "country": "SEN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 61,
      "dri": 70,
      "pas": 73,
      "phy": 66,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p877",
    "name": "Sadio Mané",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 86,
      "dri": 88,
      "pas": 86,
      "phy": 86,
      "def": 63
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p878",
    "name": "Ismaïla Sarr",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 75,
      "dri": 75,
      "pas": 73,
      "phy": 73,
      "def": 53
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p879",
    "name": "Iliman Ndiaye",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 76,
      "dri": 78,
      "pas": 78,
      "phy": 78,
      "def": 60
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p880",
    "name": "Nicolas Jackson",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 84,
      "dri": 83,
      "pas": 83,
      "phy": 83,
      "def": 66
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p881",
    "name": "Cherif Ndiaye",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 70,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 53
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p882",
    "name": "Bamba Dieng",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 50
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p883",
    "name": "Ibrahim Mbaye",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 75,
      "dri": 70,
      "pas": 67,
      "phy": 67,
      "def": 47
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p884",
    "name": "Assane Diao",
    "country": "SEN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 72,
      "dri": 67,
      "pas": 63,
      "phy": 63,
      "def": 47
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p885",
    "name": "Fahad Talib",
    "country": "IRQ",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 54,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 60,
      "def": 62
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p886",
    "name": "Jalal Hassan",
    "country": "IRQ",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 61,
      "def": 64
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p887",
    "name": "Ahmed Basil",
    "country": "IRQ",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 54,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 53,
      "def": 59
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p888",
    "name": "Hussein Ali",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 42,
      "dri": 54,
      "pas": 61,
      "phy": 65,
      "def": 67
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p889",
    "name": "Manaf Younis",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 46,
      "dri": 58,
      "pas": 64,
      "phy": 68,
      "def": 74
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p890",
    "name": "Zaid Tahseen",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 39,
      "dri": 51,
      "pas": 60,
      "phy": 64,
      "def": 66
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p891",
    "name": "Rebin Sulaka",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 43,
      "dri": 55,
      "pas": 63,
      "phy": 67,
      "def": 67
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p892",
    "name": "Akam Hashem",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 47,
      "dri": 59,
      "pas": 68,
      "phy": 72,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p893",
    "name": "Merchas Doski",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 42,
      "dri": 54,
      "pas": 59,
      "phy": 63,
      "def": 63
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p894",
    "name": "Ahmed Yahya",
    "country": "IRQ",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 40,
      "dri": 52,
      "pas": 58,
      "phy": 62,
      "def": 66
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p895",
    "name": "Zaid Ismail",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 62,
      "dri": 62,
      "pas": 66,
      "phy": 61,
      "def": 58
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p896",
    "name": "Amir Al Ammari",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 54,
      "dri": 62,
      "pas": 63,
      "phy": 59,
      "def": 50
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p897",
    "name": "Kevin Yakob",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 60,
      "dri": 62,
      "pas": 65,
      "phy": 61,
      "def": 56
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p898",
    "name": "Zidane Iqbal",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 61,
      "dri": 70,
      "pas": 71,
      "phy": 67,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p899",
    "name": "Aimar Sher",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 59,
      "dri": 66,
      "pas": 67,
      "phy": 65,
      "def": 55
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p900",
    "name": "Frans Putros",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 69,
      "pas": 72,
      "phy": 69,
      "def": 66
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p901",
    "name": "Mustafa Saadoon",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 55,
      "dri": 60,
      "pas": 67,
      "phy": 56,
      "def": 51
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p902",
    "name": "Youssef Amyn",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 59,
      "dri": 64,
      "pas": 69,
      "phy": 62,
      "def": 55
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p903",
    "name": "Ibrahim Bayesh",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 64,
      "dri": 71,
      "pas": 71,
      "phy": 70,
      "def": 60
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p904",
    "name": "Ahmed Qasim",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 60,
      "dri": 60,
      "pas": 68,
      "phy": 58,
      "def": 56
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p905",
    "name": "Marko Farji",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 60,
      "dri": 61,
      "pas": 61,
      "phy": 60,
      "def": 56
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p906",
    "name": "Ali Jassim",
    "country": "IRQ",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 61,
      "dri": 70,
      "pas": 73,
      "phy": 65,
      "def": 57
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p907",
    "name": "Ali Al Hamadi",
    "country": "IRQ",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 64,
      "dri": 62,
      "pas": 62,
      "phy": 62,
      "def": 46
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p908",
    "name": "Ali Yousef",
    "country": "IRQ",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 67,
      "dri": 63,
      "pas": 59,
      "phy": 59,
      "def": 43
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p909",
    "name": "Aymen Hussein",
    "country": "IRQ",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 75,
      "dri": 70,
      "pas": 68,
      "phy": 68,
      "def": 55
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p910",
    "name": "Mohanad Ali",
    "country": "IRQ",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 68,
      "dri": 67,
      "pas": 64,
      "phy": 64,
      "def": 43
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p911",
    "name": "Ørjan Håskjold Nyland",
    "country": "NOR",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 67,
      "phy": 70,
      "def": 76
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p912",
    "name": "Egil Selvik",
    "country": "NOR",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 70,
      "tir": 25,
      "dri": 35,
      "pas": 72,
      "phy": 70,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p913",
    "name": "Sander Tangvik",
    "country": "NOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 57,
      "tir": 25,
      "dri": 35,
      "pas": 61,
      "phy": 64,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p914",
    "name": "Kristoffer Vassbakk Ajer",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 57,
      "dri": 69,
      "pas": 70,
      "phy": 74,
      "def": 80
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p915",
    "name": "Fredrik Bjørkan",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 50,
      "dri": 62,
      "pas": 69,
      "phy": 73,
      "def": 75
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p916",
    "name": "Henrik Falchener",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 52,
      "dri": 64,
      "pas": 67,
      "phy": 72,
      "def": 73
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p917",
    "name": "Sondre Langås",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 74,
      "tir": 60,
      "dri": 72,
      "pas": 74,
      "phy": 78,
      "def": 81
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p918",
    "name": "Torbjørn Heggem",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 54,
      "dri": 66,
      "pas": 67,
      "phy": 71,
      "def": 74
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p919",
    "name": "Marcus Holmgren Pedersen",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 52,
      "dri": 64,
      "pas": 73,
      "phy": 77,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p920",
    "name": "Julian Ryerson",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 49,
      "dri": 61,
      "pas": 68,
      "phy": 72,
      "def": 79
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p921",
    "name": "David Møller Wolfe",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 56,
      "dri": 68,
      "pas": 72,
      "phy": 76,
      "def": 76
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p922",
    "name": "Leo Østigård",
    "country": "NOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 58,
      "dri": 70,
      "pas": 72,
      "phy": 76,
      "def": 76
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p923",
    "name": "Thelonious Aasgaard",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 63,
      "dri": 70,
      "pas": 73,
      "phy": 67,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p924",
    "name": "Fredrik Aursnes",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 71,
      "dri": 74,
      "pas": 77,
      "phy": 71,
      "def": 67
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p925",
    "name": "Patrick Berg",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 68,
      "dri": 73,
      "pas": 73,
      "phy": 72,
      "def": 64
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p926",
    "name": "Sander Berge",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 72,
      "dri": 71,
      "pas": 74,
      "phy": 68,
      "def": 68
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p927",
    "name": "Oscar Bobb",
    "country": "NOR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 78,
      "pas": 78,
      "phy": 79,
      "def": 74
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p928",
    "name": "Jens Petter Hauge",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 67,
      "dri": 68,
      "pas": 69,
      "phy": 69,
      "def": 63
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p929",
    "name": "Antonio Nusa",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 71,
      "pas": 76,
      "phy": 69,
      "def": 62
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p930",
    "name": "Andreas Schjelderup",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 67,
      "dri": 74,
      "pas": 78,
      "phy": 70,
      "def": 63
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p931",
    "name": "Morten Thorsby",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 70,
      "dri": 76,
      "pas": 78,
      "phy": 73,
      "def": 66
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p932",
    "name": "Kristian Thorstvedt",
    "country": "NOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 74,
      "dri": 71,
      "pas": 78,
      "phy": 70,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p933",
    "name": "Martin Ødegaard",
    "country": "NOR",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 86,
      "tir": 89,
      "dri": 87,
      "pas": 93,
      "phy": 86,
      "def": 85
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p934",
    "name": "Erling Braut Haaland",
    "country": "NOR",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 92,
      "tir": 96,
      "dri": 92,
      "pas": 88,
      "phy": 88,
      "def": 72
    },
    "ovr": 91,
    "price": 505
  },
  {
    "id": "p935",
    "name": "Jørgen Strand Larsen",
    "country": "NOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 70,
      "pas": 67,
      "phy": 67,
      "def": 50
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p936",
    "name": "Alexander Sørloth",
    "country": "NOR",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 85,
      "dri": 83,
      "pas": 81,
      "phy": 81,
      "def": 66
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p937",
    "name": "Juan Musso",
    "country": "ARG",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 65,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 68,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p938",
    "name": "Leonardo Balerdi",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 57,
      "dri": 69,
      "pas": 76,
      "phy": 80,
      "def": 87
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p939",
    "name": "Nicolás Tagliafico",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 60,
      "dri": 72,
      "pas": 73,
      "phy": 77,
      "def": 79
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p940",
    "name": "Gonzalo Montiel",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 57,
      "dri": 69,
      "pas": 72,
      "phy": 76,
      "def": 80
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p941",
    "name": "Leandro Paredes",
    "country": "ARG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 75,
      "dri": 83,
      "pas": 86,
      "phy": 82,
      "def": 71
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p942",
    "name": "Lisandro Martínez",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 69,
      "dri": 81,
      "pas": 84,
      "phy": 88,
      "def": 86
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p943",
    "name": "Rodrigo De Paul",
    "country": "ARG",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 78,
      "dri": 87,
      "pas": 90,
      "phy": 83,
      "def": 74
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p944",
    "name": "Valentín Barco",
    "country": "ARG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 79,
      "dri": 79,
      "pas": 83,
      "phy": 76,
      "def": 75
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p945",
    "name": "Julián Álvarez",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 89,
      "tir": 86,
      "dri": 89,
      "pas": 88,
      "phy": 88,
      "def": 66
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p946",
    "name": "Lionel Messi",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 94,
      "dri": 91,
      "pas": 88,
      "phy": 88,
      "def": 74
    },
    "ovr": 90,
    "price": 490
  },
  {
    "id": "p947",
    "name": "Giovani Lo Celso",
    "country": "ARG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 73,
      "dri": 81,
      "pas": 87,
      "phy": 77,
      "def": 69
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p948",
    "name": "Gerónimo Rulli",
    "country": "ARG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 68,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p949",
    "name": "Cristian Romero",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 70,
      "dri": 82,
      "pas": 83,
      "phy": 87,
      "def": 90
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p950",
    "name": "Exequiel Palacios",
    "country": "ARG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 68,
      "dri": 74,
      "pas": 81,
      "phy": 71,
      "def": 64
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p951",
    "name": "Nicolás González",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 75,
      "dri": 74,
      "pas": 75,
      "phy": 75,
      "def": 52
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p952",
    "name": "Thiago Almada",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 84,
      "dri": 79,
      "pas": 75,
      "phy": 75,
      "def": 57
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p953",
    "name": "Giuliano Simeone",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 77,
      "pas": 73,
      "phy": 73,
      "def": 55
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p954",
    "name": "Nicolás Paz",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 83,
      "dri": 86,
      "pas": 85,
      "phy": 85,
      "def": 61
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p955",
    "name": "Nicolás Otamendi",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 63,
      "dri": 75,
      "pas": 80,
      "phy": 84,
      "def": 85
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p956",
    "name": "Alexis Mac Allister",
    "country": "ARG",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 80,
      "dri": 86,
      "pas": 91,
      "phy": 85,
      "def": 76
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p957",
    "name": "José Manuel López",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 61,
      "dri": 73,
      "pas": 79,
      "phy": 83,
      "def": 82
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p958",
    "name": "Lautaro Martínez",
    "country": "ARG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 90,
      "tir": 86,
      "dri": 90,
      "pas": 89,
      "phy": 89,
      "def": 69
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p959",
    "name": "Emiliano Martínez",
    "country": "ARG",
    "pos": "GK",
    "rarity": "legendaire",
    "stats": {
      "vit": 80,
      "tir": 25,
      "dri": 35,
      "pas": 82,
      "phy": 85,
      "def": 88
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p960",
    "name": "Enzo Fernández",
    "country": "ARG",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 85,
      "dri": 87,
      "pas": 86,
      "phy": 87,
      "def": 81
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p961",
    "name": "Facundo Medina",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 55,
      "dri": 67,
      "pas": 74,
      "phy": 78,
      "def": 78
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p962",
    "name": "Nahuel Molina",
    "country": "ARG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 57,
      "dri": 69,
      "pas": 73,
      "phy": 77,
      "def": 75
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p963",
    "name": "Luca Zidane",
    "country": "ALG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 25,
      "dri": 35,
      "pas": 72,
      "phy": 70,
      "def": 73
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p964",
    "name": "Oussama Benbot",
    "country": "ALG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 60,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p965",
    "name": "Melvin Mastil",
    "country": "ALG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 53,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 63,
      "def": 64
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p966",
    "name": "Abdelatif Ramdane",
    "country": "ALG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 70,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p967",
    "name": "Rafik Belghali",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 47,
      "dri": 59,
      "pas": 61,
      "phy": 65,
      "def": 70
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p968",
    "name": "Samir Chergui",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 48,
      "dri": 60,
      "pas": 65,
      "phy": 70,
      "def": 72
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p969",
    "name": "Rayan Aït-Nouri",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p970",
    "name": "Jaouen Hadjam",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 47,
      "dri": 59,
      "pas": 61,
      "phy": 65,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p971",
    "name": "Aïssa Mandi",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 53,
      "dri": 65,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p972",
    "name": "Ramy Bensebaïni",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 56,
      "dri": 68,
      "pas": 69,
      "phy": 73,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p973",
    "name": "Zineddine Belaïd",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 46,
      "dri": 58,
      "pas": 62,
      "phy": 66,
      "def": 65
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p974",
    "name": "Achref Abada",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 41,
      "dri": 53,
      "pas": 61,
      "phy": 66,
      "def": 71
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p975",
    "name": "Mohamed Amine Tougaï",
    "country": "ALG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 53,
      "dri": 65,
      "pas": 67,
      "phy": 72,
      "def": 77
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p976",
    "name": "Nabil Bentaleb",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 70,
      "dri": 72,
      "pas": 79,
      "phy": 69,
      "def": 66
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p977",
    "name": "Hicham Boudaoui",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 67,
      "dri": 67,
      "pas": 71,
      "phy": 64,
      "def": 63
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p978",
    "name": "Houssem Aouar",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 73,
      "dri": 72,
      "pas": 73,
      "phy": 71,
      "def": 69
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p979",
    "name": "Farès Chaïbi",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 72,
      "dri": 74,
      "pas": 77,
      "phy": 73,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p980",
    "name": "Ibrahim Maza",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 67,
      "dri": 72,
      "pas": 73,
      "phy": 71,
      "def": 63
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p981",
    "name": "Yacine Titraoui",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 70,
      "pas": 70,
      "phy": 68,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p982",
    "name": "Ramiz Zerrouki",
    "country": "ALG",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 58,
      "dri": 68,
      "pas": 68,
      "phy": 64,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p983",
    "name": "Mohamed Amine Amoura",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 70,
      "dri": 68,
      "pas": 66,
      "phy": 66,
      "def": 49
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p984",
    "name": "Nadhir Benbouali",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 75,
      "dri": 74,
      "pas": 70,
      "phy": 70,
      "def": 52
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p985",
    "name": "Adil Boulbina",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 77,
      "dri": 73,
      "pas": 70,
      "phy": 70,
      "def": 50
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p986",
    "name": "Farès Ghedjemis",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 73,
      "dri": 71,
      "pas": 67,
      "phy": 67,
      "def": 48
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p987",
    "name": "Amine Gouiri",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 82,
      "tir": 83,
      "dri": 82,
      "pas": 80,
      "phy": 80,
      "def": 60
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p988",
    "name": "Anis Hadj Moussa",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 67,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 48
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p989",
    "name": "Riyad Mahrez",
    "country": "ALG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 84,
      "dri": 85,
      "pas": 84,
      "phy": 84,
      "def": 67
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p990",
    "name": "Alexander Schlager",
    "country": "AUT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 64,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p991",
    "name": "Florian Wiegele",
    "country": "AUT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 64,
      "phy": 66,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p992",
    "name": "Patrick Pentz",
    "country": "AUT",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 65,
      "def": 69
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p993",
    "name": "David Affengruber",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 50,
      "dri": 62,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p994",
    "name": "Kevin Danso",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 51,
      "dri": 63,
      "pas": 65,
      "phy": 69,
      "def": 71
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p995",
    "name": "Stefan Posch",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 57,
      "dri": 69,
      "pas": 73,
      "phy": 77,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p996",
    "name": "David Alaba",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 46,
      "dri": 58,
      "pas": 64,
      "phy": 69,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p997",
    "name": "Philipp Lienhart",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 53,
      "dri": 65,
      "pas": 68,
      "phy": 72,
      "def": 72
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p998",
    "name": "Phillipp Mwene",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 51,
      "dri": 63,
      "pas": 72,
      "phy": 76,
      "def": 76
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p999",
    "name": "Alexander Prass",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 50,
      "dri": 62,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1000",
    "name": "Marco Friedl",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 51,
      "dri": 63,
      "pas": 70,
      "phy": 74,
      "def": 72
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1001",
    "name": "Michael Svoboda",
    "country": "AUT",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 46,
      "dri": 58,
      "pas": 63,
      "phy": 67,
      "def": 68
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1002",
    "name": "Xaver Schlager",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 65,
      "dri": 67,
      "pas": 66,
      "phy": 66,
      "def": 61
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1003",
    "name": "Nicolas Seiwald",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 64,
      "dri": 68,
      "pas": 71,
      "phy": 67,
      "def": 60
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1004",
    "name": "Marcel Sabitzer",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 62,
      "dri": 69,
      "pas": 71,
      "phy": 68,
      "def": 58
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1005",
    "name": "Florian Grillitsch",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 65,
      "dri": 69,
      "pas": 68,
      "phy": 68,
      "def": 61
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1006",
    "name": "Carney Chukwuemeka",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 68,
      "dri": 70,
      "pas": 70,
      "phy": 69,
      "def": 64
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1007",
    "name": "Romano Schmid",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 63,
      "dri": 73,
      "pas": 73,
      "phy": 69,
      "def": 59
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1008",
    "name": "Christoph Baumgartner",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 65,
      "dri": 66,
      "pas": 71,
      "phy": 63,
      "def": 61
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1009",
    "name": "Konrad Laimer",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 63,
      "dri": 68,
      "pas": 73,
      "phy": 65,
      "def": 59
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1010",
    "name": "Patrick Wimmer",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 68,
      "dri": 68,
      "pas": 68,
      "phy": 69,
      "def": 64
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1011",
    "name": "Paul Wanner",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 70,
      "pas": 75,
      "phy": 66,
      "def": 58
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1012",
    "name": "Alessandro Schöpf",
    "country": "AUT",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 74,
      "pas": 79,
      "phy": 70,
      "def": 66
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1013",
    "name": "Marko Arnautović",
    "country": "AUT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 73,
      "pas": 72,
      "phy": 72,
      "def": 50
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1014",
    "name": "Michael Gregoritsch",
    "country": "AUT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 77,
      "dri": 70,
      "pas": 67,
      "phy": 67,
      "def": 52
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1015",
    "name": "Saša Kalajdžić",
    "country": "AUT",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 77,
      "tir": 74,
      "dri": 77,
      "pas": 75,
      "phy": 75,
      "def": 55
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1016",
    "name": "Saleem Obeid",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 46,
      "dri": 58,
      "pas": 65,
      "phy": 70,
      "def": 74
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1017",
    "name": "Yazan Alarab",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 45,
      "dri": 57,
      "pas": 61,
      "phy": 65,
      "def": 66
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1018",
    "name": "Saed Alrosan",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 37,
      "dri": 49,
      "pas": 56,
      "phy": 61,
      "def": 64
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p1019",
    "name": "Abdallah Naseeb",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 40,
      "dri": 52,
      "pas": 58,
      "phy": 62,
      "def": 63
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p1020",
    "name": "Noor Bani Atiyeh",
    "country": "JOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 50,
      "tir": 25,
      "dri": 35,
      "pas": 53,
      "phy": 59,
      "def": 61
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p1021",
    "name": "Abdallah Alfakhori",
    "country": "JOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 54,
      "tir": 25,
      "dri": 35,
      "pas": 58,
      "phy": 59,
      "def": 59
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p1022",
    "name": "Yazeed Abu Laila",
    "country": "JOR",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 63,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1023",
    "name": "Noor Alrawabdeh",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 66,
      "dri": 67,
      "pas": 70,
      "phy": 66,
      "def": 62
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1024",
    "name": "Mohammad Abu Hasheesh",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 62,
      "phy": 66,
      "def": 67
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1025",
    "name": "Mohammad Abu Taha",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 44,
      "dri": 56,
      "pas": 58,
      "phy": 62,
      "def": 65
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1026",
    "name": "Anas Bani Yaseen",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 44,
      "dri": 56,
      "pas": 61,
      "phy": 65,
      "def": 69
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1027",
    "name": "Ehsan Haddad",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 37,
      "dri": 49,
      "pas": 58,
      "phy": 62,
      "def": 63
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p1028",
    "name": "Husam Abu Dahab",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 46,
      "dri": 58,
      "pas": 61,
      "phy": 66,
      "def": 67
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1029",
    "name": "Mohammad Abualnadi",
    "country": "JOR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 39,
      "dri": 51,
      "pas": 56,
      "phy": 60,
      "def": 66
    },
    "ovr": 58,
    "price": 95
  },
  {
    "id": "p1030",
    "name": "Odeh Fakhouri",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 76,
      "dri": 69,
      "pas": 66,
      "phy": 66,
      "def": 50
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1031",
    "name": "Mahmoud Almardi",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 60,
      "dri": 69,
      "pas": 71,
      "phy": 65,
      "def": 56
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1032",
    "name": "Mohammad Aldardour",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 62,
      "dri": 65,
      "pas": 68,
      "phy": 64,
      "def": 58
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1033",
    "name": "Amer Jamous",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 68,
      "dri": 67,
      "pas": 69,
      "phy": 65,
      "def": 64
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1034",
    "name": "Rajaei Ayed",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 62,
      "dri": 67,
      "pas": 69,
      "phy": 67,
      "def": 58
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1035",
    "name": "Ibraheem Saadeh",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 63,
      "dri": 69,
      "pas": 69,
      "phy": 68,
      "def": 59
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1036",
    "name": "Nizar Alrashdan",
    "country": "JOR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 56,
      "dri": 62,
      "pas": 68,
      "phy": 60,
      "def": 52
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p1037",
    "name": "Ali Olwan",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 65,
      "dri": 65,
      "pas": 64,
      "phy": 64,
      "def": 44
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1038",
    "name": "Ibrahim Sabra",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 68,
      "pas": 67,
      "phy": 67,
      "def": 51
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1039",
    "name": "Ali Al Azayzeh",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 71,
      "dri": 67,
      "pas": 63,
      "phy": 63,
      "def": 49
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1040",
    "name": "Mohammad Abu Zraiq",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 64,
      "dri": 64,
      "pas": 61,
      "phy": 61,
      "def": 45
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1041",
    "name": "Mousa Al Tamari",
    "country": "JOR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 66,
      "dri": 63,
      "pas": 60,
      "phy": 60,
      "def": 45
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1042",
    "name": "Diogo Costa",
    "country": "POR",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 80,
      "tir": 25,
      "dri": 35,
      "pas": 82,
      "phy": 81,
      "def": 85
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p1043",
    "name": "José Sá",
    "country": "POR",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 68,
      "phy": 72,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1044",
    "name": "Rui Silva",
    "country": "POR",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 69,
      "tir": 25,
      "dri": 35,
      "pas": 70,
      "phy": 77,
      "def": 80
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1045",
    "name": "Ricardo Velho",
    "country": "POR",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 67,
      "tir": 25,
      "dri": 35,
      "pas": 71,
      "phy": 74,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1046",
    "name": "Diogo Dalot",
    "country": "POR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 70,
      "phy": 73,
      "def": 73
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1047",
    "name": "Matheus Nunes",
    "country": "POR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 55,
      "dri": 67,
      "pas": 73,
      "phy": 77,
      "def": 79
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1048",
    "name": "Nélson Semedo",
    "country": "POR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 49,
      "dri": 61,
      "pas": 70,
      "phy": 75,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1049",
    "name": "João Cancelo",
    "country": "POR",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 58,
      "dri": 70,
      "pas": 78,
      "phy": 82,
      "def": 80
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1050",
    "name": "Nuno Mendes",
    "country": "POR",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 67,
      "dri": 79,
      "pas": 83,
      "phy": 87,
      "def": 87
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1051",
    "name": "Gonçalo Inácio",
    "country": "POR",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 61,
      "dri": 73,
      "pas": 76,
      "phy": 81,
      "def": 83
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1052",
    "name": "Renato Veiga",
    "country": "POR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 52,
      "dri": 64,
      "pas": 69,
      "phy": 73,
      "def": 78
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1053",
    "name": "Rúben Dias",
    "country": "POR",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 89,
      "tir": 65,
      "dri": 77,
      "pas": 87,
      "phy": 91,
      "def": 92
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p1054",
    "name": "Tomás Araújo",
    "country": "POR",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 71,
      "phy": 75,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1055",
    "name": "Rúben Neves",
    "country": "POR",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 74,
      "dri": 73,
      "pas": 77,
      "phy": 73,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1056",
    "name": "Samuel Costa",
    "country": "POR",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 73,
      "dri": 76,
      "pas": 83,
      "phy": 73,
      "def": 69
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p1057",
    "name": "João Neves",
    "country": "POR",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 78,
      "dri": 87,
      "pas": 91,
      "phy": 81,
      "def": 74
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1058",
    "name": "Vitinha",
    "country": "POR",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 79,
      "dri": 88,
      "pas": 88,
      "phy": 87,
      "def": 75
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p1059",
    "name": "Bruno Fernandes",
    "country": "POR",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 89,
      "tir": 82,
      "dri": 90,
      "pas": 90,
      "phy": 89,
      "def": 78
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p1060",
    "name": "Bernardo Silva",
    "country": "POR",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 86,
      "dri": 88,
      "pas": 92,
      "phy": 87,
      "def": 82
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p1061",
    "name": "João Félix",
    "country": "POR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 73,
      "pas": 72,
      "phy": 72,
      "def": 49
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1062",
    "name": "Trincão",
    "country": "POR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 78,
      "dri": 80,
      "pas": 80,
      "phy": 80,
      "def": 61
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1063",
    "name": "Francisco Conceição",
    "country": "POR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 74,
      "dri": 75,
      "pas": 75,
      "phy": 75,
      "def": 53
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1064",
    "name": "Pedro Neto",
    "country": "POR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 82,
      "dri": 77,
      "pas": 75,
      "phy": 75,
      "def": 60
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1065",
    "name": "Rafael Leão",
    "country": "POR",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 88,
      "tir": 88,
      "dri": 87,
      "pas": 88,
      "phy": 88,
      "def": 68
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p1066",
    "name": "Gonçalo Guedes",
    "country": "POR",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 73,
      "dri": 76,
      "pas": 74,
      "phy": 74,
      "def": 57
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1067",
    "name": "Gonçalo Ramos",
    "country": "POR",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 78,
      "dri": 78,
      "pas": 79,
      "phy": 79,
      "def": 61
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1068",
    "name": "Cristiano Ronaldo",
    "country": "POR",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 91,
      "dri": 88,
      "pas": 83,
      "phy": 83,
      "def": 65
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p1069",
    "name": "Mpasi",
    "country": "COD",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 63,
      "def": 68
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1070",
    "name": "Epolo",
    "country": "COD",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 57,
      "phy": 55,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1071",
    "name": "Fayulu",
    "country": "COD",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 58,
      "phy": 55,
      "def": 62
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1072",
    "name": "Mbemba",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 46,
      "dri": 58,
      "pas": 59,
      "phy": 63,
      "def": 65
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p1073",
    "name": "Tuanzebe",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 46,
      "dri": 58,
      "pas": 66,
      "phy": 71,
      "def": 76
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1074",
    "name": "Masuaku",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 50,
      "dri": 62,
      "pas": 64,
      "phy": 69,
      "def": 74
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1075",
    "name": "Kalulu",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 43,
      "dri": 55,
      "pas": 62,
      "phy": 67,
      "def": 71
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1076",
    "name": "J. Kayembe",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 48,
      "dri": 60,
      "pas": 64,
      "phy": 69,
      "def": 75
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1077",
    "name": "Wan-Bissaka",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 54,
      "dri": 66,
      "pas": 66,
      "phy": 70,
      "def": 75
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1078",
    "name": "Bushiri",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 52,
      "dri": 64,
      "pas": 67,
      "phy": 71,
      "def": 72
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1079",
    "name": "Kapuadi",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 46,
      "dri": 58,
      "pas": 60,
      "phy": 64,
      "def": 68
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1080",
    "name": "Batubinsika",
    "country": "COD",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 49,
      "dri": 61,
      "pas": 64,
      "phy": 69,
      "def": 70
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1081",
    "name": "Sadiki",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 67,
      "dri": 69,
      "pas": 71,
      "phy": 66,
      "def": 63
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1082",
    "name": "Pickel",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 64,
      "dri": 64,
      "pas": 68,
      "phy": 61,
      "def": 60
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1083",
    "name": "E. Kayembe",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 70,
      "pas": 74,
      "phy": 69,
      "def": 62
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1084",
    "name": "Moutoussamy",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 66,
      "dri": 66,
      "pas": 67,
      "phy": 65,
      "def": 62
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1085",
    "name": "Mukau",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 66,
      "dri": 66,
      "pas": 67,
      "phy": 65,
      "def": 62
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1086",
    "name": "Mbuku",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 70,
      "pas": 73,
      "phy": 69,
      "def": 65
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1087",
    "name": "Elia",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 64,
      "dri": 63,
      "pas": 69,
      "phy": 62,
      "def": 60
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1088",
    "name": "Cipenga",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 68,
      "dri": 68,
      "pas": 69,
      "phy": 67,
      "def": 64
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1089",
    "name": "Banza",
    "country": "COD",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 64,
      "dri": 65,
      "pas": 65,
      "phy": 65,
      "def": 45
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1090",
    "name": "Bongonda",
    "country": "COD",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 73,
      "dri": 73,
      "pas": 72,
      "phy": 72,
      "def": 51
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1091",
    "name": "Wissa",
    "country": "COD",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 66,
      "dri": 65,
      "pas": 61,
      "phy": 61,
      "def": 45
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1092",
    "name": "Kakuta",
    "country": "COD",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 73,
      "dri": 73,
      "pas": 73,
      "phy": 72,
      "def": 69
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1093",
    "name": "Mayele",
    "country": "COD",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 69,
      "pas": 68,
      "phy": 68,
      "def": 49
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1094",
    "name": "Bakambu",
    "country": "COD",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 69,
      "pas": 68,
      "phy": 68,
      "def": 46
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1095",
    "name": "O'tkir Yusupov",
    "country": "UZB",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 63,
      "def": 71
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1096",
    "name": "Botirali Ergashev",
    "country": "UZB",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 57,
      "phy": 59,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1097",
    "name": "Abduvohid Ne'matov",
    "country": "UZB",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 56,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 65,
      "def": 66
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1098",
    "name": "Abduqodir Husanov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 59,
      "dri": 71,
      "pas": 76,
      "phy": 80,
      "def": 79
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p1099",
    "name": "Hojiakbar Alijonov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 52,
      "dri": 64,
      "pas": 68,
      "phy": 72,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1100",
    "name": "Farruh Sayfiev",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 53,
      "dri": 65,
      "pas": 66,
      "phy": 70,
      "def": 75
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1101",
    "name": "Rustam Ashurmatov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 45,
      "dri": 57,
      "pas": 57,
      "phy": 62,
      "def": 64
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1102",
    "name": "Sherzod Nasrullaev",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 50,
      "dri": 62,
      "pas": 65,
      "phy": 69,
      "def": 69
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1103",
    "name": "Umar Eshmurodov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 69,
      "def": 71
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1104",
    "name": "Avazbek O'lmasaliev",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 66,
      "phy": 70,
      "def": 73
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1105",
    "name": "Jahongir O'rozov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1106",
    "name": "Behruzjon Karimov",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 48,
      "dri": 60,
      "pas": 61,
      "phy": 65,
      "def": 68
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1107",
    "name": "Abdulla Abdullaev",
    "country": "UZB",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 39,
      "dri": 51,
      "pas": 59,
      "phy": 64,
      "def": 65
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1108",
    "name": "Akmal Mozgovoy",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 74,
      "pas": 71,
      "phy": 73,
      "def": 66
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1109",
    "name": "Otabek Shukurov",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 58,
      "dri": 67,
      "pas": 68,
      "phy": 65,
      "def": 54
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1110",
    "name": "Jamshid Iskanderov",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 70,
      "pas": 74,
      "phy": 68,
      "def": 65
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1111",
    "name": "Odil Hamrobekov",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 62,
      "dri": 61,
      "pas": 68,
      "phy": 59,
      "def": 58
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1112",
    "name": "Jaloliddin Masharipov",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 57,
      "dri": 65,
      "pas": 71,
      "phy": 60,
      "def": 53
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1113",
    "name": "Aziz G'aniev",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 61,
      "dri": 63,
      "pas": 65,
      "phy": 60,
      "def": 57
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1114",
    "name": "Sherzod Esanov",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 66,
      "dri": 69,
      "pas": 72,
      "phy": 67,
      "def": 62
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1115",
    "name": "Abbosbek Fayzullaev",
    "country": "UZB",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 59,
      "dri": 68,
      "pas": 69,
      "phy": 66,
      "def": 55
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1116",
    "name": "Eldor Shomurodov",
    "country": "UZB",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 66,
      "dri": 69,
      "pas": 68,
      "phy": 68,
      "def": 46
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1117",
    "name": "Igor Sergeev",
    "country": "UZB",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 73,
      "dri": 74,
      "pas": 74,
      "phy": 74,
      "def": 51
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1118",
    "name": "Azizbek Amonov",
    "country": "UZB",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 76,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 55
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1119",
    "name": "Oston O'runov",
    "country": "UZB",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 69,
      "dri": 67,
      "pas": 65,
      "phy": 65,
      "def": 47
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1120",
    "name": "Dostonbek Hamdamov",
    "country": "UZB",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 71,
      "dri": 71,
      "pas": 69,
      "phy": 69,
      "def": 51
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1121",
    "name": "Camilo Vargas",
    "country": "COL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 65,
      "phy": 69,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1122",
    "name": "Álvaro Montero",
    "country": "COL",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 71,
      "tir": 25,
      "dri": 35,
      "pas": 72,
      "phy": 70,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1123",
    "name": "David Ospina",
    "country": "COL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 64,
      "def": 69
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1124",
    "name": "Santiago Mele",
    "country": "COL",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 63,
      "phy": 61,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1125",
    "name": "Daniel Muñoz",
    "country": "COL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 61,
      "dri": 73,
      "pas": 73,
      "phy": 77,
      "def": 81
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p1126",
    "name": "Yerry Mina",
    "country": "COL",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 72,
      "tir": 55,
      "dri": 67,
      "pas": 73,
      "phy": 77,
      "def": 83
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1127",
    "name": "Dávinson Sánchez",
    "country": "COL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 46,
      "dri": 58,
      "pas": 66,
      "phy": 70,
      "def": 71
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1128",
    "name": "Jhon Lucumí",
    "country": "COL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 44,
      "dri": 56,
      "pas": 65,
      "phy": 70,
      "def": 73
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1129",
    "name": "Johan Mojica",
    "country": "COL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 55,
      "dri": 67,
      "pas": 70,
      "phy": 74,
      "def": 78
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1130",
    "name": "Deiver Machado",
    "country": "COL",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 52,
      "dri": 64,
      "pas": 69,
      "phy": 74,
      "def": 78
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1131",
    "name": "James Rodríguez",
    "country": "COL",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 82,
      "dri": 81,
      "pas": 83,
      "phy": 80,
      "def": 78
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p1132",
    "name": "Juan Fernando Quintero",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 72,
      "dri": 75,
      "pas": 78,
      "phy": 74,
      "def": 68
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1133",
    "name": "Richard Ríos",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 62,
      "dri": 70,
      "pas": 76,
      "phy": 65,
      "def": 58
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1134",
    "name": "Kevin Castaño",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 67,
      "dri": 76,
      "pas": 79,
      "phy": 71,
      "def": 63
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1135",
    "name": "Jefferson Lerma",
    "country": "COL",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 75,
      "dri": 77,
      "pas": 82,
      "phy": 76,
      "def": 71
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1136",
    "name": "Jorge Carrascal",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 68,
      "dri": 73,
      "pas": 73,
      "phy": 72,
      "def": 64
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1137",
    "name": "Jáminton Campaz",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 74,
      "dri": 73,
      "pas": 75,
      "phy": 75,
      "def": 70
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1138",
    "name": "Juan Camilo Portilla",
    "country": "COL",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 65,
      "dri": 70,
      "pas": 76,
      "phy": 66,
      "def": 61
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1139",
    "name": "Gustavo Puerta",
    "country": "COL",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 78,
      "pas": 78,
      "phy": 78,
      "def": 74
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1140",
    "name": "Luis Díaz",
    "country": "COL",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 90,
      "dri": 86,
      "pas": 84,
      "phy": 84,
      "def": 69
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p1141",
    "name": "Jhon Arias",
    "country": "COL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 74,
      "dri": 75,
      "pas": 73,
      "phy": 73,
      "def": 54
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1142",
    "name": "Rafael Santos Borré",
    "country": "COL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 80,
      "dri": 79,
      "pas": 77,
      "phy": 77,
      "def": 61
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1143",
    "name": "Marino Hinestroza",
    "country": "COL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 72,
      "dri": 69,
      "pas": 66,
      "phy": 66,
      "def": 53
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1144",
    "name": "Luis Suárez",
    "country": "COL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 80,
      "dri": 80,
      "pas": 77,
      "phy": 77,
      "def": 60
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1145",
    "name": "Carlos Gómez",
    "country": "COL",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 77,
      "dri": 76,
      "pas": 74,
      "phy": 74,
      "def": 55
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1146",
    "name": "Jhon Córdoba",
    "country": "COL",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 80,
      "tir": 86,
      "dri": 81,
      "pas": 78,
      "phy": 78,
      "def": 58
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1147",
    "name": "Dean Henderson",
    "country": "ENG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 68,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1148",
    "name": "Jordan Pickford",
    "country": "ENG",
    "pos": "GK",
    "rarity": "epique",
    "stats": {
      "vit": 73,
      "tir": 25,
      "dri": 35,
      "pas": 75,
      "phy": 77,
      "def": 84
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1149",
    "name": "James Trafford",
    "country": "ENG",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 25,
      "dri": 35,
      "pas": 66,
      "phy": 70,
      "def": 74
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1150",
    "name": "Dan Burn",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 62,
      "dri": 74,
      "pas": 78,
      "phy": 82,
      "def": 86
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1151",
    "name": "Marc Guéhi",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 80,
      "tir": 64,
      "dri": 76,
      "pas": 81,
      "phy": 86,
      "def": 90
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p1152",
    "name": "Reece James",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 65,
      "dri": 77,
      "pas": 81,
      "phy": 86,
      "def": 88
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p1153",
    "name": "Ezri Konsa",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 58,
      "dri": 70,
      "pas": 78,
      "phy": 82,
      "def": 85
    },
    "ovr": 79,
    "price": 195
  },
  {
    "id": "p1154",
    "name": "Tino Livramento",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 62,
      "dri": 74,
      "pas": 77,
      "phy": 82,
      "def": 86
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1155",
    "name": "Nico O'Reilly",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 52,
      "dri": 64,
      "pas": 71,
      "phy": 75,
      "def": 77
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1156",
    "name": "Jarell Quansah",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 75,
      "tir": 58,
      "dri": 70,
      "pas": 76,
      "phy": 80,
      "def": 82
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1157",
    "name": "Djed Spence",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 61,
      "dri": 73,
      "pas": 78,
      "phy": 83,
      "def": 85
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1158",
    "name": "John Stones",
    "country": "ENG",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 81,
      "tir": 69,
      "dri": 81,
      "pas": 82,
      "phy": 86,
      "def": 89
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1159",
    "name": "Elliot Anderson",
    "country": "ENG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 78,
      "dri": 79,
      "pas": 80,
      "phy": 80,
      "def": 74
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1160",
    "name": "Jude Bellingham",
    "country": "ENG",
    "pos": "MID",
    "rarity": "legendaire",
    "stats": {
      "vit": 90,
      "tir": 89,
      "dri": 91,
      "pas": 94,
      "phy": 90,
      "def": 85
    },
    "ovr": 90,
    "price": 490
  },
  {
    "id": "p1161",
    "name": "Eberechi Eze",
    "country": "ENG",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 83,
      "dri": 86,
      "pas": 87,
      "phy": 85,
      "def": 79
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1162",
    "name": "Jordan Henderson",
    "country": "ENG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 71,
      "dri": 79,
      "pas": 78,
      "phy": 78,
      "def": 67
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p1163",
    "name": "Kobbie Mainoo",
    "country": "ENG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 76,
      "dri": 82,
      "pas": 88,
      "phy": 80,
      "def": 72
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p1164",
    "name": "Declan Rice",
    "country": "ENG",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 88,
      "dri": 86,
      "pas": 92,
      "phy": 85,
      "def": 84
    },
    "ovr": 87,
    "price": 315
  },
  {
    "id": "p1165",
    "name": "Morgan Rogers",
    "country": "ENG",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 77,
      "dri": 77,
      "pas": 85,
      "phy": 75,
      "def": 73
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1166",
    "name": "Anthony Gordon",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 85,
      "tir": 82,
      "dri": 85,
      "pas": 84,
      "phy": 84,
      "def": 60
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p1167",
    "name": "Harry Kane",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 93,
      "tir": 91,
      "dri": 93,
      "pas": 91,
      "phy": 91,
      "def": 70
    },
    "ovr": 90,
    "price": 490
  },
  {
    "id": "p1168",
    "name": "Noni Madueke",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 82,
      "dri": 82,
      "pas": 79,
      "phy": 79,
      "def": 61
    },
    "ovr": 80,
    "price": 200
  },
  {
    "id": "p1169",
    "name": "Marcus Rashford",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 88,
      "dri": 84,
      "pas": 81,
      "phy": 81,
      "def": 63
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p1170",
    "name": "Bukayo Saka",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "legendaire",
    "stats": {
      "vit": 91,
      "tir": 88,
      "dri": 91,
      "pas": 89,
      "phy": 89,
      "def": 70
    },
    "ovr": 88,
    "price": 470
  },
  {
    "id": "p1171",
    "name": "Ivan Toney",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 84,
      "tir": 85,
      "dri": 84,
      "pas": 82,
      "phy": 82,
      "def": 66
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p1172",
    "name": "Ollie Watkins",
    "country": "ENG",
    "pos": "ATT",
    "rarity": "epique",
    "stats": {
      "vit": 86,
      "tir": 82,
      "dri": 85,
      "pas": 85,
      "phy": 85,
      "def": 67
    },
    "ovr": 83,
    "price": 285
  },
  {
    "id": "p1173",
    "name": "Dominik Livaković",
    "country": "CRO",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 25,
      "dri": 35,
      "pas": 62,
      "phy": 67,
      "def": 72
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1174",
    "name": "Dominik Kotarski",
    "country": "CRO",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 70,
      "tir": 25,
      "dri": 35,
      "pas": 73,
      "phy": 73,
      "def": 75
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1175",
    "name": "Ivor Pandur",
    "country": "CRO",
    "pos": "GK",
    "rarity": "rare",
    "stats": {
      "vit": 68,
      "tir": 25,
      "dri": 35,
      "pas": 68,
      "phy": 69,
      "def": 77
    },
    "ovr": 77,
    "price": 185
  },
  {
    "id": "p1176",
    "name": "Joško Gvardiol",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "epique",
    "stats": {
      "vit": 82,
      "tir": 66,
      "dri": 78,
      "pas": 83,
      "phy": 88,
      "def": 92
    },
    "ovr": 85,
    "price": 300
  },
  {
    "id": "p1177",
    "name": "Duje Ćaleta-Car",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 54,
      "dri": 66,
      "pas": 72,
      "phy": 77,
      "def": 81
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1178",
    "name": "Josip Šutalo",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 52,
      "dri": 64,
      "pas": 69,
      "phy": 73,
      "def": 77
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1179",
    "name": "Josip Stanišić",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "rare",
    "stats": {
      "vit": 73,
      "tir": 56,
      "dri": 68,
      "pas": 73,
      "phy": 77,
      "def": 82
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1180",
    "name": "Marin Pongračić",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 66,
      "phy": 70,
      "def": 73
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1181",
    "name": "Kristijan Jakić",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 48,
      "dri": 60,
      "pas": 69,
      "phy": 73,
      "def": 76
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1182",
    "name": "Martin Erlić",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 50,
      "dri": 62,
      "pas": 65,
      "phy": 69,
      "def": 73
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1183",
    "name": "Luka Vušković",
    "country": "CRO",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 54,
      "dri": 66,
      "pas": 72,
      "phy": 77,
      "def": 81
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1184",
    "name": "Luka Modrić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 87,
      "tir": 87,
      "dri": 88,
      "pas": 85,
      "phy": 88,
      "def": 83
    },
    "ovr": 86,
    "price": 310
  },
  {
    "id": "p1185",
    "name": "Mateo Kovačić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 85,
      "dri": 84,
      "pas": 87,
      "phy": 83,
      "def": 81
    },
    "ovr": 84,
    "price": 295
  },
  {
    "id": "p1186",
    "name": "Mario Pašalić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 76,
      "dri": 77,
      "pas": 78,
      "phy": 77,
      "def": 72
    },
    "ovr": 76,
    "price": 180
  },
  {
    "id": "p1187",
    "name": "Nikola Vlašić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 71,
      "dri": 72,
      "pas": 77,
      "phy": 69,
      "def": 67
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1188",
    "name": "Luka Sučić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 78,
      "tir": 73,
      "dri": 79,
      "pas": 86,
      "phy": 75,
      "def": 69
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1189",
    "name": "Martin Baturina",
    "country": "CRO",
    "pos": "MID",
    "rarity": "rare",
    "stats": {
      "vit": 76,
      "tir": 72,
      "dri": 77,
      "pas": 77,
      "phy": 76,
      "def": 68
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1190",
    "name": "Petar Sučić",
    "country": "CRO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 67,
      "dri": 69,
      "pas": 74,
      "phy": 68,
      "def": 63
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1191",
    "name": "Nikola Moro",
    "country": "CRO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 72,
      "dri": 73,
      "pas": 79,
      "phy": 70,
      "def": 68
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1192",
    "name": "Toni Fruk",
    "country": "CRO",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 76,
      "tir": 68,
      "dri": 77,
      "pas": 79,
      "phy": 76,
      "def": 64
    },
    "ovr": 74,
    "price": 130
  },
  {
    "id": "p1193",
    "name": "Ivan Perišić",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 75,
      "dri": 75,
      "pas": 73,
      "phy": 73,
      "def": 54
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1194",
    "name": "Andrej Kramarić",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 72,
      "dri": 73,
      "pas": 71,
      "phy": 71,
      "def": 54
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1195",
    "name": "Ante Budimir",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 77,
      "tir": 78,
      "dri": 77,
      "pas": 75,
      "phy": 75,
      "def": 57
    },
    "ovr": 75,
    "price": 175
  },
  {
    "id": "p1196",
    "name": "Marco Pašalić",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 70,
      "dri": 72,
      "pas": 71,
      "phy": 71,
      "def": 55
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1197",
    "name": "Petar Musa",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 77,
      "dri": 72,
      "pas": 68,
      "phy": 68,
      "def": 53
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1198",
    "name": "Igor Matanović",
    "country": "CRO",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 70,
      "dri": 71,
      "pas": 69,
      "phy": 69,
      "def": 52
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1199",
    "name": "Benjamin Asare",
    "country": "GHA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 25,
      "dri": 35,
      "pas": 58,
      "phy": 61,
      "def": 67
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1200",
    "name": "Lawrence Ati-Zigi",
    "country": "GHA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 25,
      "dri": 35,
      "pas": 60,
      "phy": 61,
      "def": 65
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1201",
    "name": "Joseph Anang",
    "country": "GHA",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 25,
      "dri": 35,
      "pas": 66,
      "phy": 66,
      "def": 70
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1202",
    "name": "Derrick Luckassen",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 51,
      "dri": 63,
      "pas": 66,
      "phy": 71,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1203",
    "name": "Abdul Mumin",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 51,
      "dri": 63,
      "pas": 68,
      "phy": 72,
      "def": 77
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1204",
    "name": "Jonas Adjetey",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 56,
      "dri": 68,
      "pas": 69,
      "phy": 73,
      "def": 74
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1205",
    "name": "Gideon Mensah",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 71,
      "tir": 48,
      "dri": 60,
      "pas": 70,
      "phy": 74,
      "def": 74
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1206",
    "name": "Baba Rahman",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 45,
      "dri": 57,
      "pas": 59,
      "phy": 63,
      "def": 70
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1207",
    "name": "Alidu Seidu",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 49,
      "dri": 61,
      "pas": 67,
      "phy": 71,
      "def": 71
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1208",
    "name": "Kojo Pepprah Oppong",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 48,
      "dri": 60,
      "pas": 66,
      "phy": 70,
      "def": 71
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1209",
    "name": "Jerome Opoku",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 44,
      "dri": 56,
      "pas": 65,
      "phy": 69,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1210",
    "name": "Marvin Senaya",
    "country": "GHA",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 68,
      "def": 72
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1211",
    "name": "Thomas Partey",
    "country": "GHA",
    "pos": "MID",
    "rarity": "epique",
    "stats": {
      "vit": 83,
      "tir": 78,
      "dri": 84,
      "pas": 85,
      "phy": 82,
      "def": 74
    },
    "ovr": 82,
    "price": 280
  },
  {
    "id": "p1212",
    "name": "Kwasi Sibo",
    "country": "GHA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 72,
      "dri": 74,
      "pas": 73,
      "phy": 73,
      "def": 68
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1213",
    "name": "Elisha Owusu",
    "country": "GHA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 64,
      "dri": 71,
      "pas": 76,
      "phy": 66,
      "def": 60
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1214",
    "name": "Caleb Yirenkyi",
    "country": "GHA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 65,
      "dri": 74,
      "pas": 75,
      "phy": 72,
      "def": 61
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1215",
    "name": "Augustine Boakye",
    "country": "GHA",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 74,
      "tir": 67,
      "dri": 75,
      "pas": 79,
      "phy": 73,
      "def": 63
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1216",
    "name": "Jordan Ayew",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 66,
      "dri": 66,
      "pas": 65,
      "phy": 65,
      "def": 45
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1217",
    "name": "Iñaki Williams",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 81,
      "tir": 87,
      "dri": 81,
      "pas": 79,
      "phy": 79,
      "def": 61
    },
    "ovr": 81,
    "price": 205
  },
  {
    "id": "p1218",
    "name": "Antoine Semenyo",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "rare",
    "stats": {
      "vit": 79,
      "tir": 83,
      "dri": 79,
      "pas": 75,
      "phy": 75,
      "def": 59
    },
    "ovr": 78,
    "price": 190
  },
  {
    "id": "p1219",
    "name": "Fatawu Issahaku",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 73,
      "dri": 75,
      "pas": 75,
      "phy": 75,
      "def": 57
    },
    "ovr": 73,
    "price": 125
  },
  {
    "id": "p1220",
    "name": "Kamaldeen Sulemana",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 75,
      "tir": 72,
      "dri": 75,
      "pas": 74,
      "phy": 74,
      "def": 50
    },
    "ovr": 72,
    "price": 120
  },
  {
    "id": "p1221",
    "name": "Prince Adu Kwabena",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 69,
      "dri": 65,
      "pas": 62,
      "phy": 62,
      "def": 45
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1222",
    "name": "Ernest Nuamah",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 72,
      "tir": 68,
      "dri": 71,
      "pas": 71,
      "phy": 71,
      "def": 54
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1223",
    "name": "Christopher Bonsu Baah",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 67,
      "dri": 67,
      "pas": 67,
      "phy": 67,
      "def": 43
    },
    "ovr": 65,
    "price": 105
  },
  {
    "id": "p1224",
    "name": "Brandon Thomas-Asante",
    "country": "GHA",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 70,
      "dri": 69,
      "pas": 65,
      "phy": 65,
      "def": 45
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1225",
    "name": "Orlando Mosquera",
    "country": "PAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 59,
      "phy": 61,
      "def": 63
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1226",
    "name": "Luis Mejía",
    "country": "PAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 55,
      "tir": 25,
      "dri": 35,
      "pas": 56,
      "phy": 59,
      "def": 62
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1227",
    "name": "César Samudio",
    "country": "PAN",
    "pos": "GK",
    "rarity": "commun",
    "stats": {
      "vit": 50,
      "tir": 25,
      "dri": 35,
      "pas": 52,
      "phy": 57,
      "def": 62
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1228",
    "name": "César Blackman",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 59,
      "tir": 38,
      "dri": 50,
      "pas": 58,
      "phy": 62,
      "def": 64
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p1229",
    "name": "Jorge Gutiérrez",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 48,
      "dri": 60,
      "pas": 67,
      "phy": 71,
      "def": 70
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1230",
    "name": "Amir Murillo",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 58,
      "tir": 37,
      "dri": 49,
      "pas": 57,
      "phy": 62,
      "def": 66
    },
    "ovr": 59,
    "price": 95
  },
  {
    "id": "p1231",
    "name": "Fidel Escobar",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 48,
      "dri": 60,
      "pas": 67,
      "phy": 71,
      "def": 73
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1232",
    "name": "Andrés Andrade",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 64,
      "tir": 47,
      "dri": 59,
      "pas": 64,
      "phy": 68,
      "def": 73
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1233",
    "name": "Edgardo Fariña",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 44,
      "dri": 56,
      "pas": 59,
      "phy": 63,
      "def": 64
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1234",
    "name": "José Córdoba",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 61,
      "tir": 39,
      "dri": 51,
      "pas": 61,
      "phy": 65,
      "def": 66
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p1235",
    "name": "Eric Davis",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 44,
      "dri": 56,
      "pas": 62,
      "phy": 66,
      "def": 69
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1236",
    "name": "Jiovany Ramos",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 62,
      "tir": 38,
      "dri": 50,
      "pas": 60,
      "phy": 64,
      "def": 64
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1237",
    "name": "Roderick Miller",
    "country": "PAN",
    "pos": "DEF",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 51,
      "dri": 63,
      "pas": 64,
      "phy": 68,
      "def": 69
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1238",
    "name": "Aníbal Godoy",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 67,
      "tir": 62,
      "dri": 68,
      "pas": 69,
      "phy": 67,
      "def": 58
    },
    "ovr": 66,
    "price": 105
  },
  {
    "id": "p1239",
    "name": "Adalberto Carrasquilla",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 59,
      "dri": 67,
      "pas": 67,
      "phy": 65,
      "def": 55
    },
    "ovr": 64,
    "price": 105
  },
  {
    "id": "p1240",
    "name": "Carlos Harvey",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 63,
      "tir": 62,
      "dri": 64,
      "pas": 62,
      "phy": 64,
      "def": 58
    },
    "ovr": 62,
    "price": 100
  },
  {
    "id": "p1241",
    "name": "Cristian Martínez",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 65,
      "tir": 59,
      "dri": 66,
      "pas": 67,
      "phy": 65,
      "def": 55
    },
    "ovr": 63,
    "price": 100
  },
  {
    "id": "p1242",
    "name": "José Luis Rodríguez",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 61,
      "dri": 60,
      "pas": 62,
      "phy": 62,
      "def": 57
    },
    "ovr": 60,
    "price": 95
  },
  {
    "id": "p1243",
    "name": "César Yanis",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 70,
      "tir": 67,
      "dri": 71,
      "pas": 75,
      "phy": 68,
      "def": 63
    },
    "ovr": 70,
    "price": 115
  },
  {
    "id": "p1244",
    "name": "Yoel Bárcenas",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 60,
      "tir": 58,
      "dri": 61,
      "pas": 68,
      "phy": 59,
      "def": 54
    },
    "ovr": 61,
    "price": 100
  },
  {
    "id": "p1245",
    "name": "Alberto Quintero",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 69,
      "dri": 70,
      "pas": 73,
      "phy": 69,
      "def": 65
    },
    "ovr": 69,
    "price": 115
  },
  {
    "id": "p1246",
    "name": "Azarías Londoño",
    "country": "PAN",
    "pos": "MID",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 63,
      "dri": 69,
      "pas": 76,
      "phy": 66,
      "def": 59
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1247",
    "name": "Ismael Díaz",
    "country": "PAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 73,
      "tir": 73,
      "dri": 73,
      "pas": 70,
      "phy": 70,
      "def": 49
    },
    "ovr": 71,
    "price": 120
  },
  {
    "id": "p1248",
    "name": "Cecilio Waterman",
    "country": "PAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 68,
      "tir": 74,
      "dri": 68,
      "pas": 66,
      "phy": 66,
      "def": 47
    },
    "ovr": 68,
    "price": 110
  },
  {
    "id": "p1249",
    "name": "José Fajardo",
    "country": "PAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 69,
      "tir": 71,
      "dri": 69,
      "pas": 67,
      "phy": 67,
      "def": 47
    },
    "ovr": 67,
    "price": 110
  },
  {
    "id": "p1250",
    "name": "Tomás Rodríguez",
    "country": "PAN",
    "pos": "ATT",
    "rarity": "commun",
    "stats": {
      "vit": 66,
      "tir": 67,
      "dri": 67,
      "pas": 64,
      "phy": 64,
      "def": 45
    },
    "ovr": 65,
    "price": 105
  }
];

const CDM_DEMO_SQUADS = {
  "m1": {
    "gk": "p833",
    "field": [
      "p843",
      "p848",
      "p856"
    ],
    "bench": [
      "p853",
      "p841"
    ]
  },
  "m2": {
    "gk": "p209",
    "field": [
      "p219",
      "p221",
      "p234"
    ],
    "bench": [
      "p216",
      "p232"
    ]
  },
  "m3": {
    "gk": "p959",
    "field": [
      "p949",
      "p960",
      "p946"
    ],
    "bench": [
      "p942",
      "p945"
    ]
  },
  "m4": {
    "gk": "p625",
    "field": [
      "p524",
      "p637",
      "p934"
    ],
    "bench": [
      "p643",
      "p647"
    ]
  }
};

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
