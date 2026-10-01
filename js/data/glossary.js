/**
 * DICCIONARIO ENOLÓGICO PARA PRINCIPIANTES & EXPERTOS
 * Explicaciones sencillas, claras y didácticas con analogías fáciles.
 */

const GLOSSARY_DATA = {
  "calcáreo": {
    term: "Suelo Calcáreo (Carbonato de Calcio)",
    category: "Terroir",
    icon: "🪨",
    simple: "¿Qué es el suelo calcáreo y por qué todos los enólogos lo buscan?",
    explanation: "Es tierra con piedras cubiertas de una costra blanca de tiza/cal viva (carbonato de calcio). En lugares como Gualtallary o Paraje Altamira, estas raíces absorben minerales que le dan al vino una sensación de 'tiza' en la lengua, mucha frescura y una textura que no se parece a nada.",
    analogy: "Pensalo como la diferencia entre beber agua de grifo común y agua pura de manantial mineral sobre rocas."
  },
  "hormigon": {
    term: "Piletas y Huevos de Hormigón (Cemento)",
    category: "Vinificación",
    icon: "🥚",
    simple: "¿Por qué se usan huevos y piletas de hormigón crudo?",
    explanation: "El hormigón respira (permite una micro-oxigenación suave como la madera) pero no le aporta sabor a madera, vainilla ni tostado al vino. Además, la forma de huevo genera corrientes naturales que mantienen las lías (levaduras) en suspensión, dando vinos más cremosos y puros.",
    analogy: "Es como escuchar música con auriculares de alta fidelidad sin filtros de ecualizador artificial: escuchás exactamente el sabor de la uva y la tierra."
  },
  "foudre": {
    term: "Foudre de Roble (Toneles Gigantes)",
    category: "Crianza",
    icon: "🪵",
    simple: "¿Qué diferencia hay entre una barrica chica y un foudre grande?",
    explanation: "Una barrica chica (225 litros) tiene mucho contacto entre madera y vino (más sabor a roble). Un foudre gigante (2.500 a 5.000 litros) tiene mucho menos contacto relativo, permitiendo que el vino envejezca lentamente y gane redondez sin tapar la fruta.",
    analogy: "Es la diferencia entre ponerle un toque sutil de sal a una comida vs taparla con salsa barbacoa pesada."
  },
  "racimo_entero": {
    term: "Racimo Entero (Whole Cluster)",
    category: "Vinificación",
    icon: "🍇",
    simple: "¿Qué es fermentar con racimo entero?",
    explanation: "Consiste en meter los racimos a fermentar enteros con sus ramitas verdes o leñosas (el escobajo o raspón) en vez de despalillar solo las bayas de uva. Aporta notas herbales frescas (tomillo, jarilla, té negro), frescura y taninos con energía.",
    analogy: "Como cocinar un estofado agregando ramas frescas de romero y laurel enteras en vez de solo pimienta molida."
  },
  "levaduras_indigenas": {
    term: "Levaduras Indígenas / Nativas",
    category: "Fermentación",
    icon: "🧫",
    simple: "¿Qué son las levaduras indígenas?",
    explanation: "Son los microorganismos naturales que viven en la piel de la uva en el propio viñedo. No se compran en un sobre de laboratorio; la fermentación arranca sola de forma espontánea. Dan vinos con personalidad única e irrepetible.",
    analogy: "Es el equivalente a hacer pan de masa madre casera tradicional vs usar levadura industrial rápida."
  },
  "amplitud_termica": {
    term: "Amplitud Térmica de Altura",
    category: "Clima",
    icon: "🌡️",
    simple: "¿Por qué en Mendoza y Salta hay días calientes y noches heladas?",
    explanation: "A más de 1.200 metros de altura, el sol del día madura el azúcar y los aromas de la uva, pero la noche glacial de la cordillera detiene la maduración y fija la acidez natural. Así la uva queda fresca, crujiente y llena de color.",
    analogy: "Como poner una fruta en el freezer por la noche para que no se pase de madura y mantenga toda su frescura crujiente."
  },
  "cosecha_temprana": {
    term: "Cosecha Temprana vs Cosecha Tardía",
    category: "Viticultura",
    icon: "✂️",
    simple: "¿Cuándo se debe cortar la uva?",
    explanation: "Si cosechas temprano (febrero/marzo), el vino tiene menor alcohol, acidez filosa eléctrica y aromas a fruta roja fresca. Si cosechas tarde (abril/mayo), el vino tiene más alcohol, fruta negra madura, mermelada y taninos más dulces.",
    analogy: "Pensalo como comer una manzana verde bien ácida y crujiente vs una manzana roja hiper dulce y harinosa."
  },
  "100_puntos_parker": {
    term: "Los 100 Puntos Parker",
    category: "Crítica",
    icon: "💯",
    simple: "¿Qué significan los 100 Puntos?",
    explanation: "Es el Santo Grial del vino mundial. Creado por Robert Parker y otorgado en Argentina por Luis Gutiérrez, significa que el vino no tiene un solo defecto y roza la perfección absoluta. Muy pocos vinos en la historia lo han logrado (como Zuccardi Piedra Infinita, Gran Enemigo Gualtallary, PerSe La Craie y Catena Adrianna River Stones).",
    analogy: "Es el Balón de Oro o el Oscar a la Mejor Película de la Historia en el mundo de la enología."
  },
  "taninos": {
    term: "Taninos (La Textura en Boca)",
    category: "Degustación",
    icon: "👅",
    simple: "¿Qué son los taninos que secan la boca?",
    explanation: "Son compuestos naturales que vienen de la piel y las semillas de la uva. Dan la estructura y la sensación de textura en las encías y la lengua: pueden sentirse ásperos como lija, sedosos como cachemira o polvorientos como tiza.",
    analogy: "La sensación de sequedad refrescante que sentís cuando tomás té negro bien concentrado sin azúcar."
  },
  "pie_franco": {
    term: "Pie Franco (Viñedos No Injertados)",
    category: "Viñedo",
    icon: "🌱",
    simple: "¿Qué significa viñedo en pie franco?",
    explanation: "A finales del siglo XIX, una plaga llamada Filoxera destruyó casi todos los viñedos de Europa, obligando a injertar las vides sobre raíces americanas. En Argentina y Chile, gracias a la cordillera y el aislamiento, existen viñedos originales de 1910 o 1930 plantados directo sobre sus raíces originales.",
    analogy: "Un árbol milenario que crece sobre sus propias raíces puras desde hace un siglo sin modificaciones genéticas."
  }
};

if (typeof window !== "undefined") {
  window.GLOSSARY_DATA = GLOSSARY_DATA;
}
