"use strict";var precacheConfig=[["/steemsites/index.html","1e6ccb09f87cbe726a10ee066c378787"],["/steemsites/static/css/main.88d29628.css","28fdc1a9ee70c16a93ad9efd99b2d6f5"],["/steemsites/static/js/0.fc83db06.chunk.js","1529217ecceb981473523bef8dc9a7ec"],["/steemsites/static/js/1.7ae512e8.chunk.js","c6dad750f1176b8d1b2221b5bcc1a8c8"],["/steemsites/static/js/2.fc183b27.chunk.js","f518255ba6c4de4bc5e41e9a9d97e8db"],["/steemsites/static/js/main.63b9e5ff.js","05a1a2912ca7a30f1e7da8ceda9a29c9"],["/steemsites/static/media/header.3eb35d4b.jpg","3eb35d4b33b18130a32343b0b86f49e9"],["/steemsites/static/media/last.8b9e4329.jpg","8b9e4329e7c4f476d6a62b7a4e40b1c5"],["/steemsites/static/media/middle.0875e29d.jpg","0875e29dc8210e36faca7a6dca726748"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],s=new URL(t,self.location),r=createCacheKey(s,hashParamName,n,/\.\w{8}\./);return[s.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var s=new Request(n,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,s),t=urlsToCacheKeys.has(n));var r="/steemsites/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});