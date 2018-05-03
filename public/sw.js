importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('airhorner').then(function(cache) {
            return cache.addAll([
                '',
                'index.ejs',
                'index.ejs?homescreen=1',
                '?homescreen=1',
                '/manifest.js',
                '/styles/main.css',
                '/styles/material-icons.css',
                '/scripts/script.js',
                '/assets/fonts/material-icon.woff2',
                '/assets/profile/final-chef.png',
                '/recipes.json',
                '/assets/scene/bgg.jpg',
                '/assets/scene/copy3.png',
                '/assets/scene/logo.png',
                '/assets/tutorial/answer-dial.png',
                '/assets/tutorial/ingr-dial.png',
                '/assets/tutorial/title-dial.png',
                '/assets/tutorial/answer-dial_ro.png',
                '/assets/tutorial/ingr-dial_ro.png',
                '/assets/tutorial/title-dial_ro.png',
                '/assets/fonts/font-site.woff2',
                '/assets/fonts/font-site2.woff2'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);

        })

    );
});
