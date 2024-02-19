'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"dfhbv.zip": "2d28ca0ca2cf4c2d83c0b7c622066a02",
"version.json": "cef3fdabd3ff8df73b9fb766ef064d6f",
"index.html": "53735fd545c74565fb564688544a108b",
"/": "53735fd545c74565fb564688544a108b",
"main.dart.js": "a915df7a3944d5f0cf1dba1cfbc32dcf",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "29268de8dbff72904eecd54d3c6a7384",
"assets/AssetManifest.json": "3e0bc1687bf0b8e38741490e1701c317",
"assets/NOTICES": "83c0220fec4d5c9e0b8adb67744fda94",
"assets/FontManifest.json": "5c16b81f4c357473315574af350c26af",
"assets/AssetManifest.bin.json": "e64f1d2b6fca5f65c542fdb6064e3a88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "6e9237766eb5a596700f322c9f85ef69",
"assets/fonts/MaterialIcons-Regular.otf": "21c6d8e1007d39a2509510f356759058",
"assets/Assets/Images/m3.png": "b208af8425a9316725fb87b8e6cd84f8",
"assets/Assets/Images/download.jpeg": "749d4f2a2e93c418f6e13ea2fbd4ee0f",
"assets/Assets/Images/king.png": "83180920653544b69058aa2aeb9c439d",
"assets/Assets/Images/queen.png": "2cf5b0d8db6378704e66e2dc2e5b9484",
"assets/Assets/Images/m2.png": "60402284acab2235528995d27076c235",
"assets/Assets/Images/recharge.png": "81d4254ba8a000a8dc2c02bf131ea5d9",
"assets/Assets/Images/h.png": "5caed3f418b45d03c256fc1a130a38b4",
"assets/Assets/Images/wallet.png": "04bdcfe6b3d93c60771d4d49ac6b7376",
"assets/Assets/Images/background.avif": "68c353890d2b1de1139a1fdeea05e42e",
"assets/Assets/Images/m1.png": "cd74be250256187e939829bb6ccc8636",
"assets/Assets/Images/rules.png": "3a3ad51af2bc1c3b6bffd71373ff98e4",
"assets/Assets/Images/slot_large.png": "a5eeec2a7a6ee09c78dbb0ec1bb84168",
"assets/Assets/Images/m.png": "2548bc49ab9e1e8ca4852c0b281889fc",
"assets/Assets/Images/slot_small.png": "1f622149ac98e4163a9d705e0c84f8ee",
"assets/Assets/Images/m4.png": "f370061510bcdaf2db5c9be278743455",
"assets/Assets/Images/settings.png": "a07cffcac7ee240aabe76fdc10fb3d48",
"assets/Assets/Images/mine.png": "ac9c2e4eb41aeb2d83bf9c453da1d9dc",
"assets/Assets/Images/chip.png": "2542e3cc728112eec18be52de0f74e36",
"assets/Assets/Images/noti.gif": "690cecb1e787fcdd86225605e3c100db",
"assets/Assets/Images/roulette_large.png": "55c8b61b66eee05da96bee91b9f02b67",
"assets/Assets/Images/money1.png": "48e09ae3ab3893944a6f66b77cf8a18f",
"assets/Assets/Images/home.png": "1a0b768c63f6aac143ca1cb12dd98818",
"assets/Assets/Images/shop.png": "94ac9fcbe45af31e6c717a6c9d80e583",
"assets/Assets/Images/with.png": "4994cf17bef21a1b7ae689d5cf7b4359",
"assets/Assets/Images/hm.png": "c9d3c111130e7416bcc9435979642853",
"assets/Assets/Images/roulette_small.png": "c6bd2a30e1a073db03708e8baf26e86f",
"assets/Assets/Images/rightarrow.png": "faacdcd863f56844a356d8def07247c9",
"assets/Assets/Images/promote.png": "07b2849472eb5944d7a0a5e43a330420",
"assets/Assets/Images/brl.png": "5ae8e169d0cdfe739072b2f5b578e780",
"assets/Assets/Images/withdraw.png": "84ffae8304ed1c69d07560eb4bc95626",
"assets/Assets/Images/background.jpg": "59b2d472cf45e3be9e48c45bab84376b",
"assets/Assets/Images/triangle.png": "5a08c9070d3e080a003b4f6b002f5cac",
"assets/Assets/Images/slotgameback2.jpeg": "a5914d62bdea36488b74d62461be039f",
"assets/Assets/Images/dice_small.png": "f0bb8e07f0a00ce36d0c0c7a24b58a06",
"assets/Assets/Images/pf.png": "fdf341a52401a66069ebd3e652b05d45",
"assets/Assets/Images/rechargerecord_black.png": "fd28d03fdebf2606c86a6cadb9e9dc9a",
"assets/Assets/Images/home.jpeg": "44871a93c79296f58b30e73bbdc7cff7",
"assets/Assets/Images/p1.png": "06fdc6c3ee6717764858ce75b41b7408",
"assets/Assets/Images/withdraw1.png": "52f4cd49090f132d0fe458710610344b",
"assets/Assets/Images/money.png": "56817601c1b2531b4bd80105c413e5f0",
"assets/Assets/Images/h2.png": "c2e04f5c89cdf3062ad42bbc45c96ec7",
"assets/Assets/Images/profile.png": "fd911693b7cd4f5831aaea719c71ec06",
"assets/Assets/Images/dice_large.png": "b039ef0e10c16c854affc37819547fee",
"assets/Assets/Images/freemarket-best-places-to-buy-and-sell-websites.jpg": "d69e7d635a3ac92504d35c73b63d1099",
"assets/Assets/Images/back.jpeg": "0b2b00fcbc67a20af248a42725b868c7",
"assets/Assets/Images/mo.png": "0df171ac18207d60ee18e07bcad09fcb",
"assets/Assets/Images/matka_large.png": "6e1baff61274967139429c016eedb440",
"assets/Assets/Images/grey-person-icon-profile-vector-260nw-2178946223.webp": "a5619cae1f38bfa9777432ff670bbd40",
"assets/Assets/Images/jocker.png": "f3f72634d7af0f71bdf0180fa2dd0fea",
"assets/Assets/Images/matka_small.png": "52b43c732f3f4d45737243f92eedb574",
"assets/Assets/Images/not.png": "1ac5e48934b422d58cfae25f42393b1e",
"assets/Assets/Images/ref.png": "8afbadbe55cc46ce4532b21ccfed0cc8",
"assets/Assets/Images/depo.png": "d2bbb1ecfd73e949360e3adcc05cca7f",
"assets/Assets/Images/back.jpg": "0b2b00fcbc67a20af248a42725b868c7",
"assets/Assets/Images/p.jpg": "e7e7cc36be45be5af68225712b543829",
"assets/Assets/Images/profile1.png": "7de6cef021fb754416432400aa67348f",
"assets/Assets/Images/p.png": "3636281f09bbbc2f1fdfac16052539ab",
"assets/Assets/Images/pro.png": "69980853b86faf8e8d900bce05d59cc4",
"assets/Assets/Images/slotgameback.jpeg": "6aa9ae6e8772555e6b32c2568b189d92",
"assets/Assets/fonts/DMSerifDisplay-Italic.ttf": "9e5d309e3e0a5f1434c8e20c07df8d12",
"assets/Assets/fonts/DMSerifDisplay-Regular.ttf": "25b39681f8cf94ad3cbfc6d25d9c0c4e",
"assets/Assets/fonts/RubikDoodleShadow-Regular.ttf": "ada3eb3b10a011e7175954ec8ccec0f8",
"assets/Assets/sound/dicesound.mp3": "077f4c7bb9869245824d33168f4343aa",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
