/**
 * MOTOR DE AUDIO SINTETIZADO (Web Audio API)
 * Efectos de sonido para llamadas del dueño, alertas de bodega, riesgos, descorche y fanfarrias.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn("Web Audio API no soportado:", e);
    }
  }

  ensureAudio() {
    if (!this.ctx) this.initAudioContext();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleAudio() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Tono de llamada telefónica / mensaje del dueño
  playPhoneRing() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    
    [0, 0.25].forEach(delay => {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.type = "sine";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(440, t + delay);
      osc2.frequency.setValueAtTime(480, t + delay);
      
      gain.gain.setValueAtTime(0.15, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.18);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.start(t + delay);
      osc2.start(t + delay);
      osc1.stop(t + delay + 0.18);
      osc2.stop(t + delay + 0.18);
    });
  }

  // Sirena de alerta / peligro en bodega
  playHazardAlert() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.linearRampToValueAtTime(640, t + 0.15);
    osc.frequency.linearRampToValueAtTime(320, t + 0.3);
    
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.35);
  }

  // Descorche ("¡PLOP!")
  playCorkPop() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(420, t + 0.04);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.12);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.14);
  }

  // Brindis
  playGlassClink() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    const freqs = [2400, 3100, 4200];
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t);

      const amp = 0.15 / (idx + 1);
      gain.gain.setValueAtTime(amp, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.9);
    });
  }

  // Revelación de puntaje
  playScoreReveal(score) {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    const baseFreq = score >= 96 ? 587.33 : (score >= 90 ? 440 : 329.63);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = score >= 96 ? "triangle" : "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, t + 0.25);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  // Fanfarria 100 Puntos
  play100PointsFanfare() {
    if (!this.enabled || !this.ctx) return;
    this.ensureAudio();
    const t = this.ctx.currentTime;
    const notes = [
      { f: 523.25, time: 0.0, dur: 0.15 },
      { f: 659.25, time: 0.15, dur: 0.15 },
      { f: 783.99, time: 0.30, dur: 0.18 },
      { f: 1046.50, time: 0.48, dur: 0.55 }
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.f, t + n.time);

      gain.gain.setValueAtTime(0.25, t + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, t + n.time + n.dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + n.time);
      osc.stop(t + n.time + n.dur);
    });

    setTimeout(() => this.playGlassClink(), 600);
  }
}

const Sound = new SoundEngine();
if (typeof window !== "undefined") {
  window.Sound = Sound;
}
