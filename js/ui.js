/**
 * CONTROLADOR DE INTERFAZ DE USUARIO (UI) - MODO HISTORIA & CAMPAÑA
 * Manejo de selección de bodegas, llamadas telefónicas de dueños reales,
 * dificultades/emergencias en bodega, etiquetas originales y gala de críticos.
 */

class EnologoUI {
  constructor() {
    this.container = document.getElementById("app-root");
  }

  // Vista de Selección de Bodega & Campaña
  renderStartScreen() {
    this.container.innerHTML = `
      <div style="text-align: center; max-width: 960px; margin: 20px auto 40px auto;">
        <div style="font-size: 52px; margin-bottom: 6px;">🍷🍇👑</div>
        <h1 class="gold-gradient-text" style="font-size: 38px; margin-bottom: 8px;">ENÓLOGO</h1>
        <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">
          Elige una bodega real, atiende la llamada de su dueño y elabora sus 3 grandes vinos icónicos sorteando riesgos reales.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; text-align: left;">
          ${window.BODEGAS_DATA.map(bodega => `
            <div class="step-card" style="border-top: 4px solid ${bodega.colors.secondary}; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <img src="${bodega.owner.photo}" alt="${bodega.owner.name}" class="owner-photo-img">
                  <div>
                    <h3 style="font-size: 17px; margin: 0;">${bodega.name}</h3>
                    <div style="font-size: 11px; color: var(--accent-gold-light); font-weight: 700;">
                      ${bodega.owner.name}
                    </div>
                  </div>
                </div>

                <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4; margin-bottom: 14px;">
                  ${bodega.description}
                </p>

                <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: var(--radius-sm); margin-bottom: 16px;">
                  <div style="font-size: 10px; text-transform: uppercase; color: var(--accent-gold); font-weight: 800; margin-bottom: 4px;">
                    Tus 3 Vinos a Elaborar:
                  </div>
                  ${bodega.campaignWines.map((w, idx) => `
                    <div style="font-size: 12px; color: #e5e7eb; margin-bottom: 2px;">
                      <strong>${idx + 1}.</strong> ${w.name}
                    </div>
                  `).join("")}
                </div>
              </div>

              <button class="btn btn-gold" onclick="window.UI.startBodegaCampaign('${bodega.id}')" style="width: 100%;">
                🍇 Fichar por ${bodega.shortName} ➔
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Iniciar campaña con llamada del dueño
  startBodegaCampaign(bodegaId) {
    window.Sound.playPhoneRing();
    window.Engine.startCareer({ startingBodegaId: bodegaId });
    const targetWine = window.Engine.currentVintage.targetWine;
    this.showOwnerCallModal(targetWine);
  }

  // Modal de Llamada del Dueño Real
  showOwnerCallModal(wine) {
    const bodega = window.Engine.player.currentBodega;
    const owner = bodega.owner;

    const modalContent = `
      <div class="phone-call-window">
        <img src="${owner.photo}" alt="${owner.name}" class="incoming-call-avatar">
        <div style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold); font-weight: 800; letter-spacing: 0.1em;">
          📞 LLAMADA ENTRANTE DE BODEGA
        </div>
        <h2 class="serif-font" style="font-size: 24px; margin: 4px 0;">${owner.name}</h2>
        <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 18px;">${owner.role} - ${bodega.name}</div>

        <div style="background: rgba(0,0,0,0.35); border-left: 3px solid var(--accent-gold); padding: 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0; text-align: left; font-size: 14px; color: #f3f4f6; font-style: italic; line-height: 1.5; margin-bottom: 22px;">
          "${wine.briefing}"
        </div>

        <div style="background: rgba(197, 160, 89, 0.1); border: 1px solid var(--border-gold); padding: 12px; border-radius: var(--radius-md); margin-bottom: 22px; text-align: left;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold-light); font-weight: 800;">Objetivo de la Añada:</div>
          <div style="font-size: 15px; font-weight: 700; color: #fff;">${wine.name}</div>
          <div style="font-size: 12px; color: var(--text-muted);">${wine.line} | Objetivo: ${wine.targetScore} pts</div>
        </div>

        <button class="btn btn-wine btn-lg" onclick="window.UI.acceptCallAndOpenHub()" style="width: 100%;">
          🍷 Entrar a la Sala de Elaboración ➔
        </button>
      </div>
    `;

    this.showCustomModal(modalContent);
  }

  acceptCallAndOpenHub() {
    window.Sound.playCorkPop();
    this.closeModal();
    this.renderCampaignHub();
  }

  // Hub Principal de Elaboración de la Misión
  renderCampaignHub() {
    const player = window.Engine.player;
    const vintage = window.Engine.currentVintage;
    const bodega = player.currentBodega;
    const wine = vintage.targetWine;
    const climate = vintage.climate;
    const label = wine.labelDesign;

    this.container.innerHTML = `
      <!-- NAVBAR -->
      <nav class="navbar">
        <div class="nav-brand">
          <span style="font-size: 26px;">🍷</span>
          <div>
            <h1 class="nav-brand-title gold-gradient-text">ENÓLOGO</h1>
            <div class="nav-brand-subtitle">${bodega.name}</div>
          </div>
        </div>
        <div class="nav-actions">
          <button class="btn btn-outline btn-sm" onclick="window.UI.showGlossaryModal()">
            📖 Diccionario del Vino
          </button>
          <button class="btn btn-outline btn-sm" onclick="window.UI.renderStartScreen()">
            🏛️ Cambiar de Bodega
          </button>
        </div>
      </nav>

      <!-- BARRA DE PROGRESO DE LOS 3 VINOS DE LA BODEGA -->
      <div class="mission-stepper-bar">
        ${bodega.campaignWines.map((w, idx) => `
          <div class="mission-step-pill ${idx === player.currentWineIndex ? 'active' : (idx < player.currentWineIndex ? 'completed' : '')}">
            <span class="step-pill-number">${idx + 1}</span>
            <div>
              <div style="font-size: 13px; font-weight: 700;">${w.name}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${w.line}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- SHOWCASE VISUAL DE LA ETIQUETA ORIGINAL DEL VINO -->
      <div class="original-bottle-showcase">
        <!-- ETIQUETA ORIGINAL RENDERIZADA -->
        <div class="original-label-card" style="background-color: ${label.bgColor}; color: ${label.textColor}; border: 2px solid ${label.accentColor};">
          <div>
            <div style="font-size: 32px; margin-bottom: 6px;">${label.imageBadge}</div>
            <div class="label-seal-badge" style="background: ${label.accentColor}; color: ${label.bgColor};">
              ${label.sealText}
            </div>
            <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700;">
              ${bodega.name}
            </div>
          </div>

          <div>
            <div class="label-title-main" style="color: ${label.textColor};">
              ${wine.name}
            </div>
            <div style="font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${label.accentColor};">
              ${wine.grape}
            </div>
            <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 800; margin-top: 8px;">
              ${player.currentYear}
            </div>
          </div>

          <div style="border-top: 1px solid rgba(0,0,0,0.15); padding-top: 10px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;">
            ${label.vintageText} • ALTO VALLE / UCO
          </div>
        </div>

        <!-- DETALLES Y GUÍA DEL DUEÑO -->
        <div style="max-width: 500px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <img src="${bodega.owner.photo}" alt="${bodega.owner.name}" style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--accent-gold);">
            <div>
              <h3 style="font-size: 18px; margin: 0;">${wine.name}</h3>
              <div style="font-size: 12px; color: var(--accent-gold-light);">Instrucciones de ${bodega.owner.name}</div>
            </div>
          </div>

          <p style="font-size: 13px; color: #d1d5db; line-height: 1.5; margin-bottom: 16px;">
            ${wine.description}
          </p>

          <div style="background: rgba(0,0,0,0.3); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px;">
              <span>Clima de la Añada:</span>
              <strong style="color: var(--accent-gold-light);">${climate.yearName}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <span>Puntaje Objetivo:</span>
              <strong style="color: #4ade80;">${wine.targetScore}+ pts</strong>
            </div>
          </div>

          <div style="font-size: 12px; color: var(--accent-gold-light);">
            💡 <strong>Consejo de elaboración:</strong> Se recomienda fermentación en <em>${wine.idealVessel}</em> y cosecha <em>${wine.idealHarvest}</em>.
          </div>
        </div>
      </div>

      <!-- FORMULARIO DE DECISIONES ENOLÓGICAS -->
      <div id="decisions-container">
        <div class="step-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <h3 style="font-size: 17px; display: flex; align-items: center; gap: 8px;">
              <span>1. Momento de Cosecha & Terruño</span>
            </h3>
            <button class="help-btn" onclick="window.UI.showHelpTerm('cosecha_temprana')">❓ ¿Cuándo cosechar?</button>
          </div>

          <div class="options-grid">
            <div class="option-card ${wine.idealHarvest === 'temprana' ? 'selected' : ''}" data-type="harvestTiming" data-val="temprana" onclick="window.UI.selectDecisionOption(this, 'harvestTiming')">
              <div class="option-name">✂️ Cosecha Temprana</div>
              <div class="option-desc">Acidez eléctrica, frescura y 13° alcohol. Ideal para A Lisa y Polígonos.</div>
            </div>
            <div class="option-card ${wine.idealHarvest === 'optima' ? 'selected' : ''}" data-type="harvestTiming" data-val="optima" onclick="window.UI.selectDecisionOption(this, 'harvestTiming')">
              <div class="option-name">⚖️ Madurez Óptima</div>
              <div class="option-desc">Equilibrio perfecto de taninos y frescura. Para Noemía 1932 y Piedra Infinita.</div>
            </div>
            <div class="option-card" data-type="harvestTiming" data-val="tardia" onclick="window.UI.selectDecisionOption(this, 'harvestTiming')">
              <div class="option-name">🍇 Cosecha Tardía</div>
              <div class="option-desc">Concentración, notas a mermelada y taninos golosos.</div>
            </div>
          </div>
        </div>

        <div class="step-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <h3 style="font-size: 17px; display: flex; align-items: center; gap: 8px;">
              <span>2. Recipiente de Fermentación & Crianza</span>
            </h3>
            <button class="help-btn" onclick="window.UI.showHelpTerm('hormigon')">❓ ¿Por qué cemento?</button>
          </div>

          <div class="options-grid">
            <div class="option-card ${wine.idealVessel === 'cemento' || wine.idealVessel === 'hormigon' ? 'selected' : ''}" data-type="vessel" data-val="cemento" onclick="window.UI.selectDecisionOption(this, 'vessel')">
              <div class="option-name">🧱 Piletas de Hormigón Crudo</div>
              <div class="option-desc">Sin madera invasiva. Pura expresión de mineralidad y tiza.</div>
            </div>
            <div class="option-card ${wine.idealVessel === 'huevo' ? 'selected' : ''}" data-type="vessel" data-val="huevo" onclick="window.UI.selectDecisionOption(this, 'vessel')">
              <div class="option-name">🥚 Huevos de Cemento</div>
              <div class="option-desc">Vórtices de lías continuos. Vinos cremosos, fluidos y sedosos.</div>
            </div>
            <div class="option-card ${wine.idealVessel === 'foudre' ? 'selected' : ''}" data-type="vessel" data-val="foudre" onclick="window.UI.selectDecisionOption(this, 'vessel')">
              <div class="option-name">🪵 Foudres Centenarios (2500L)</div>
              <div class="option-desc">Estilo El Enemigo. Roble viejo que redondea sin aportar vainilla.</div>
            </div>
          </div>

          <div style="margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
              <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                % Racimo Entero:
              </label>
              <select id="whole-cluster-select" onchange="window.UI.updateCluster(this.value)" style="width: 100%; margin-top: 6px; padding: 10px 14px; background: #1a1e27; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #fff;">
                <option value="0">0% (100% Despalillado / Fruta)</option>
                <option value="20" selected>20% Racimo Entero (Herbal & Tensión)</option>
                <option value="30">30% Racimo Entero (Estructura de Montaña)</option>
              </select>
            </div>

            <div>
              <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                Meses de Crianza:
              </label>
              <select id="oak-months-select" onchange="window.UI.updateAging(this.value)" style="width: 100%; margin-top: 6px; padding: 10px 14px; background: #1a1e27; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #fff;">
                <option value="8">8 Meses (Frescura)</option>
                <option value="12" selected>12 Meses (Equilibrio)</option>
                <option value="18">18 Meses (Gran Guarda Centenaria)</option>
              </select>
            </div>
          </div>
        </div>

        <button class="btn btn-wine btn-lg" onclick="window.UI.triggerCellarPhase()" style="width: 100%; font-size: 16px;">
          ⚡ Iniciar Fermentación & Supervisar la Cava ➔
        </button>
      </div>
    `;
  }

  selectDecisionOption(cardEl, category) {
    window.Sound.playClick();
    const parent = cardEl.parentElement;
    parent.querySelectorAll(`.option-card[data-type="${category}"]`).forEach(c => c.classList.remove("selected"));
    cardEl.classList.add("selected");
    window.Engine.currentVintage.decisions[category] = cardEl.getAttribute("data-val");
  }

  updateCluster(val) {
    window.Engine.currentVintage.decisions.wholeCluster = parseInt(val);
  }

  updateAging(val) {
    window.Engine.currentVintage.decisions.oakMonths = parseInt(val);
  }

  // Activa la fase de emergencias y dificultades
  triggerCellarPhase() {
    window.Sound.playHazardAlert();
    const hazard = window.Engine.triggerCellarHazard();
    this.renderHazardModal(hazard);
  }

  // Modal de Emergencia y Dificultad en Bodega (Riesgo vs Seguridad)
  renderHazardModal(hazard) {
    const modalContent = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="font-size: 46px; margin-bottom: 6px;">${hazard.icon}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #ef4444; font-weight: 800; letter-spacing: 0.1em;">
          ⚠️ INCIDENTE CRÍTICO EN LA ELABORACIÓN
        </div>
        <h2 class="serif-font" style="font-size: 23px; margin: 4px 0; color: #f87171;">${hazard.title}</h2>
      </div>

      <p style="font-size: 14px; color: #e5e7eb; line-height: 1.5; margin-bottom: 22px; background: rgba(0,0,0,0.35); padding: 16px; border-radius: var(--radius-md); border-left: 3px solid #ef4444;">
        ${hazard.description}
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${hazard.options.map((opt, idx) => `
          <button class="btn btn-outline" onclick="window.UI.resolveHazardChoice(${idx})" 
            style="text-align: left; justify-content: space-between; padding: 14px 18px; font-size: 13px; line-height: 1.4;">
            <span>${opt.text}</span>
            <span style="font-size: 11px; font-weight: 800; color: var(--accent-gold);">${opt.riskLevel}</span>
          </button>
        `).join("")}
      </div>
    `;

    this.showCustomModal(modalContent);
  }

  resolveHazardChoice(optionIndex) {
    window.Sound.playClick();
    const result = window.Engine.resolveHazardOption(optionIndex);
    if (!result.success) {
      alert(result.reason);
      return;
    }

    this.closeModal();

    // Mostrar desenlace dramático y luego pasar a la gala de cata
    const outcomeModal = `
      <div style="text-align: center; padding: 20px;">
        <div style="font-size: 42px; margin-bottom: 12px;">${result.isSuccess ? '✨🎉' : '⚠️🍷'}</div>
        <h3 class="serif-font" style="font-size: 22px; margin-bottom: 12px; color: ${result.isSuccess ? '#4ade80' : '#f87171'};">
          ${result.isSuccess ? '¡Resultado Exitoso!' : 'Complicación en el Vino'}
        </h3>
        <p style="color: #e5e7eb; font-size: 14px; line-height: 1.5; margin-bottom: 24px;">
          ${result.narrative}
        </p>
        <button class="btn btn-gold btn-lg" onclick="window.UI.finishHarvestAndShowTasting()" style="width: 100%;">
          🍾 Enviar Botellas a la Crítica Internacional ➔
        </button>
      </div>
    `;
    this.showCustomModal(outcomeModal);
  }

  finishHarvestAndShowTasting() {
    this.closeModal();
    window.Sound.playCorkPop();
    const evaluatedWine = window.Engine.simulateWine();
    this.renderTastingGala(evaluatedWine);
  }

  // Gala de Críticos y Revelación
  renderTastingGala(wine) {
    window.Sound.playScoreReveal(wine.averageScore);
    const label = wine.labelDesign;
    const player = window.Engine.player;
    const isLastWine = player.currentWineIndex >= player.currentBodega.campaignWines.length - 1;

    this.container.innerHTML = `
      <!-- BOTELLA CON ETIQUETA ORIGINAL Y RESULTADOS -->
      <div class="original-bottle-showcase">
        <div class="original-label-card" style="background-color: ${label.bgColor}; color: ${label.textColor}; border: 2px solid ${label.accentColor};">
          <div>
            <div style="font-size: 32px; margin-bottom: 6px;">${label.imageBadge}</div>
            <div class="label-seal-badge" style="background: ${label.accentColor}; color: ${label.bgColor};">
              ${label.sealText}
            </div>
            <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700;">
              ${wine.bodegaName}
            </div>
          </div>

          <div>
            <div class="label-title-main" style="color: ${label.textColor};">
              ${wine.name}
            </div>
            <div style="font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${label.accentColor};">
              ${wine.grape}
            </div>
            <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 800; margin-top: 8px;">
              ${wine.year}
            </div>
          </div>

          <div style="border-top: 1px solid rgba(0,0,0,0.15); padding-top: 10px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;">
            ${label.vintageText}
          </div>
        </div>

        <div style="max-width: 500px;">
          <h2 class="serif-font gold-gradient-text" style="font-size: 28px; margin-bottom: 6px;">
            ${wine.name}
          </h2>
          <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
            Misión ${wine.wineMissionStep} de ${wine.totalMissionSteps} en ${wine.bodegaName}
          </div>

          <div style="background: rgba(0,0,0,0.35); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 18px;">
            <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
              <span>Promedio de la Crítica:</span>
              <strong style="color: var(--accent-gold-light); font-size: 18px;">${wine.averageScore} pts</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
              <span>Precio de Mercado:</span>
              <strong style="color: #4ade80;">$${wine.bottlePrice} USD / botella</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <span>Tus Ganancias por la Añada:</span>
              <strong style="color: var(--accent-gold-light);">+$${wine.playerEarnings.toLocaleString()} USD</strong>
            </div>
          </div>

          ${wine.awards.length > 0 ? `
            <div style="background: rgba(197, 160, 89, 0.12); border: 1px solid var(--border-gold); padding: 12px; border-radius: var(--radius-md); margin-bottom: 18px;">
              ${wine.awards.map(a => `<div style="font-size: 13px; font-weight: 700; color: #fff;">${a}</div>`).join("")}
            </div>
          ` : ''}

          <button class="btn btn-gold btn-lg" onclick="window.UI.advanceMission()" style="width: 100%;">
            ${isLastWine ? '🏆 Consagrarte y Ver Fin de Campaña ➔' : 'Siguiente Vino de la Bodega ➔'}
          </button>
        </div>
      </div>

      <!-- CRÍTICAS DETALLADAS -->
      <h3 class="serif-font" style="font-size: 20px; margin-bottom: 14px;">📝 Dictamen de los Jurados Oficiales</h3>
      <div class="critics-gala-grid">
        ${wine.reviews.map(rev => `
          <div class="critic-review-card ${rev.score === 100 ? 'perfect-100' : ''}">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 22px;">${rev.criticAvatar}</span>
                <strong>${rev.criticName}</strong>
              </div>
              <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 800; color: var(--accent-gold-light);">
                ${rev.score} pts
              </div>
            </div>
            <div style="font-size: 13px; color: #d1d5db; font-style: italic; line-height: 1.4;">
              "${rev.note}"
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  advanceMission() {
    window.Sound.playClick();
    const res = window.Engine.advanceNextMission();
    if (res.completedBodega) {
      this.renderBodegaCompletedModal(res.bodega);
    } else {
      this.showOwnerCallModal(res.nextWine);
    }
  }

  // Celebración al completar los 3 vinos de la bodega
  renderBodegaCompletedModal(bodega) {
    window.Sound.play100PointsFanfare();

    this.container.innerHTML = `
      <div class="original-bottle-showcase" style="text-align: center; flex-direction: column; max-width: 800px; margin: 40px auto;">
        <div style="font-size: 54px; margin-bottom: 6px;">👑🏆🍾</div>
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent-gold);">
          CAMPAÑA COMPLETADA CON GLORIA
        </div>
        <h1 class="gold-gradient-text" style="font-size: 34px; margin: 8px 0;">
          ¡Has Conquistado ${bodega.name}!
        </h1>
        <p style="color: #e5e7eb; font-size: 15px; margin-bottom: 24px; max-width: 600px;">
          ${bodega.owner.name} te entrega el título de Maestro Enólogo Honorario. Has dominado sus 3 grandes vinos icónicos con la aclamación de Parker, Tim Atkin y Suckling.
        </p>

        <div style="display: flex; gap: 14px; justify-content: center;">
          <button class="btn btn-gold btn-lg" onclick="window.UI.renderStartScreen()">
            🍇 Elegir Otra Bodega & Nueva Campaña ➔
          </button>
        </div>
      </div>
    `;
  }

  // Diccionario del Vino
  showHelpTerm(termKey) {
    window.Sound.playClick();
    const data = window.GLOSSARY_DATA[termKey];
    if (!data) return;

    const content = `
      <div style="text-align: center; margin-bottom: 16px;">
        <div style="font-size: 36px; margin-bottom: 4px;">${data.icon}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold);">${data.category}</div>
        <h2 class="serif-font" style="font-size: 22px;">${data.term}</h2>
      </div>

      <div style="font-size: 14px; color: #e5e7eb; line-height: 1.5; margin-bottom: 14px;">
        <strong>${data.simple}</strong>
        <p style="margin-top: 6px; color: #d1d5db;">${data.explanation}</p>
      </div>

      <div style="background: rgba(197,160,89,0.1); border-left: 3px solid var(--accent-gold); padding: 12px 14px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; color: var(--accent-gold-light); font-style: italic;">
        💡 <strong>Analogía:</strong> "${data.analogy}"
      </div>
    `;

    this.showCustomModal(content);
  }

  showGlossaryModal() {
    window.Sound.playClick();
    const terms = Object.keys(window.GLOSSARY_DATA).map(k => window.GLOSSARY_DATA[k]);
    
    const content = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="font-size: 36px;">📖🍇</div>
        <h2 class="serif-font gold-gradient-text" style="font-size: 24px;">Diccionario Enológico</h2>
        <p style="font-size: 12px; color: var(--text-muted);">Conceptos clave del vino explicados para principiantes y fanáticos</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${terms.map(t => `
          <div style="background: rgba(0,0,0,0.3); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span>${t.icon}</span>
              <strong style="color: var(--accent-gold-light); font-size: 14px;">${t.term}</strong>
            </div>
            <p style="font-size: 13px; color: #d1d5db; margin-bottom: 4px;">${t.explanation}</p>
            <div style="font-size: 11px; color: #9ca3af; font-style: italic;">💡 ${t.analogy}</div>
          </div>
        `).join("")}
      </div>
    `;

    this.showCustomModal(content);
  }

  showCustomModal(innerHtml) {
    const backdrop = document.getElementById("global-modal-backdrop");
    const container = document.getElementById("modal-dynamic-content");
    if (backdrop && container) {
      container.innerHTML = innerHtml;
      backdrop.classList.add("active");
    }
  }

  closeModal() {
    window.Sound.playClick();
    const backdrop = document.getElementById("global-modal-backdrop");
    if (backdrop) backdrop.classList.remove("active");
  }
}

const UI = new EnologoUI();
if (typeof window !== "undefined") {
  window.UI = UI;
}
