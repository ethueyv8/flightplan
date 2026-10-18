// Change CACHE when publishing a new version so devices pick it up.
const CACHE = 'fpt-2026.2.0';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png',
  'help/app-open.png', 'help/app-applied.png', 'help/app-names.png', 'help/app-legs.png', 'help/app-save.png', 'help/app-config.png',
  'help/ff-route.jpg', 'help/ff-sendto.jpg', 'help/ff-share.jpg', 'help/files-save.jpg'];
// Each file is saved on its own, so one missing file cannot stop the offline copy.
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f =>
    fetch(f, { cache: 'reload' }).then(r => { if (r.ok) return c.put(f, r); }).catch(() => { })))));
});
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k =>
  Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r ||
    fetch(e.request).catch(() => e.request.mode === 'navigate' ? caches.match('index.html') : Response.error())));
});
