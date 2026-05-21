/* ═══════════════════════════════════════════════════════════════
   CARLOS BUSTOS — script.js
   Animaciones de entrada · Navbar scroll
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const navbar   = document.getElementById('navbar');
  const navLogo  = document.getElementById('navLogo');
  const heroText = document.getElementById('heroText');

  /* ─── 1. Animación de entrada ───────────────────────────────── */
  function triggerEntrance() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroText && heroText.classList.add('visible');
        navLogo  && navLogo.classList.add('visible');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', triggerEntrance);
  } else {
    triggerEntrance();
  }

  /* ─── 2. Navbar — fondo al hacer scroll ─────────────────────── */
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (navbar) {
          navbar.classList.toggle('scrolled', window.scrollY > 20);
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

})();
