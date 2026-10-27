/* Minimal offline shell for "install as app". Same-origin static files only.
 * - Cache name = page version (?v=), so a new version gets a new cache and old ones are deleted.
 * - Ledger, Xaman and any other cross-origin request is never touched (network only, never cached).
 * - URL fragments (#tgs1:... box keys) are never sent to a service worker and nothing here stores them. */
'use strict';
const V = new URL(self.location).searchParams.get('v') || '0';
const CACHE = 'xbox-' + V;
const Q = '?v=' + V;
const ASSETS = ['./', 'css/app.css' + Q, 'js/config.js' + Q, 'vendor/boxlib.js' + Q, 'vendor/xumm-oauth2-pkce-2.8.7.min.js' + Q,
  'js/icons.js' + Q, 'js/i18n.js' + Q, 'js/app.js' + Q, 'manifest.webmanifest', 'img/icon-192.png', 'img/icon-512.png',
  'img/hero.jpg', 'img/net.svg', 'img/evergram-logo.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('xbox-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== self.location.origin) return; // ledger / Xaman / APIs: browser handles it, no cache
  if (r.mode === 'navigate') {
    // always try the network first so a new version shows up at once; the cached page is only an offline fallback
    e.respondWith(fetch(r, { cache: 'no-store' }).catch(() => caches.open(CACHE).then(c => c.match('./'))).then(x => x || Response.error()));
    return;
  }
  e.respondWith(caches.open(CACHE).then(c => c.match(r).then(hit => hit || fetch(r))));
});
