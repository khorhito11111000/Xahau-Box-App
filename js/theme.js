/* Theme before first paint: 'dark' (default), 'light' or 'system'. Stored only in this browser. */
/* Inside the Xaman xApp: mark <html class="xapp"> before the stylesheet paints (transparent background, xApp sizes). Same test as XAPP in app.js. */
(function () {
  try { if (/xumm\/xapp|xAppBuilder/i.test(navigator.userAgent || '') || /[?&]xAppToken=/.test(location.search)) document.documentElement.classList.add('xapp'); } catch (e) {}
})();
(function () {
  var K = 'xbox.theme', m = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function pref() { try { var v = localStorage.getItem(K); return v === 'light' || v === 'system' ? v : 'dark'; } catch (e) { return 'dark'; } }
  function apply(p) {
    var t = p === 'system' ? (m && m.matches ? 'light' : 'dark') : p;
    document.documentElement.setAttribute('data-theme', t);
    var mc = document.querySelector('meta[name="theme-color"]');
    if (mc) mc.setAttribute('content', t === 'light' ? '#f4f6fb' : '#020a1c');
  }
  apply(pref());
  if (m) { var f = function () { if (pref() === 'system') apply('system'); }; m.addEventListener ? m.addEventListener('change', f) : m.addListener && m.addListener(f); }
  window.XBOX_THEME = { get: pref, set: function (p) { try { localStorage.setItem(K, p); } catch (e) {} apply(p); } };
})();
