const RECIPIES_CACHE = 'recipies-cache';

const cacheNameByUrl = url => {
    const pathname = url.pathname;
    let cacheName = '';

    if (pathname.startsWith('/recipes/')) {
        const id = url.pathname.split('/').pop();

        cacheName = `recipe-${id}-cache`;
    } else if (pathname.startsWith('/recipes?')) {
        cacheName = RECIPIES_CACHE;
    }
    return cacheName;
};

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('fetch', event => {
    const cacheName = cacheNameByUrl(new URL(event.request.url));

    if (cacheName !== '') {
        event.respondWith(
            caches.open(cacheName).then(async (cache) => {
                const cachedResponse = await cache.match(event.request);

                if (cachedResponse) {
                    return cachedResponse;
                } else {
                    return fetch(event.request)
                        .then((networkResponse) => {
                            cache.put(event.request, networkResponse.clone());

                            return networkResponse;
                        }).catch(error => {
                            throw error;
                        });
                }
            })
        );
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames
                .filter(cacheName => cacheName.startsWith('/recipe-') || cacheName === RECIPIES_CACHE)
                .map(cacheName => caches.delete(cacheName))
        );
    }));
});
