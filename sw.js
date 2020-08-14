const NAME = 'nodejs-guide-v1'

const FILES = [
    './index.html',
    './style.css',
    './script.js',
    './server.js',
    './icons/64.png',
    './icons/128.png',
    './icons/256.png',
    './icons/512.png',
    './img/9-1.png',
    './img/9-2.png',
    './img/16-1.png',
    './img/16-2.png',
    './img/16-3.png',
    './img/21.png',
    './img/27-1.png',
    './img/27-2.png',
    './img/27-3.png',
    './img/27-4.png',
    './img/27-5.png',
    './img/30-1.png',
    './img/30-2.png',
    './img/30-3.png',
    './img/30-4.png',
    './img/54-1.png',
    './img/54-2.png',
    './chapters/1.js',
    './chapters/2.js',
    './chapters/3.js',
    './chapters/4.js',
    './chapters/5.js',
    './chapters/6.js',
    './chapters/7.js',
    './chapters/8.js',
    './chapters/9.js',
    './chapters/10.js',
    './chapters/11.js',
    './chapters/12.js',
    './chapters/13.js',
    './chapters/14.js',
    './chapters/15.js',
    './chapters/16.js',
    './chapters/17.js',
    './chapters/18.js',
    './chapters/19.js',
    './chapters/20.js',
    './chapters/21.js',
    './chapters/22.js',
    './chapters/23.js',
    './chapters/24.js',
    './chapters/25.js',
    './chapters/26.js',
    './chapters/27.js',
    './chapters/28.js',
    './chapters/29.js',
    './chapters/30.js',
    './chapters/31.js',
    './chapters/32.js',
    './chapters/33.js',
    './chapters/34.js',
    './chapters/35.js',
    './chapters/36.js',
    './chapters/37.js',
    './chapters/38.js',
    './chapters/39.js',
    './chapters/40.js',
    './chapters/41.js',
    './chapters/42.js',
    './chapters/43.js',
    './chapters/44.js',
    './chapters/45.js',
    './chapters/46.js',
    './chapters/47.js',
    './chapters/48.js',
    './chapters/49.js',
    './chapters/50.js',
    './chapters/51.js',
    './chapters/52.js',
    './chapters/53.js',
    './chapters/54.js'
]

self.addEventListener("install", ev => {
    ev.waitUntil(
        caches.open(NAME)
            .then(cache => cache.addAll(FILES))
    )
    self.skipWaiting()
})

self.addEventListener("activate", ev => {
    ev.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== NAME) {
                        return caches.delete(key)
                    }
                })
            )
        })
    )
    self.clients.claim()
})

self.addEventListener('fetch', ev => {
    ev.respondWith(
        fetch(ev.request)
            .then(res => {
                let cacheClone = res.clone()
                caches.open(NAME).then(cache => {
                    cache.put(ev.request, cacheClone)
                        .catch(er => er)
                })
                return res
            })
            .catch(() => caches.match('./404.html'))
    )
})