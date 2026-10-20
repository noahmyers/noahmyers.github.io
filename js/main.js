/**
 * Noah Myers - Personal Website
 * Minimal JavaScript for navigation
 */

(function() {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function setMenu(open) {
      navToggle.classList.toggle('active', open);
      navMenu.classList.toggle('active', open);
      backdrop.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    navToggle.addEventListener('click', function() {
      setMenu(!navMenu.classList.contains('active'));
    });

    // Close menu when clicking a link or the backdrop
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMenu(false);
      });
    });
    backdrop.addEventListener('click', function() {
      setMenu(false);
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });
  }

  // Homepage header: transparent over the hero, solid once scrolled past it
  const header = document.querySelector('.header-overlay');
  const hero = document.querySelector('.hero');

  if (header && hero) {
    function updateHeader() {
      const threshold = hero.offsetHeight - header.offsetHeight;
      header.classList.toggle('scrolled', window.scrollY > threshold);
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);
  }

})();
