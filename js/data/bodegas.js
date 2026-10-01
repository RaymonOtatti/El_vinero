/**
 * BASE DE DATOS DE BODEGAS REALES DE ARGENTINA Y EL MUNDO
 * Con fotos de dueños/enólogos, etiquetas originales, historias de campaña y vinos por bodega.
 */

const BODEGAS_DATA = [
  {
    id: "noemia",
    name: "Bodega Noemía",
    shortName: "Noemía",
    subtitle: "La Joya Biodinámica de la Patagonia",
    location: "Mainqué, Valle del Río Negro, Patagonia",
    region: "Río Negro",
    flag: "🇦🇷🇩🇰",
    badge: "🌿",
    founded: 2001,
    owner: {
      name: "Hans Vinding-Diers & Condesa Noemí Marone Cinzano",
      role: "Propietarios & Vignerons",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "👨‍🌾",
      dialogGreeting: "¡Hola! Soy Hans Vinding-Diers. En el Alto Valle de Río Negro trabajamos la viña como un jardín sagrado desde 1932. Te he llamado porque necesitamos elaborar nuestras 3 etiquetas icónicas. ¿Estás listo para aceptar el reto de la Patagonia?",
      welcomeVoice: "La viña de 1932 no se toca con químicos. Aquí manda el río y la luna."
    },
    difficulty: "Alta",
    prestige: 97,
    colors: {
      primary: "#4A121E",
      secondary: "#C8963E",
      accent: "#F6F1EA",
      bgGradient: "linear-gradient(135deg, #300c14 0%, #581825 100%)",
      cardBorder: "#C8963E"
    },
    description: "Ubicada en Mainqué (Río Negro), rescata un viñedo centenario plantado en 1932 con Malbec prefiloxérico en pie franco. Agricultura biodinámica certificada y una elegancia patagónica que fascina a la crítica mundial.",
    philosophy: "Tratamos el viñedo como un jardín vivo. Vendimiamos de noche bajo la luna, prensamos con suavidad y dejamos que el alma del valle fluya sin química.",
    terroirInfo: "Suelos aluviales de limo, arena y cantos rodados regados por las aguas puras del río Negro. Clima templado y seco con vientos constantes.",
    campaignWines: [
      {
        step: 1,
        id: "a_lisa",
        name: "A Lisa Malbec",
        grape: "Malbec (90%) - Merlot (10%)",
        line: "Vino de Entrada / Frescura Patagónica",
        targetScore: 94,
        description: "El vino más fresco y directo de la bodega. Proviene de viñedos jóvenes y de productores locales de Mainqué. Debe ser fluido, floral y crujiente.",
        idealVessel: "cemento",
        idealHarvest: "temprana",
        idealCluster: 10,
        idealAging: 8,
        labelDesign: {
          bgColor: "#FAF6EE",
          textColor: "#2B1117",
          accentColor: "#C8963E",
          fontStyle: "italic",
          sealText: "A LISA • PATAGONIA",
          imageBadge: "🌿🍇",
          vintageText: "COSECHA MAINQUÉ"
        },
        briefing: "Hans te llama: 'Empecemos con A Lisa. Quiero que refleje la fruta pura de Mainqué. Cosecha temprano para mantener esa acidez eléctrica y no abuses de la madera.'"
      },
      {
        step: 2,
        id: "j_alberto",
        name: "J. Alberto Malbec",
        grape: "Malbec (95%) - Merlot (5%)",
        line: "Viñedo Orgánico de 1955",
        targetScore: 97,
        description: "Elaborado con viñedos certificados orgánicos y biodinámicos plantados en 1955. Fermentación espontánea en piletas de cemento sin epoxi.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 20,
        idealAging: 12,
        labelDesign: {
          bgColor: "#F4ECE1",
          textColor: "#3D0E16",
          accentColor: "#B58A3E",
          fontStyle: "serif",
          sealText: "J. ALBERTO • 1955",
          imageBadge: "📜🍷",
          vintageText: "VIÑEDO BIODINÁMICO"
        },
        briefing: "Hans te reúne en la cava: 'J. Alberto es nuestro homenaje familiar. Las viñas de 1955 tienen una armonía natural única. Usa solo levaduras nativas.'"
      },
      {
        step: 3,
        id: "noemia_1932",
        name: "Bodega Noemía Malbec 1932",
        grape: "Malbec Prefiloxérico 100%",
        line: "Gran Icono Centenario (1932)",
        targetScore: 99,
        description: "La joya máxima de la Patagonia. Viñedo original de 1932 en pie franco de 1.5 hectáreas. Uva despalillada a mano grano por grano por mujeres del pueblo.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 18,
        labelDesign: {
          bgColor: "#1A1A1A",
          textColor: "#F7F1E6",
          accentColor: "#D4AF37",
          fontStyle: "luxury",
          sealText: "BODEGA NOEMÍA • 1932",
          imageBadge: "👑💎",
          vintageText: "PIE FRANCO CENTENARIO"
        },
        briefing: "Hans te mira fijamente con una copa en la mano: 'Llegó el momento cumbre. Aquí está la parcela de 1932. Si lo haces perfecto, Parker y Tim Atkin nos darán la gloria absoluta.'"
      }
    ],
    preferredVarietals: ["Malbec", "Merlot", "Pinot Noir"],
    reputationReq: 20
  },
  {
    id: "zuccardi",
    name: "Zuccardi Valle de Uco",
    shortName: "Zuccardi",
    subtitle: "Piedra, Altura y Hormigón",
    location: "Paraje Altamira & San Pablo, Valle de Uco, Mendoza",
    region: "Valle de Uco",
    flag: "🇦🇷",
    badge: "⛰️",
    founded: 1963,
    owner: {
      name: "Sebastián Zuccardi",
      role: "Director de Enología & Viticultura",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "⛰️",
      dialogGreeting: "¡Hola! Soy Sebastián Zuccardi. En el Valle de Uco no buscamos vinos perfectos, buscamos vinos de lugar. Nuestra bodega de piedra en Altamira es un homenaje a la cordillera. ¿Te sumás al equipo?",
      welcomeVoice: "La madera nueva maquilla el suelo; el hormigón lo revela en estado puro."
    },
    difficulty: "Media",
    prestige: 98,
    colors: {
      primary: "#242424",
      secondary: "#C29F52",
      accent: "#E2DCD2",
      bgGradient: "linear-gradient(135deg, #1c1c1c 0%, #2f2b25 100%)",
      cardBorder: "#C29F52"
    },
    description: "Tres veces elegida 'Mejor Bodega del Mundo'. Su bodega construida con piedra calcárea de Paraje Altamira es el templo de la vinificación en hormigón crudo.",
    philosophy: "Vinos con textura de tiza. Sin madera que tape la piedra.",
    terroirInfo: "Suelos aluviales colmados de piedras con carbonato de calcio blanco a más de 1.100 msnm.",
    campaignWines: [
      {
        step: 1,
        id: "poligonos",
        name: "Polígonos del Valle de Uco San Pablo",
        grape: "Cabernet Franc / Malbec",
        line: "Expresión de Terroir de Altura",
        targetScore: 95,
        description: "Elaborado con viñedos de San Pablo a 1.400 msnm, la zona más fría del Valle de Uco. Acidez punzante y hierbas de montaña.",
        idealVessel: "hormigon",
        idealHarvest: "temprana",
        idealCluster: 20,
        idealAging: 10,
        labelDesign: {
          bgColor: "#EBE6DC",
          textColor: "#1A1A1A",
          accentColor: "#C29F52",
          fontStyle: "geometric",
          sealText: "POLÍGONOS • SAN PABLO",
          imageBadge: "📐⛰️",
          vintageText: "1400 METROS"
        },
        briefing: "Sebastián te recibe en la bodega de piedra: 'Empezamos con Polígonos en San Pablo. Es el viñedo más frío. No toques madera; todo a pileta de hormigón crudo.'"
      },
      {
        step: 2,
        id: "aluvional",
        name: "Zuccardi Aluvional Gualtallary",
        grape: "Malbec 100%",
        line: "Suelos Aluvionales Calcáreos",
        targetScore: 98,
        description: "Un Malbec vertical, con notas a tomillo silvestre, fruta negra crujiente y una textura de taninos calcáreos que acaricia el paladar.",
        idealVessel: "hormigon",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 14,
        labelDesign: {
          bgColor: "#292929",
          textColor: "#F5F2EB",
          accentColor: "#C29F52",
          fontStyle: "serif",
          sealText: "ALUVIONAL • GUALTALLARY",
          imageBadge: "🌊🪨",
          vintageText: "SUELO CALCÁREO"
        },
        briefing: "Sebastián camina con vos sobre la grava blanca: 'Aluvional Gualtallary es pura tensión. Buscamos esa sensación de tiza en las encías. Cosechemos en el punto exacto.'"
      },
      {
        step: 3,
        id: "piedra_infinita",
        name: "Zuccardi Finca Piedra Infinita",
        grape: "Malbec Paraje Altamira",
        line: "El Santo Grial de 100 Puntos Parker",
        targetScore: 100,
        description: "El vino que consagró a la Argentina en la cima mundial. Proviene de una parcela extrema de Paraje Altamira donde debieron remover miles de toneladas de roca.",
        idealVessel: "hormigon",
        idealHarvest: "optima",
        idealCluster: 30,
        idealAging: 16,
        labelDesign: {
          bgColor: "#141414",
          textColor: "#FFFFFF",
          accentColor: "#D4AF37",
          fontStyle: "luxury",
          sealText: "PIEDRA INFINITA • 100 PTS",
          imageBadge: "👑⛰️",
          vintageText: "PARAJE ALTAMIRA"
        },
        briefing: "Sebastián te entrega las llaves de la sala de microvinificación: 'Finca Piedra Infinita es nuestra obra maestra. Luis Gutiérrez de Parker vendrá a catar. Hagamos historia.'"
      }
    ],
    preferredVarietals: ["Malbec", "Cabernet Franc", "Chardonnay"],
    reputationReq: 30
  },
  {
    id: "el_enemigo",
    name: "El Enemigo (Bodega Aleanna)",
    shortName: "El Enemigo",
    subtitle: "La Divina Comedia y el Culto al Cabernet Franc",
    location: "Chachingo, Maipú & Gualtallary, Valle de Uco, Mendoza",
    region: "Chachingo / Gualtallary",
    flag: "🇦🇷",
    badge: "👑",
    founded: 2007,
    owner: {
      name: "Alejandro Vigil & Adrianna Catena",
      role: "El Messi del Vino & Creadores",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "👑",
      dialogGreeting: "¡Hola maestro! Soy Alejandro Vigil. En Chachingo vinificamos con pasión, locura y lecturas del Dante. El verdadero enemigo es el que llevamos dentro. ¿Te animás a hacer el mejor Cabernet Franc del mundo?",
      welcomeVoice: "La acidez es la columna vertebral de la vida."
    },
    difficulty: "Alta",
    prestige: 99,
    colors: {
      primary: "#1C1917",
      secondary: "#CCA43B",
      accent: "#9E2A2B",
      bgGradient: "linear-gradient(135deg, #141210 0%, #2b2622 100%)",
      cardBorder: "#CCA43B"
    },
    description: "La creación de Alejandro Vigil y Adrianna Catena. Elevó el Cabernet Franc argentino al Olimpo de los 100 Puntos Parker con crianza en foudres centenarios.",
    philosophy: "Vinos multidimensionales, profundos y con alma dantesca.",
    terroirInfo: "Aluvional de grava y caliza en Gualtallary combinado con el carácter histórico de Chachingo.",
    campaignWines: [
      {
        step: 1,
        id: "el_enemigo_malbec",
        name: "El Enemigo Malbec",
        grape: "Malbec (85%) - Cabernet Franc (15%)",
        line: "El Corte Rebelde de Chachingo",
        targetScore: 95,
        description: "Malbec enriquecido con un toque de Cabernet Franc de Gualtallary. Crianza en foudres viejos de 100 años.",
        idealVessel: "foudre",
        idealHarvest: "optima",
        idealCluster: 15,
        idealAging: 12,
        labelDesign: {
          bgColor: "#EBE3D5",
          textColor: "#1F1A17",
          accentColor: "#9E2A2B",
          fontStyle: "vintage",
          sealText: "EL ENEMIGO • CHACHINGO",
          imageBadge: "⚔️👑",
          vintageText: "MENDOZA ARGENTINA"
        },
        briefing: "Alejandro Vigil te sirve un vaso en su casona: 'Empecemos con El Enemigo Malbec. Le metemos un 15% de Cabernet Franc para darle ese nervio eléctrico.'"
      },
      {
        step: 2,
        id: "el_enemigo_chardonnay",
        name: "El Enemigo Chardonnay (Velo de Flor)",
        grape: "Chardonnay 100%",
        line: "Crianza Biológica Estilo Jura",
        targetScore: 97,
        description: "Un blanco único en América: fermentado y criado bajo un fino velo de levaduras de flor como en el Jura francés. Frutos secos, salinidad y acidez filosa.",
        idealVessel: "foudre",
        idealHarvest: "temprana",
        idealCluster: 0,
        idealAging: 14,
        labelDesign: {
          bgColor: "#F7F3E9",
          textColor: "#2B221B",
          accentColor: "#CCA43B",
          fontStyle: "italic",
          sealText: "EL ENEMIGO • CHARDONNAY",
          imageBadge: "🌼🍷",
          vintageText: "VELO DE FLOR"
        },
        briefing: "Alejandro te muestra los foudres con velo: 'Este Chardonnay rompe todos los esquemas. Crianza con levadura en superficie. ¡Un blanco con alma salina!'"
      },
      {
        step: 3,
        id: "gran_enemigo_gualtallary",
        name: "Gran Enemigo Gualtallary Single Vineyard",
        grape: "Cabernet Franc (85%) - Malbec (15%)",
        line: "La Leyenda Mundial de 100 Puntos Parker",
        targetScore: 100,
        description: "Múltiples cosechas consagradas con 100 Puntos Parker. Suelo calcáreo a 1.470 msnm, frescura glacial y complejidad dantesca.",
        idealVessel: "foudre",
        idealHarvest: "optima",
        idealCluster: 30,
        idealAging: 18,
        labelDesign: {
          bgColor: "#111111",
          textColor: "#FFFFFF",
          accentColor: "#CCA43B",
          fontStyle: "luxury",
          sealText: "GRAN ENEMIGO • 100 PTS",
          imageBadge: "👑🔥",
          vintageText: "GUALTALLARY SINGLE VINEYARD"
        },
        briefing: "Alejandro te abraza: 'Aquí nos jugamos la vida. Gran Enemigo Gualtallary. Cabernet Franc de caliza pura. Que tiemble Burdeos.'"
      }
    ],
    preferredVarietals: ["Cabernet Franc", "Malbec", "Chardonnay", "Bonarda"],
    reputationReq: 40
  },
  {
    id: "perse",
    name: "PerSe",
    shortName: "PerSe",
    subtitle: "Micro-Terruño & Alta Tensión",
    location: "Gualtallary Monasterio, Valle de Uco, Mendoza",
    region: "Gualtallary",
    flag: "🇦🇷",
    badge: "✨",
    founded: 2012,
    owner: {
      name: "David Bonomi & Edgardo 'Edy' Del Pópolo",
      role: "Enólogo & Viticultor de Culto",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "✨",
      dialogGreeting: "Hola. Somos David y Edy. En PerSe no hacemos volumen; elaboramos micro-parcelas a casi 1.500 msnm en el Monasterio de Gualtallary. Todo es manual, austero y mineral.",
      welcomeVoice: "La tiza pura no necesita aditivos."
    },
    difficulty: "Experto",
    prestige: 99,
    colors: {
      primary: "#141C28",
      secondary: "#D4AF37",
      accent: "#F0F4F8",
      bgGradient: "linear-gradient(135deg, #0e141f 0%, #1a2738 100%)",
      cardBorder: "#D4AF37"
    },
    description: "El proyecto de culto más codiciado de Argentina. Micro-vinificaciones de grava calcárea que alcanzaron los 100 puntos Parker con *La Craie* e *I-Tzu*.",
    philosophy: "Intervención mínima, racimo entero, levaduras indígenas y respeto fanático por la grava calcárea.",
    terroirInfo: "Laderas escarpadas con suelos de tiza pura a casi 1.500 metros sobre el mar.",
    campaignWines: [
      {
        step: 1,
        id: "perse_inseparable",
        name: "PerSe Inseparable",
        grape: "Malbec 100%",
        line: "Micro-Parcela de Gualtallary",
        targetScore: 95,
        description: "Malbec puro, directo y filoso. Fermentado en barricas abiertas y criado en roble usado sin tostar.",
        idealVessel: "huevo",
        idealHarvest: "temprana",
        idealCluster: 20,
        idealAging: 12,
        labelDesign: {
          bgColor: "#FFFFFF",
          textColor: "#141C28",
          accentColor: "#D4AF37",
          fontStyle: "minimalist",
          sealText: "PERSE • INSEPARABLE",
          imageBadge: "✨🍷",
          vintageText: "GUALTALLARY"
        },
        briefing: "David Bonomi te muestra los microdepósitos: 'En PerSe Inseparable buscamos la definición de fruta pura. Cero maquillaje.'"
      },
      {
        step: 2,
        id: "perse_jubileus",
        name: "PerSe Jubileus",
        grape: "Malbec - Cabernet Franc",
        line: "Ladera Calcárea Monasterio",
        targetScore: 98,
        description: "De una ladera empinada de grava y carbonato de calcio. Textura de seda, violetas y notas a piedra partida.",
        idealVessel: "huevo",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 14,
        labelDesign: {
          bgColor: "#0E141F",
          textColor: "#FFFFFF",
          accentColor: "#D4AF37",
          fontStyle: "serif",
          sealText: "PERSE • JUBILEUS",
          imageBadge: "🏔️✨",
          vintageText: "1450 METROS"
        },
        briefing: "Edy Del Pópolo te explica la caliza: 'Jubileus nace en la pendiente del Monasterio. La uva es diminuta. Prensamos con prensa manual de canasto.'"
      },
      {
        step: 3,
        id: "perse_la_craie",
        name: "PerSe La Craie (100 Pts Parker)",
        grape: "Malbec - Cabernet Franc",
        line: "La Cumbre Mineral de América",
        targetScore: 100,
        description: "La Craie (La Tiza). Una de las creaciones más perfectas del hemisferio sur. Consagrado con 100 Puntos Parker por su salinidad y tensión cósmica.",
        idealVessel: "huevo",
        idealHarvest: "optima",
        idealCluster: 30,
        idealAging: 16,
        labelDesign: {
          bgColor: "#FBFBFC",
          textColor: "#111111",
          accentColor: "#D4AF37",
          fontStyle: "luxury",
          sealText: "LA CRAIE • 100 PTS PARKER",
          imageBadge: "👑💎",
          vintageText: "MONASTERIO GUALTALLARY"
        },
        briefing: "David y Edy te miran con orgullo: 'Llegó el turno de La Craie. Son solo 3 barricas en todo el mundo. Cada gota debe ser pura emoción de tiza.'"
      }
    ],
    preferredVarietals: ["Malbec", "Cabernet Franc"],
    reputationReq: 50
  },
  {
    id: "chacra",
    name: "Bodega Chacra",
    shortName: "Chacra",
    subtitle: "El Pinot Noir Perfecto del Fin del Mundo",
    location: "Mainqué, Valle del Río Negro, Patagonia",
    region: "Río Negro",
    flag: "🇦🇷🇮🇹",
    badge: "🍷",
    founded: 2004,
    owner: {
      name: "Piero Incisa della Rocchetta",
      role: "Fundador & Vigneron (Familia Sassicaia)",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "🍷",
      dialogGreeting: "Bonjour. Soy Piero Incisa della Rocchetta. En Chacra elaboramos Pinot Noir y Chardonnay biodinámicos con viñedos no injertados de 1932 y 1955. La elegancia es nuestra única obsesión.",
      welcomeVoice: "El Pinot Noir no se fuerza; se escucha y se acompaña."
    },
    difficulty: "Experto",
    prestige: 99,
    colors: {
      primary: "#541221",
      secondary: "#B8976C",
      accent: "#FDFBF7",
      bgGradient: "linear-gradient(135deg, #380c16 0%, #631728 100%)",
      cardBorder: "#B8976C"
    },
    description: "Fundada por Piero Incisa della Rocchetta (creadores de Sassicaia) con Jean-Marc Roulot. 100 Puntos James Suckling (Vino del Año Mundial 2020 con *Chacra 32*).",
    philosophy: "Pureza, sutileza borgoñona y respeto sacramental al suelo patagónico.",
    terroirInfo: "Grava fluvial, arcilla y caliza en el oasis de Mainqué, Río Negro.",
    campaignWines: [
      {
        step: 1,
        id: "barda_pinot",
        name: "Barda Pinot Noir",
        grape: "Pinot Noir 100%",
        line: "Frescura y Fruta Roja Patagónica",
        targetScore: 94,
        description: "El Pinot Noir más vibrante de la bodega. Fermentación espontánea a bajas temperaturas en piletas de cemento.",
        idealVessel: "cemento",
        idealHarvest: "temprana",
        idealCluster: 15,
        idealAging: 10,
        labelDesign: {
          bgColor: "#FAF6F0",
          textColor: "#4A121E",
          accentColor: "#B8976C",
          fontStyle: "serif",
          sealText: "BARDA • PINOT NOIR",
          imageBadge: "🍒🍷",
          vintageText: "PATAGONIA ARGENTINA"
        },
        briefing: "Piero te recibe en la bodega patagónica: 'Barda es nuestra carta de presentación. Debe ser ligero, con perfume de cerezas silvestres y cero astringencia.'"
      },
      {
        step: 2,
        id: "chacra_55",
        name: "Chacra 55 (Cincuenta y Cinco)",
        grape: "Pinot Noir 100%",
        line: "Viñedo No Injertado de 1955",
        targetScore: 98,
        description: "Elaborado con vides plantadas en 1955 sobre sus raíces originales. Infusión suave, sin extracción mecánica, puro pétalo de rosa y tierra húmeda.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 12,
        labelDesign: {
          bgColor: "#F3ECE1",
          textColor: "#380D17",
          accentColor: "#B8976C",
          fontStyle: "classic",
          sealText: "CINCUENTA Y CINCO • 1955",
          imageBadge: "📜🍷",
          vintageText: "VIÑAS VIEJAS MAINQUÉ"
        },
        briefing: "Piero te muestra las parras de 1955: 'Chacra 55 se elabora casi por infusión de té. Nada de sobre-extracción. Dejemos que la sutileza hable sola.'"
      },
      {
        step: 3,
        id: "chacra_32",
        name: "Chacra 32 Pinot Noir (100 Pts Suckling)",
        grape: "Pinot Noir 100%",
        line: "Vino del Año Mundial",
        targetScore: 100,
        description: "Elegido Vino del Año en el Mundo por James Suckling con 100 puntos. Proviene de una parcela plantada en 1932. Taninos de seda y complejidad infinita.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 30,
        idealAging: 18,
        labelDesign: {
          bgColor: "#1F0A10",
          textColor: "#FFFFFF",
          accentColor: "#CCA43B",
          fontStyle: "luxury",
          sealText: "TREINTA Y DOS • 100 PTS",
          imageBadge: "👑⭐",
          vintageText: "1932 PREFILOXÉRICO"
        },
        briefing: "Piero te sirve la copa de la parcela 1932: 'Este es el viñedo que cambió la historia del Pinot Noir en Sudamérica. Busca la perfección.'"
      }
    ],
    preferredVarietals: ["Pinot Noir", "Chardonnay"],
    reputationReq: 45
  },
  {
    id: "cru_montana",
    name: "Cru de Montaña",
    shortName: "Cru de Montaña",
    subtitle: "Viticultura Heroica en Pendientes Extremas",
    location: "Gualtallary & Monasterio, Valle de Uco, Mendoza",
    region: "Gualtallary",
    flag: "🇦🇷",
    badge: "🏔️",
    founded: 2018,
    owner: {
      name: "Gabriel Campana",
      role: "Enólogo de Altura Extrema",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "🏔️",
      dialogGreeting: "¡Buenas! Soy Gabriel Campana. En Cru de Montaña trepamos las laderas más empinadas de Gualtallary a más de 1.450 msnm. Vinos con acidez eléctrica y piedra viva.",
      welcomeVoice: "Vino de roca, viento y sol andino."
    },
    difficulty: "Media",
    prestige: 93,
    colors: {
      primary: "#1A3326",
      secondary: "#A3B18A",
      accent: "#EAECE7",
      bgGradient: "linear-gradient(135deg, #102118 0%, #244634 100%)",
      cardBorder: "#A3B18A"
    },
    description: "Proyecto audaz de viticultura heroica en Gualtallary enfocado en vinos minerales, directos y con energía andina.",
    philosophy: "Pureza de montaña sin artificios ni madera pesada.",
    terroirInfo: "Grava calcárea en pendientes empinadas con baja retención hídrica y noches gélidas.",
    campaignWines: [
      {
        step: 1,
        id: "cru_malbec",
        name: "Cru de Montaña Malbec",
        grape: "Malbec 100%",
        line: "Malbec de Pendiente Andina",
        targetScore: 95,
        description: "Fruta roja crocante, grafito y acidez natural intensa. Criado en huevos de concreto.",
        idealVessel: "huevo",
        idealHarvest: "temprana",
        idealCluster: 15,
        idealAging: 10,
        labelDesign: {
          bgColor: "#F0F2ED",
          textColor: "#1A3326",
          accentColor: "#A3B18A",
          fontStyle: "mountain",
          sealText: "CRU DE MONTAÑA • MALBEC",
          imageBadge: "🏔️🍇",
          vintageText: "GUALTALLARY 1450M"
        },
        briefing: "Gabriel te espera al borde del precipicio: 'Probemos el Malbec de la ladera norte. Tiene que ser filoso como una navaja.'"
      },
      {
        step: 2,
        id: "cru_cab_franc",
        name: "Cru de Montaña Cabernet Franc",
        grape: "Cabernet Franc 100%",
        line: "Hierbas Silvestres y Tiza",
        targetScore: 97,
        description: "Aromas a jarilla, tomillo silvestre y pimienta rosa. Textura calcárea firme y final salino.",
        idealVessel: "huevo",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 12,
        labelDesign: {
          bgColor: "#1F2D24",
          textColor: "#EAECE7",
          accentColor: "#A3B18A",
          fontStyle: "serif",
          sealText: "CRU DE MONTAÑA • CABERNET FRANC",
          imageBadge: "🌿⚔️",
          vintageText: "SUELO DE CALIZAS"
        },
        briefing: "Gabriel te convida las uvas de Cabernet Franc: 'Fijate cómo crujen los hollejos. Este Franc de montaña va a sorprender a Tim Atkin.'"
      },
      {
        step: 3,
        id: "cru_parcela_calcareo",
        name: "Cru de Montaña Parcela Calcáreo Extremo",
        grape: "Malbec - Franc Blend",
        line: "El Icono de la Cumbre",
        targetScore: 99,
        description: "De la parcela más alta y blanca de tiza en el Monasterio. Tensión inolvidable, 98-99 puntos.",
        idealVessel: "huevo",
        idealHarvest: "optima",
        idealCluster: 30,
        idealAging: 16,
        labelDesign: {
          bgColor: "#0E1712",
          textColor: "#FFFFFF",
          accentColor: "#D4AF37",
          fontStyle: "luxury",
          sealText: "CRU DE MONTAÑA • CALCÁREO",
          imageBadge: "👑⛰️",
          vintageText: "PARCELA EXTREMA"
        },
        briefing: "Gabriel te entrega la última barrica: 'Esta es la cumbre de Cru de Montaña. Si dominas la fermentación, logramos el puntaje perfecto.'"
      }
    ],
    preferredVarietals: ["Malbec", "Cabernet Franc", "Chardonnay"],
    reputationReq: 15
  },
  {
    id: "la_estocada",
    name: "Sitio La Estocada",
    shortName: "La Estocada",
    subtitle: "El Espíritu Indómito de Los Chacayes",
    location: "Los Chacayes, Tunuyán, Valle de Uco, Mendoza",
    region: "Los Chacayes",
    flag: "🇦🇷",
    badge: "⚔️",
    founded: 2016,
    owner: {
      name: "Cristian Moor & Tono Arguello",
      role: "Viticultores & Enólogos de Los Chacayes",
      photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=240&h=240&fit=crop&crop=faces&q=80",
      avatar: "⚔️",
      dialogGreeting: "¡Hola! Somos Cristian y Tono de Sitio La Estocada. Los Chacayes es una tierra indómita de piedras volcánicas, jarilla y hierbas nativas. Vinos con agarre, potencia y gran perfume floral.",
      welcomeVoice: "El carácter de Los Chacayes no se doma; se respeta."
    },
    difficulty: "Media",
    prestige: 93,
    colors: {
      primary: "#4E2129",
      secondary: "#D48B6A",
      accent: "#F5ECE5",
      bgGradient: "linear-gradient(135deg, #35141b 0%, #5d252f 100%)",
      cardBorder: "#D48B6A"
    },
    description: "Ubicado en el epicentro agreste de Los Chacayes (1.250 msnm). Suelos pedregosos y flora nativa que transmiten notas balsámicas y taninos firmes.",
    philosophy: "Honrar la rusticidad noble de Los Chacayes.",
    terroirInfo: "Cono aluvial pedregoso con rocas volcánicas, basalto y jarilla autóctona.",
    campaignWines: [
      {
        step: 1,
        id: "estocada_malbec",
        name: "Sitio La Estocada Malbec Chacayes",
        grape: "Malbec 100%",
        line: "El Carácter de Los Chacayes",
        targetScore: 95,
        description: "Malbec intenso, con perfume a violetas salvajes, tomillo y taninos con gran agarre.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 15,
        idealAging: 10,
        labelDesign: {
          bgColor: "#FAF4EE",
          textColor: "#4E2129",
          accentColor: "#D48B6A",
          fontStyle: "rustic",
          sealText: "LA ESTOCADA • MALBEC",
          imageBadge: "⚔️🍷",
          vintageText: "LOS CHACAYES"
        },
        briefing: "Cristian Moor te recibe en la viña: 'En Los Chacayes el Malbec tiene garra. Fermentemos en cemento crudo y preservemos esas notas a jarilla silvestre.'"
      },
      {
        step: 2,
        id: "estocada_cab_franc",
        name: "Sitio La Estocada Cabernet Franc",
        grape: "Cabernet Franc 100%",
        line: "Balsámico & Pedregoso",
        targetScore: 96,
        description: "Notas a pimiento asado noble, hierbas de montaña y taninos firmes con final especiado.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 20,
        idealAging: 12,
        labelDesign: {
          bgColor: "#3E171E",
          textColor: "#F5ECE5",
          accentColor: "#D48B6A",
          fontStyle: "serif",
          sealText: "LA ESTOCADA • CABERNET FRANC",
          imageBadge: "🌿🍷",
          vintageText: "PARCELA BASALTO"
        },
        briefing: "Tono Arguello te muestra los suelos: 'El Cabernet Franc de Los Chacayes es salvaje y aromático. Cuidemos la extracción para no pasarnos de tanino.'"
      },
      {
        step: 3,
        id: "estocada_gran_corte",
        name: "La Estocada Gran Corte de Terroir",
        grape: "Malbec (60%) - Franc (30%) - Syrah (10%)",
        line: "El Gran Icono Indómito",
        targetScore: 98,
        description: "Ensamblaje legendario de las mejores parcelas de piedra volcánica de Los Chacayes.",
        idealVessel: "cemento",
        idealHarvest: "optima",
        idealCluster: 25,
        idealAging: 16,
        labelDesign: {
          bgColor: "#1A090C",
          textColor: "#FFFFFF",
          accentColor: "#E5A93C",
          fontStyle: "luxury",
          sealText: "LA ESTOCADA • GRAN CORTE",
          imageBadge: "👑⚔️",
          vintageText: "ICONO LOS CHACAYES"
        },
        briefing: "Cristian y Tono te invitan a ensamblar las barricas: 'Vamos a crear el Gran Corte de Terroir. Descorchados nos espera para la cata a ciegas.'"
      }
    ],
    preferredVarietals: ["Malbec", "Cabernet Franc", "Syrah"],
    reputationReq: 10
  }
];

// Finca Escuela para inicio
const BODEGA_INICIAL_APRENDIZ = BODEGAS_DATA[0];

if (typeof window !== "undefined") {
  window.BODEGAS_DATA = BODEGAS_DATA;
  window.BODEGA_INICIAL_APRENDIZ = BODEGA_INICIAL_APRENDIZ;
}
