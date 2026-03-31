const CACHE_NAME = 'notes-cache-v6';
const DYNAMIC_CACHE_NAME = 'dynamic-content-v5';
const ASSETS = [
    '/',
    '/index.html',
    '/app.js',
    '/manifest.json',
    '/icons/favicon-16x16.png',
    '/icons/favicon-32x32.png',
    '/icons/favicon-48x48.png',
    '/icons/favicon-64x64.png',
    '/icons/favicon-128x128.png',
    '/icons/favicon-256x256.png',
    '/icons/favicon-512x512.png',
    'https://unpkg.com/chota@latest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Для статики – Cache First, для контента – Network First
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Динамические страницы (content/*) – сначала сеть, затем кэш
    if (url.pathname.startsWith('/content/')) {
        event.respondWith(
            fetch(event.request)
                .then(networkRes => {
                    // Кэшируем свежий ответ
                    const resClone = networkRes.clone();
                    caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                        cache.put(event.request, resClone);
                    });
                    return networkRes;
                })
                .catch(() => {
                    // Если сеть недоступна, берём из кэша (или home как fallback)
                    return caches.match(event.request)
                        .then(cached => cached || caches.match('/content/home.html'));
                })
        );
    } else {
        // Для статических ресурсов (App Shell) – стратегия Cache First
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    // Если ресурс есть в кэше, возвращаем его. Иначе идём в сеть.
                    return cachedResponse || fetch(event.request).catch(() => {
                        // Если в сети тоже ничего нет (офлайн), мы возвращаем заглушку, 
                        // чтобы не падала ошибка "TypeError: Failed to convert value to 'Response'".
                        return new Response('', { status: 404, statusText: 'Offline' });
                    });
                })
        );
    }
});