/*
 * PLAY Barbados — Custom JS Enhancements
 * Ecwid / Lightspeed E-Series
 *
 * HOW TO APPLY:
 * 1. Log in to your Lightspeed / Ecwid admin
 * 2. Go to Website → Design → Edit Theme
 * 3. Find "Custom JavaScript" or "Header HTML" section
 * 4. Paste this entire file and save
 * ─────────────────────────────────────────
 */

(function() {
  'use strict';

  /* ── 1. GOOGLE FONTS ────────────────────────── */
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@300;400;500;600&display=swap';
  document.head.appendChild(fontLink);

  /* ── 2. ANIMATED TICKER BAR ─────────────────── */
  function insertTicker() {
    // Don't insert twice
    if (document.getElementById('play-ticker')) return;

    var items = [
      '🎮 New PS5 Titles In Stock',
      '🟢 Xbox Game Pass Gift Cards Available',
      '🔴 Nintendo eShop Cards — All Denominations',
      '📍 Two Locations: Colonnade Mall & Sheraton Centre',
      '📞 Call Us: 431-0750',
      '🎁 Gift Cards for Every Platform — Instant Delivery',
      '🕹️ Pre-Orders Now Open — Ask In Store',
      '💳 Visa · Mastercard · AmEx · Cash Accepted',
    ];

    // Build ticker HTML
    var itemsHTML = items.concat(items) // duplicate for seamless loop
      .map(function(t) { return '<span class="play-ticker__item">' + t + '</span>'; })
      .join('');

    var ticker = document.createElement('div');
    ticker.id = 'play-ticker';
    ticker.innerHTML = '<div class="play-ticker__inner">' + itemsHTML + '</div>';

    // Inject into page — try to insert after nav/header
    var header = document.querySelector('.site-header') || document.querySelector('header') || document.body.firstChild;
    if (header && header.parentNode) {
      header.parentNode.insertBefore(ticker, header.nextSibling);
    } else {
      document.body.insertBefore(ticker, document.body.firstChild);
    }

    // Inject ticker CSS
    var style = document.createElement('style');
    style.textContent = [
      '#play-ticker {',
      '  background: #7c3aed;',
      '  overflow: hidden;',
      '  padding: 10px 0;',
      '  border-top: 1px solid rgba(255,255,255,0.1);',
      '  border-bottom: 1px solid rgba(0,0,0,0.2);',
      '  position: relative;',
      '  z-index: 999;',
      '}',
      '.play-ticker__inner {',
      '  display: inline-flex;',
      '  gap: 56px;',
      '  white-space: nowrap;',
      '  animation: play-scroll 30s linear infinite;',
      '}',
      '.play-ticker__item {',
      '  font-size: 12px;',
      '  font-weight: 600;',
      '  letter-spacing: 1.5px;',
      '  text-transform: uppercase;',
      '  color: rgba(255,255,255,0.92);',
      '}',
      '@keyframes play-scroll {',
      '  from { transform: translateX(0); }',
      '  to   { transform: translateX(-50%); }',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── 3. FORCE INTER FONT ON PRODUCT ELEMENTS ── */
  function applyFonts() {
    var fontStyle = document.createElement('style');
    fontStyle.textContent = [
      'body, .ec-store, .ecwid, [class*="ecwid-"], [class*="ec-"] {',
      '  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif !important;',
      '}',
      'h1, h2, h3, h4, .ec-header-h1, .ec-header-h2, .product-details__name, [class*="section-title"] {',
      '  font-family: "Rajdhani", sans-serif !important;',
      '  font-weight: 700 !important;',
      '}',
    ].join('\n');
    document.head.appendChild(fontStyle);
  }

  /* ── 4. WHATSAPP CHAT BUTTON ─────────────────── */
  function insertWhatsAppButton() {
    if (document.getElementById('play-whatsapp-btn')) return;

    var btn = document.createElement('a');
    btn.id = 'play-whatsapp-btn';
    btn.href = 'https://wa.me/12461234567?text=Hi%20PLAY%20Barbados%2C%20I%20have%20a%20question%20about%20'; // update number
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.title = 'Chat with us on WhatsApp';
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

    var waBtnStyle = document.createElement('style');
    waBtnStyle.textContent = [
      '#play-whatsapp-btn {',
      '  position: fixed;',
      '  bottom: 24px;',
      '  right: 24px;',
      '  z-index: 9999;',
      '  width: 52px;',
      '  height: 52px;',
      '  background: #25d366;',
      '  border-radius: 50%;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);',
      '  transition: transform 0.2s, box-shadow 0.2s;',
      '  text-decoration: none;',
      '}',
      '#play-whatsapp-btn:hover {',
      '  transform: scale(1.1);',
      '  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);',
      '}',
    ].join('\n');
    document.head.appendChild(waBtnStyle);
    document.body.appendChild(btn);
  }

  /* ── 5. FORCE DARK BACKGROUNDS ──────────────── */
  // Targets the actual Ecwid ec-* class structure confirmed from live DOM inspection
  function forceDarkContainers() {
    if (document.getElementById('play-dark-force')) return;
    var style = document.createElement('style');
    style.id = 'play-dark-force';
    style.textContent = [
      // Root containers (confirmed from live DOM)
      '#ecwid-products, .ecwid, .ec-storefront-v3,',
      '.ecwid-productBrowser, .ecwid-productBrowser-v3,',
      '.ec-wrapper, .ec-store, .ec-store__content-wrapper',
      '{ background-color: #080b14 !important; color: #e8eaf0 !important; }',

      // Product detail containers
      '.product-details, .product-details__top, .product-details__sidebar,',
      '.product-details__gallery, .product-details__description,',
      '.product-details-module, .product-details-module__content',
      '{ background-color: #080b14 !important; }',

      // Text colour fixes
      '.ec-header-h1,.ec-header-h2,.ec-header-h3,.ec-header-h4,.ec-header-h5,.ec-header-h6',
      '{ color: #e8eaf0 !important; }',
      '.ec-text-muted, .breadcrumbs__link, .ec-link--muted',
      '{ color: #6b7394 !important; }',

      // Price cyan
      '.ec-price-item, .details-product-price__value',
      '{ color: #00d4ff !important; font-weight: 700 !important; }',

      // Footer
      '.ec-footer, .ec-footer__row { background: #0f1320 !important; border-top: 1px solid #1e2740 !important; }',
      '.ec-footer__link { color: #6b7394 !important; }',
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── INIT ────────────────────────────────────── */
  function init() {
    applyFonts();
    forceDarkContainers();
    insertTicker();
    insertWhatsAppButton();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also re-run after Ecwid loads (it renders async)
  if (window.Ecwid) {
    Ecwid.OnAPILoaded.add(function() { setTimeout(init, 500); });
    Ecwid.OnPageLoaded.add(function() { setTimeout(forceDarkContainers, 100); });
  } else {
    window.ecwid_onBodyDone = window.ecwid_onBodyDone || function() {};
    var origDone = window.ecwid_onBodyDone;
    window.ecwid_onBodyDone = function() { origDone(); setTimeout(init, 500); };
  }

  // ===== DROPDOWN HOVER FIX =====
(function() {
  function fixDropdowns() {
    var menuItems = document.querySelectorAll(
      '.ins-header__menu-item, .ins-header__menu-link-wrap, .ins-header nav li'
    );
    
    menuItems.forEach(function(item) {
      var dropdown = item.querySelector(
        '.ins-header__dropdown, .ins-header__menu-dropdown, .ins-header__submenu, ul'
      );
      if (!dropdown) return;
      
      var timeout;
      
      item.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        dropdown.style.display = 'block';
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        dropdown.style.pointerEvents = 'auto';
      });
      
      item.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
          dropdown.style.display = '';
          dropdown.style.opacity = '';
          dropdown.style.visibility = '';
          dropdown.style.pointerEvents = '';
        }, 200); // 200ms grace period
      });
    });
  }
  
  // Run after page loads and again after Lightspeed renders
  if (document.readyState === 'complete') {
    fixDropdowns();
  } else {
    window.addEventListener('load', fixDropdowns);
  }
  setTimeout(fixDropdowns, 2000);
  setTimeout(fixDropdowns, 4000);
})();

})();
