/**
 * CRÍTICOS Y JURADOS REALES DEL MUNDO DEL VINO
 * Con sus personalidades, criterios de cata, notas y sistemas de puntuación reales.
 */

const CRITICS_DATA = [
  {
    id: "parker",
    name: "Luis Gutiérrez / Robert Parker's Wine Advocate",
    shortName: "The Wine Advocate (Parker)",
    role: "Crítico de Argentina & España para Robert Parker",
    avatar: "🍷",
    icon: "📖",
    color: "#8B1E2B",
    quote: "Busco la verdad del suelo. La tiza y la frescura no se pueden inventar con barricas nuevas.",
    favoriteTraits: ["calcáreo", "acidez_alta", "hormigón", "racimo_entero", "baja_madera"],
    hatedTraits: ["sobremadurez", "exceso_roble_nuevo", "maceracion_pesada"],
    scoreScale: "100 Puntos Parker",
    isLegendary: true,
    evalFunc: (wine) => {
      let score = 88;
      // Bonus por terroir calcáreo y frescura
      if (wine.terroirType === "calcáreo" || wine.origin.includes("Gualtallary") || wine.origin.includes("Altamira")) score += 4;
      if (wine.harvestTiming === "temprana" || wine.harvestTiming === "optima") score += 3;
      if (wine.vessel === "hormigon" || wine.vessel === "huevo" || wine.vessel === "foudre") score += 3;
      if (wine.wholeCluster >= 15 && wine.wholeCluster <= 35) score += 2;
      if (wine.oakMonths <= 14) score += 1;
      // Penalizaciones
      if (wine.oakType === "roble_nuevo_100" && wine.oakMonths > 18) score -= 5;
      if (wine.harvestTiming === "tardia") score -= 3;
      return Math.min(100, Math.max(82, score));
    },
    generateTastingNote: (score, wine) => {
      if (score >= 99) {
        return `¡100 PUNTOS / PERFECCIÓN ABSOLUTA! Un monumento a la pureza del terruño de ${wine.origin}. Tensión eléctrica de tiza, violetas salvajes y una textura de tanino calcáreo que eriza la piel. Sin maquillaje ni artificios. Una obra maestra mundial.`;
      } else if (score >= 96) {
        return `Extraordinario (${score} pts). Una demostración sublime de lo que puede dar el suelo de ${wine.origin}. Gran frescura lineal, grafito, fruta roja crujiente y una salinidad calcárea memorable.`;
      } else if (score >= 92) {
        return `Muy bueno (${score} pts). Muestra tipicidad y tensión en boca. La fruta se siente vibrante con un final floral muy disfrutable.`;
      } else {
        return `Correcto (${score} pts). Se percibe algo de pesadez o falta de nervio que oculta la pureza mineral de la uva. Hay que afinar la fecha de vendimia.`;
      }
    }
  },
  {
    id: "tim_atkin",
    name: "Tim Atkin MW",
    shortName: "Tim Atkin MW",
    role: "Master of Wine & Autor del Argentina Special Report",
    avatar: "👑",
    icon: "🇬🇧",
    color: "#1E3F66",
    quote: "Argentina tiene los terruños más emocionantes del planeta. Busco equilibrio, alma y bebilidad.",
    favoriteTraits: ["equilibrio", "altitud", "elegancia", "foudres", "acidez_vibrante"],
    hatedTraits: ["vino_bloque", "falta_acidez"],
    scoreScale: "90-100 pts (Reporte Anual)",
    isLegendary: true,
    evalFunc: (wine) => {
      let score = 89;
      if (wine.altitude >= 1100 || wine.origin.includes("Patagonia") || wine.origin.includes("Río Negro")) score += 3;
      if (wine.balanceScore >= 80) score += 4;
      if (wine.vessel === "huevo" || wine.vessel === "foudre" || wine.vessel === "cemento") score += 2;
      if (wine.wholeCluster > 0) score += 2;
      return Math.min(100, Math.max(83, score));
    },
    generateTastingNote: (score, wine) => {
      if (score >= 99) {
        return `CANDIDATO A VINO DEL AÑO (${score} pts). Este ${wine.grape} de ${wine.origin} canta como un coro celestial. Precisión de bisturí, notas a hierbas de montaña (jarilla y tomillo), textura de seda y una persistencia que desafía el tiempo. ¡Bravo!`;
      } else if (score >= 95) {
        return `Excelente vino de Primera Categoría (${score} pts). Muestra la madurez estilística del enólogo. Acidez filosa, fruta intacta y una elegancia aromática digna de los grandes crus del mundo.`;
      } else if (score >= 91) {
        return `Buen exponente (${score} pts). Armonioso y placentero, con taninos dóciles y buena frescura varietal.`;
      } else {
        return `Aceptable (${score} pts). Le falta un poco de definición de parcela y vibración en el paladar medio.`;
      }
    }
  },
  {
    id: "suckling",
    name: "James Suckling",
    shortName: "James Suckling",
    role: "Crítico Internacional de Vinos (JamesSuckling.com)",
    avatar: "⭐",
    icon: "🌟",
    color: "#D4AF37",
    quote: "¡Vino con energía descomunal! Taninos de cachemira, potencia controlada y pura seducción.",
    favoriteTraits: ["taninos_finos", "profundidad", "fruta_negra", "concentracion_noble", "persistencia"],
    hatedTraits: ["verde", "tanino_astringente"],
    scoreScale: "100 Pts Scale",
    isLegendary: true,
    evalFunc: (wine) => {
      let score = 90;
      if (wine.concentration >= 75) score += 3;
      if (wine.tanninQuality >= 80) score += 4;
      if (wine.harvestTiming === "optima") score += 2;
      if (wine.oakMonths >= 8 && wine.oakMonths <= 18) score += 2;
      return Math.min(100, Math.max(85, score));
    },
    generateTastingNote: (score, wine) => {
      if (score >= 99) {
        return `¡100 PUNTOS / MONUMENTO SENSORIAL! Aromas que saltan de la copa: moras azules, piedra triturada, cedro refinado y especias orientales. En boca tiene capas y más capas con taninos de cachemira impecables. Un vino de ensueño.`;
      } else if (score >= 96) {
        return `Soberbio (${score} pts). Enorme energía y profundidad. Los taninos están perfectamente pulidos y el final dura más de un minuto en el paladar.`;
      } else if (score >= 92) {
        return `Muy atractivo (${score} pts). Sedoso, con fruta generosa, cuerpo medio a pleno y gran equilibrio.`;
      } else {
        return `Interesante (${score} pts). Buen paso de boca aunque algo tímido en el ataque aromático.`;
      }
    }
  },
  {
    id: "descorchados",
    name: "Patricio Tapia / Guía Descorchados",
    shortName: "Guía Descorchados",
    role: "Crítico Sudamericano & Autor de Descorchados",
    avatar: "🧉",
    icon: "📜",
    color: "#2D6A4F",
    quote: "Buscamos vinos con nervio, identidad andina y sed. El mejor vino es el que se bebe hasta la última gota.",
    favoriteTraits: ["nervio", "fruta_crujiente", "sin_maquillaje", "acidez_salvaje"],
    hatedTraits: ["madera_dulce", "pesadez"],
    scoreScale: "Puntaje Descorchados",
    isLegendary: false,
    evalFunc: (wine) => {
      let score = 88;
      if (wine.terroirType === "calcáreo" || wine.origin.includes("Chacayes") || wine.origin.includes("Gualtallary")) score += 4;
      if (wine.vessel === "hormigon" || wine.vessel === "anfora" || wine.vessel === "huevo") score += 3;
      if (wine.harvestTiming === "temprana") score += 3;
      if (wine.oakMonths <= 12) score += 2;
      return Math.min(99, Math.max(80, score));
    },
    generateTastingNote: (score, wine) => {
      if (score >= 97) {
        return `¡MEJOR VINO DE LA GUÍA! (${score} pts). Pura electricidad de montaña. Tiene ese agarre de tiza y esa fruta roja que parece recién cortada de la parra. Un vino salvaje, austero y adictivo.`;
      } else if (score >= 94) {
        return `Gran Carácter (${score} pts). Respira el paisaje andino de ${wine.origin}. Sin excesos, con una acidez crujiente que pide comida a gritos.`;
      } else if (score >= 90) {
        return `Muy buen vino (${score} pts). Fresco, honesto y directo. Un fiel reflejo de su lugar de origen.`;
      } else {
        return `Simple (${score} pts). Un vino correcto pero que no logra mostrar el alma salvaje del terruño.`;
      }
    }
  },
  {
    id: "decanter",
    name: "Decanter World Wine Awards (DWWA)",
    shortName: "Decanter Awards (Londres)",
    role: "El concurso de vinos más grande e influyente del mundo",
    avatar: "🥇",
    icon: "🏆",
    color: "#5C1D8D",
    quote: "Cata a ciegas rigurosa por más de 250 Masters of Wine y Master Sommeliers.",
    scoreScale: "Medallas & Best in Show",
    isLegendary: true,
    evalFunc: (wine) => {
      let score = 88;
      if (wine.balanceScore >= 85) score += 5;
      if (wine.complexity >= 80) score += 4;
      if (wine.originScore >= 80) score += 2;
      return Math.min(100, Math.max(82, score));
    },
    generateTastingNote: (score, wine) => {
      if (score >= 97) {
        return `MEDALLA DE PLATINO / BEST IN SHOW (${score} pts). Cata unánime del jurado en Londres. Perfil aromático aristocrático, taninos esculpidos y una complejidad estructural asombrosa. Representa la élite del hemisferio sur.`;
      } else if (score >= 95) {
        return `MEDALLA DE ORO (${score} pts). Excelente equilibrio entre concentración y finura. Un vino de categoría internacional con enorme potencial de guarda.`;
      } else if (score >= 90) {
        return `MEDALLA DE PLATA (${score} pts). Muy bien vinificado, expresivo y con tipicidad varietal clara.`;
      } else {
        return `MEDALLA DE BRONCE (${score} pts). Cumple con los estándares de cata internacional.`;
      }
    }
  }
];

if (typeof window !== "undefined") {
  window.CRITICS_DATA = CRITICS_DATA;
}
