/**
 * PUNTO DE ENTRADA PRINCIPAL (APP INITIALIZER)
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🍷 ENÓLOGO: Simulador de Carrera Vitivinícola inicializado con éxito.");
  
  if (window.UI) {
    window.UI.renderStartScreen();
  }

  // Prevenir cierre accidental de pestaña si hay partida en curso
  window.addEventListener("beforeunload", (e) => {
    if (window.Engine && window.Engine.player.season > 1 && !window.Engine.player.isRetired) {
      e.preventDefault();
      e.returnValue = "¿Seguro que deseas salir? Tu carrera actual no se guardará.";
    }
  });
});
