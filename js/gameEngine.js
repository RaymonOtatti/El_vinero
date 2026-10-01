/**
 * MOTOR DE JUEGO Y CAMPAÑA ENOLÓGICA
 * Manejo de progresión por vinos de la bodega, dificultades/emergencias, riesgos y puntuaciones.
 */

class EnologoEngine {
  constructor() {
    this.reset();
  }

  reset() {
    this.player = {
      name: "Enólogo",
      age: 25,
      currentYear: 2024,
      reputation: 25,
      wealth: 12000,
      prestigePoints: 20,
      skills: {
        viticultura: 30,
        vinificacion: 30,
        crianza: 25,
        cata: 35
      },
      currentBodega: window.BODEGAS_DATA[0],
      currentWineIndex: 0, // 0, 1, 2 (los 3 vinos de la bodega)
      completedWines: [],
      winesCreated: [],
      awards: {
        parker100: 0,
        timAtkinWinemakerYear: 0,
        suckling100: 0,
        decanterBestInShow: 0
      },
      isRetired: false
    };

    this.currentVintage = {
      climate: null,
      targetWine: null,
      hazard: null,
      hazardResult: null,
      decisions: {
        parcel: "calcáreo",
        grape: "Malbec",
        harvestTiming: "optima",
        wholeCluster: 20,
        vessel: "cemento",
        yeast: "indigenas",
        oakMonths: 12,
        wineName: ""
      },
      evaluatedWine: null
    };
  }

  startCareer({ name, age = 25, startingBodegaId = "noemia" }) {
    this.reset();
    this.player.name = name.trim() || "Valentín Altamira";
    this.player.age = parseInt(age) || 25;

    const foundBodega = window.BODEGAS_DATA.find(b => b.id === startingBodegaId) || window.BODEGAS_DATA[0];
    this.setBodega(foundBodega);
    this.startCurrentWineMission();
  }

  setBodega(bodega) {
    this.player.currentBodega = bodega;
    this.player.currentWineIndex = 0;
  }

  startCurrentWineMission() {
    const bodega = this.player.currentBodega;
    const wineIdx = this.player.currentWineIndex;
    const targetWine = bodega.campaignWines[wineIdx] || bodega.campaignWines[0];

    // Clima aleatorio
    const climateIdx = Math.floor(Math.random() * window.VINTAGE_CLIMATES.length);
    this.currentVintage.climate = window.VINTAGE_CLIMATES[climateIdx];
    this.currentVintage.targetWine = targetWine;
    this.currentVintage.hazard = null;
    this.currentVintage.hazardResult = null;

    // Decisiones por defecto sugeridas
    this.currentVintage.decisions = {
      parcel: "calcáreo",
      grape: targetWine.grape.split(" ")[0],
      harvestTiming: targetWine.idealHarvest,
      wholeCluster: targetWine.idealCluster,
      vessel: targetWine.idealVessel,
      yeast: "indigenas",
      oakMonths: targetWine.idealAging,
      wineName: targetWine.name
    };

    return targetWine;
  }

  // Generar dificultad / emergencia en bodega
  triggerCellarHazard() {
    const hazardIdx = Math.floor(Math.random() * window.CELLAR_HAZARDS.length);
    this.currentVintage.hazard = window.CELLAR_HAZARDS[hazardIdx];
    return this.currentVintage.hazard;
  }

  // Resolver la opción de riesgo elegida por el jugador
  resolveHazardOption(optionIndex) {
    const hazard = this.currentVintage.hazard;
    if (!hazard || !hazard.options[optionIndex]) return null;

    const opt = hazard.options[optionIndex];

    if (opt.requireWealth && this.player.wealth < opt.requireWealth) {
      return { success: false, reason: "No tienes suficientes fondos personales ($" + opt.requireWealth + " USD requeridos)." };
    }

    const roll = Math.random();
    const isSuccess = roll <= opt.rollChance;
    const outcome = isSuccess ? opt.successOutcome : (opt.failureOutcome || opt.successOutcome);

    if (outcome.wealthCost) {
      this.player.wealth += outcome.wealthCost;
    }

    this.currentVintage.hazardResult = {
      isSuccess,
      scoreBonus: outcome.scoreBonus || 0,
      narrative: outcome.narrative
    };

    return { success: true, isSuccess, narrative: outcome.narrative };
  }

  // Simulación y evaluación del vino
  simulateWine() {
    const dec = this.currentVintage.decisions;
    const clim = this.currentVintage.climate;
    const target = this.currentVintage.targetWine;
    const bodega = this.player.currentBodega;
    const hazardRes = this.currentVintage.hazardResult;

    let baseScore = target.targetScore;

    // Bonificaciones según concordancia con el perfil ideal del vino
    if (dec.harvestTiming === target.idealHarvest) baseScore += 2;
    if (dec.vessel === target.idealVessel) baseScore += 2;
    if (Math.abs(dec.wholeCluster - target.idealCluster) <= 10) baseScore += 1;
    if (Math.abs(dec.oakMonths - target.idealAging) <= 4) baseScore += 1;

    // Clima
    baseScore += Math.round(clim.bonusTerroir / 8);

    // Consecuencia del riesgo / emergencia
    if (hazardRes) {
      baseScore += hazardRes.scoreBonus;
    }

    // Variación realista (+/- 1)
    baseScore += (Math.random() * 2 - 1);
    baseScore = Math.min(100, Math.max(85, Math.round(baseScore)));

    const wineObj = {
      id: "wine_" + Date.now(),
      year: this.player.currentYear,
      wineMissionStep: this.player.currentWineIndex + 1,
      totalMissionSteps: bodega.campaignWines.length,
      targetWineId: target.id,
      name: dec.wineName || target.name,
      grape: target.grape,
      line: target.line,
      bodegaId: bodega.id,
      bodegaName: bodega.name,
      bodegaBadge: bodega.badge,
      origin: bodega.location,
      region: bodega.region,
      vessel: dec.vessel,
      harvestTiming: dec.harvestTiming,
      labelDesign: target.labelDesign,
      scores: {},
      reviews: [],
      averageScore: baseScore,
      awards: [],
      bottlePrice: Math.round(Math.pow(1.15, Math.max(0, baseScore - 85)) * 22),
      playerEarnings: Math.round(18000 + (baseScore * 250))
    };

    // Evaluaciones individuales de críticos
    window.CRITICS_DATA.forEach(critic => {
      let criticScore = baseScore + (Math.floor(Math.random() * 3) - 1);
      if (critic.id === "parker" && dec.vessel === "cemento" && dec.parcel === "calcáreo") criticScore += 1;
      criticScore = Math.min(100, Math.max(86, criticScore));

      const note = critic.generateTastingNote(criticScore, wineObj);
      wineObj.scores[critic.id] = criticScore;
      wineObj.reviews.push({
        criticId: critic.id,
        criticName: critic.shortName,
        criticAvatar: critic.avatar,
        score: criticScore,
        note: note
      });
    });

    if (wineObj.scores.parker === 100) {
      wineObj.awards.push("💯 100 PUNTOS PARKER (The Wine Advocate)");
      this.player.awards.parker100++;
      this.player.prestigePoints += 50;
    }

    if (wineObj.scores.suckling === 100) {
      wineObj.awards.push("🌟 100 PUNTOS JAMES SUCKLING");
      this.player.awards.suckling100++;
    }

    if (wineObj.scores.tim_atkin >= 97) {
      wineObj.awards.push("👑 TIM ATKIN: MEDALLA DE ORO / BEST OF ARGENTINA");
      this.player.awards.timAtkinWinemakerYear++;
    }

    // Actualizar jugador
    this.player.wealth += wineObj.playerEarnings;
    this.player.reputation = Math.min(100, this.player.reputation + Math.round((baseScore - 90) * 1.5));
    this.player.winesCreated.unshift(wineObj);
    this.currentVintage.evaluatedWine = wineObj;

    return wineObj;
  }

  // Avanzar al siguiente vino de la bodega o terminar la campaña
  advanceNextMission() {
    this.player.currentWineIndex++;
    this.player.currentYear++;
    this.player.age++;

    const bodega = this.player.currentBodega;
    if (this.player.currentWineIndex >= bodega.campaignWines.length) {
      // ¡Campaña de la bodega completada con éxito!
      return { completedBodega: true, bodega };
    } else {
      this.startCurrentWineMission();
      return { completedBodega: false, nextWine: bodega.campaignWines[this.player.currentWineIndex] };
    }
  }
}

const Engine = new EnologoEngine();
if (typeof window !== "undefined") {
  window.Engine = Engine;
}
