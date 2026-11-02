/**
 * DEV PREVIEW ONLY: switch between design options A, B, and C.
 * Loaded in <head> so the chosen option applies before first paint.
 * The choice is remembered across pages; ?v=classic|ledger|stage
 * (or ?v=a|b|c) in the URL sets it directly. Delete before merging.
 */

(function() {
  'use strict';

  var VARIANTS = [
    { id: 'classic', alias: 'a', label: 'A · Classic' },
    { id: 'ledger', alias: 'b', label: 'B · Ledger' },
    { id: 'stage', alias: 'c', label: 'C · Stage' }
  ];
  var KEY = 'nm-design-option';

  function find(value) {
    for (var i = 0; i < VARIANTS.length; i++) {
      if (VARIANTS[i].id === value || VARIANTS[i].alias === value) {
        return VARIANTS[i].id;
      }
    }
    return null;
  }

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* ignore */ }
  }

  var chosen = find(new URLSearchParams(window.location.search).get('v'));
  if (chosen) {
    save(chosen);
  } else {
    try { chosen = find(localStorage.getItem(KEY)); } catch (e) { chosen = null; }
  }
  chosen = chosen || 'classic';
  document.documentElement.setAttribute('data-variant', chosen);

  document.addEventListener('DOMContentLoaded', function() {
    var bar = document.createElement('div');
    bar.className = 'preview-bar';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Design option');

    var label = document.createElement('span');
    label.textContent = 'Design option';
    bar.appendChild(label);

    VARIANTS.forEach(function(variant) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = variant.label;
      button.setAttribute('aria-pressed', variant.id === chosen ? 'true' : 'false');
      button.addEventListener('click', function() {
        chosen = variant.id;
        document.documentElement.setAttribute('data-variant', chosen);
        save(chosen);
        bar.querySelectorAll('button').forEach(function(b) {
          b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
        });
        var url = new URL(window.location.href);
        url.searchParams.set('v', chosen);
        window.history.replaceState(null, '', url);
        window.dispatchEvent(new Event('resize'));
      });
      bar.appendChild(button);
    });

    document.body.appendChild(bar);
  });
})();
