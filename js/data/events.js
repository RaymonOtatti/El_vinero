/**
 * EVENTOS DE CAMPAÑA, EMERGENCIAS Y DIFICULTADES EN BODEGA
 * Situaciones de riesgo real donde el jugador debe arriesgar o jugar a lo seguro.
 */

const VINTAGE_CLIMATES = [
  {
    yearName: "Añada de Ensueño: Frescura Andina & Tiza Pura",
    description: "Un verano templado con noches heladas y maduración lenta. La acidez natural es eléctrica y el perfil calcáreo es insuperable.",
    bonusTerroir: 15,
    bonusAcidity: 10,
    risk: "Bajo",
    icon: "❄️✨",
    idealHarvest: "optima"
  },
  {
    yearName: "Añada Cálida & Radiación Solar Intensa",
    description: "Enero y febrero con temperaturas altas. Si no cosechas a tiempo, el vino se sobremadurará y perderá la elegancia.",
    bonusTerroir: -5,
    bonusAcidity: -15,
    risk: "Medio",
    icon: "☀️🔥",
    idealHarvest: "temprana"
  },
  {
    yearName: "Añada Fría & Lluvias en Cosecha",
    description: "Lluvias inesperadas de marzo. Se requiere una selección estricta racimo a racimo en viñedo para evitar botrytis.",
    bonusTerroir: 5,
    bonusAcidity: 12,
    risk: "Alto",
    icon: "🌧️🍇",
    idealHarvest: "temprana"
  },
  {
    yearName: "Añada de Helada Tardía en Primavera",
    description: "Una helada negra redujo los rendimientos en un 40%. Poca uva, pero la que quedó tiene una concentración asombrosa.",
    bonusTerroir: 20,
    bonusAcidity: 5,
    risk: "Alto",
    icon: "🧊🌿",
    idealHarvest: "optima"
  }
];

// EMERGENCIAS Y DIFICULTADES EN EL PROCESO DE ELABORACIÓN
const CELLAR_HAZARDS = [
  {
    id: "vasijas_rotas",
    title: "¡ALERTA EN BODEGA: Se rajaron 2 vasijas de hormigón!",
    category: "Accidente en Cava",
    icon: "💥🧱",
    description: "La presión de la fermentación y un micro-sismo andino rajaron 2 piletas de hormigón crudo. El mosto de la mejor parcela está goteando y hay que tomar una decisión urgente en los próximos 15 minutos.",
    options: [
      {
        text: "OPCIÓN ARRIESGADA: Trasvasar de urgencia a barricas viejas usadas de roble francés.",
        riskLevel: "Medio (65% Éxito)",
        rollChance: 0.65,
        successOutcome: {
          scoreBonus: +3,
          wealthCost: 0,
          narrative: "¡Maniobra magistral! El roble usado aportó una pátina sedosa sin tapar la fruta. Los críticos destacaron la complejidad inesperada."
        },
        failureOutcome: {
          scoreBonus: -4,
          wealthCost: -1500,
          narrative: "El traspaso apresurado causó una ligera oxidación y un aporte de madera no deseado. Luis Gutiérrez notó la falta de pureza."
        }
      },
      {
        text: "OPCIÓN CONSERVADORA: Descartar el mosto dañado y salvar solo lo que entra en los huevos restantes.",
        riskLevel: "Seguro (100%)",
        rollChance: 1.0,
        successOutcome: {
          scoreBonus: 0,
          wealthCost: -3000,
          narrative: "Mantuviste el estilo 100% puro en hormigón, aunque se perdió un 35% del volumen de producción."
        }
      },
      {
        text: "OPCIÓN IMPROVISADA: Comprar tanques de acero inoxidable de emergencia con tu dinero ($2,500 USD).",
        riskLevel: "Seguro (100%)",
        requireWealth: 2500,
        rollChance: 1.0,
        successOutcome: {
          scoreBonus: +1,
          wealthCost: -2500,
          narrative: "Salvaste todo el lote con tecnología aséptica. El vino resultó ultra limpio y de gran nitidez frutal."
        }
      }
    ]
  },
  {
    id: "parada_fermentacion",
    title: "¡PELIGRO: Parada de Fermentación por Levaduras Indígenas!",
    category: "Riesgo Microbiológico",
    icon: "🧫⚠️",
    description: "Las levaduras salvajes del viñedo se quedaron sin energía a mitad de fermentación por una noche glacial. Hay 12 gramos de azúcar residual sin fermentar.",
    options: [
      {
        text: "OPCIÓN ARRIESGADA: Calentar suavemente la pileta y confiar en la fermentación espontánea.",
        riskLevel: "Alto (50% Éxito)",
        rollChance: 0.50,
        successOutcome: {
          scoreBonus: +5,
          wealthCost: 0,
          narrative: "¡Milagro biológico! Las levaduras nativas despertaron y generaron notas a tomillo, pólvora y tiza memorables. Candidato a 100 puntos."
        },
        failureOutcome: {
          scoreBonus: -6,
          wealthCost: 0,
          narrative: "Proliferaron bacterias acéticas y el vino ganó acidez volátil. Tim Atkin frunció el ceño en la cata."
        }
      },
      {
        text: "OPCIÓN SEGURA: Inocular levaduras seleccionadas de laboratorio para terminar el trabajo.",
        riskLevel: "Seguro (100%)",
        rollChance: 1.0,
        successOutcome: {
          scoreBonus: -1,
          wealthCost: -500,
          narrative: "Fermentación completada a la perfección de forma limpia, aunque perdió un toque del misterio salvaje del terruño."
        }
      }
    ]
  },
  {
    id: "granizada_inminente",
    title: "¡TORMENTA INMINENTE: Granizo a 24 Horas de la Parcela!",
    category: "Peligro Climático",
    icon: "🌩️🧊",
    description: "El radar meteorológico anuncia una tormenta de granizo sobre la parcela. La uva aún necesita 3 días de sol para alcanzar la madurez polifenólica perfecta.",
    options: [
      {
        text: "OPCIÓN ARRIESGADA: Aguantar la uva en la parra rezando para que el granizo pase de largo.",
        riskLevel: "Muy Alto (45% Éxito)",
        rollChance: 0.45,
        successOutcome: {
          scoreBonus: +6,
          wealthCost: 0,
          narrative: "¡La tormenta esquivó el viñedo! Los 3 días de sol extra dieron una madurez de taninos de cachemira irrepetible. ¡James Suckling fascinado!"
        },
        failureOutcome: {
          scoreBonus: -5,
          wealthCost: -4000,
          narrative: "El granizo golpeó el 40% de los racimos. Tuviste que hacer una selección de descarte drástica."
        }
      },
      {
        text: "OPCIÓN CONSERVADORA: Cosecha nocturna relámpago con cuadrilla de linternas ya mismo.",
        riskLevel: "Seguro (100%)",
        rollChance: 1.0,
        successOutcome: {
          scoreBonus: +2,
          wealthCost: -1200,
          narrative: "Salvaste el 100% de la uva sana. La cosecha temprana le dio una acidez filosa y eléctrica que Luis Gutiérrez elogió."
        }
      }
    ]
  },
  {
    id: "apagon_frio",
    title: "¡EMERGENCIA: Corte de Luz en la Cordillera y Pérdida de Frío!",
    category: "Problema Técnico",
    icon: "⚡🔌",
    description: "Un viento Zonda derribó cables eléctricos y el sistema de refrigeración de las piletas se apagó en plena maceración prefermentativa.",
    options: [
      {
        text: "OPCIÓN DE VANGUARDIA: Comprar camiones de hielo seco (-$1,800 USD) para mantener el mosto frío a 8°C.",
        riskLevel: "Seguro (100%)",
        requireWealth: 1800,
        rollChance: 1.0,
        successOutcome: {
          scoreBonus: +3,
          wealthCost: -1800,
          narrative: "El golpe de frío con hielo seco extrajo aromas a violetas y moras salvajes de una pureza cristalina."
        }
      },
      {
        text: "OPCIÓN NATURAL: Dejar que fermente a temperatura ambiente estilo rústico de Borgoña.",
        riskLevel: "Medio (60% Éxito)",
        rollChance: 0.60,
        successOutcome: {
          scoreBonus: +2,
          wealthCost: 0,
          narrative: "La maceración cálida entregó un vino potente, con taninos carnosos y gran personalidad."
        },
        failureOutcome: {
          scoreBonus: -3,
          wealthCost: 0,
          narrative: "La temperatura subió demasiado y se perdieron los aromas florales más delicados."
        }
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.VINTAGE_CLIMATES = VINTAGE_CLIMATES;
  window.CELLAR_HAZARDS = CELLAR_HAZARDS;
}
