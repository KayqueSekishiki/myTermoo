const solutionsDB = [
  { id: 1, word: "NEGRO" },
  { id: 2, word: "MEXER" },
  { id: 3, word: "TERMO" },
  { id: 4, word: "NOBRE" },
  { id: 5, word: "SENSO" },
  { id: 6, word: "ALGOZ" },
  { id: 7, word: "PLENA" },
  { id: 8, word: "SUTIL" },
  { id: 9, word: "VIGOR" },
  { id: 10, word: "FAZER" },
  { id: 11, word: "AUDAZ" },
  { id: 12, word: "ASSIM" },
  { id: 13, word: "SANAR" },
  { id: 14, word: "INATO" },
  { id: 15, word: "CERNE" },
  { id: 16, word: "FOSSE" },
  { id: 17, word: "IDEIA" },
  { id: 18, word: "PODER" },
  { id: 19, word: "MORAL" },
  { id: 20, word: "DESDE" },
  { id: 21, word: "TORPE" },
  { id: 22, word: "MUITO" },
  { id: 23, word: "JUSTO" },
  { id: 24, word: "HONRA" },
  { id: 25, word: "SOBRE" },
  { id: 26, word: "ANEXO" },
  { id: 27, word: "ETNIA" },
  { id: 28, word: "ISTMO" },
  { id: 29, word: "SONHO" },
  { id: 30, word: "TANGE" },
  { id: 31, word: "LAPSO" },
  { id: 32, word: "AMIGO" },
  { id: 33, word: "EXPOR" },
  { id: 34, word: "HAVER" },
  { id: 35, word: "TEMPO" },
  { id: 36, word: "SEARA" },
  { id: 37, word: "DENGO" },
  { id: 38, word: "PESAR" },
  { id: 39, word: "POSSE" },
  { id: 40, word: "GENRO" },
  { id: 41, word: "ARDIL" },
  { id: 42, word: "CAUSA" },
  { id: 43, word: "CORJA" },
  { id: 44, word: "DIZER" },
  { id: 45, word: "PROLE" },
  { id: 46, word: "TENAZ" },
  { id: 47, word: "DEVER" },
  { id: 48, word: "SABER" },
  { id: 49, word: "CRIVO" },
  { id: 50, word: "DIGNO" },
  { id: 51, word: "CEDER" },
  { id: 52, word: "BRADO" },
  { id: 53, word: "COMUM" },
  { id: 54, word: "SENDO" },
  { id: 55, word: "TEMOR" },
  { id: 56, word: "GLEBA" },
  { id: 57, word: "CULTO" },
  { id: 58, word: "ATROZ" },
  { id: 59, word: "MUNDO" },
  { id: 60, word: "PAUTA" },
  { id: 61, word: "CENSO" },
  { id: 62, word: "FUGAZ" },
  { id: 63, word: "AINDA" },
  { id: 64, word: "DENSO" },
  { id: 65, word: "ESTAR" },
  { id: 66, word: "FORTE" },
  { id: 67, word: "VULGO" },
  { id: 68, word: "PUDOR" },
  { id: 69, word: "REGRA" },
  { id: 70, word: "DOGMA" },
  { id: 71, word: "LOUCO" },
  { id: 72, word: "CRIAR" },
  { id: 73, word: "BANAL" },
  { id: 74, word: "IMPOR" },
  { id: 75, word: "JEITO" },
  { id: 76, word: "ORDEM" },
  { id: 77, word: "DESSE" },
  { id: 78, word: "PEDIR" },
  { id: 79, word: "CLAVA" },
  { id: 80, word: "USURA" },
  { id: 81, word: "PROSA" },
  { id: 82, word: "FELIZ" },
  { id: 83, word: "SERVO" },
  { id: 84, word: "VIRIL" },
  { id: 85, word: "COISA" },
  { id: 86, word: "MANSO" },
  { id: 87, word: "ONTEM" },
  { id: 88, word: "PRESA" },
  { id: 89, word: "FALAR" },
  { id: 90, word: "CUNHO" },
  { id: 91, word: "FORMA" },
  { id: 92, word: "MESMO" },
  { id: 93, word: "MEIGA" },
  { id: 94, word: "AFAGO" },
  { id: 95, word: "FLUIR" },
  { id: 96, word: "VENDO" },
  { id: 97, word: "LIMBO" },
  { id: 98, word: "GUISA" },
  { id: 99, word: "POSSO" },
  { id: 100, word: "VISAR" },
  { id: 101, word: "TEMER" },
  { id: 102, word: "ACASO" },
  { id: 103, word: "PLENO" },
  { id: 104, word: "PUDER" },
  { id: 105, word: "VALOR" },
  { id: 106, word: "CISMA" },
  { id: 107, word: "BRUMA" },
  { id: 108, word: "LUGAR" },
  { id: 109, word: "AFINS" },
  { id: 110, word: "CERTO" },
  { id: 111, word: "GERAR" },
  { id: 112, word: "OBTER" },
  { id: 113, word: "CRISE" },
  { id: 114, word: "MATIZ" },
  { id: 115, word: "PRAXE" },
  { id: 116, word: "SENIL" },
  { id: 117, word: "HAVIA" },
  { id: 118, word: "TODOS" },
  { id: 119, word: "FLUXO" },
  { id: 120, word: "ENFIM" },
  { id: 121, word: "ABRIR" },
  { id: 122, word: "RITMO" },
  { id: 123, word: "FALSO" },
  { id: 124, word: "TOMAR" },
  { id: 125, word: "GARBO" },
  { id: 130, word: "PARVO" },
  { id: 131, word: "VALIA" },
  { id: 132, word: "RETER" },
  { id: 133, word: "PULHA" },
  { id: 134, word: "VITAL" },
  { id: 135, word: "FAVOR" },
  { id: 136, word: "BRAVO" },
  { id: 137, word: "GRATO" },
  { id: 138, word: "PRUMO" },
  { id: 139, word: "VIVAZ" },
  { id: 140, word: "LEGAL" },
  { id: 141, word: "PARCO" },
  { id: 142, word: "LAICO" },
  { id: 143, word: "BURRO" },
  { id: 144, word: "OLHAR" },
  { id: 145, word: "POSSA" },
  { id: 146, word: "LEVAR" },
];

export default solutionsDB;
