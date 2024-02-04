'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cd4d0876095c0c5f9262a504d40ccfc7",
"assets/AssetManifest.bin.json": "94a935271e271143eb735980e5832511",
"assets/AssetManifest.json": "2f396f7a3ce10cea423be0523548091c",
"assets/assets/1_clo.png": "2ce73851435247927eacfe1f67b269c9",
"assets/assets/2_thy.png": "8921db3d783136281639be87b189ee58",
"assets/assets/3_uri.png": "acc546bc680687040b29337ea48fcc47",
"assets/assets/4_cpm.png": "b40933880d5a4a67f13af6e44b1ef18d",
"assets/assets/5_bmp.png": "bad2f514b835b71145e030fa8a416bfc",
"assets/assets/6_cov.png": "1c5a4fc6db5ec38f43cab25799d595d2",
"assets/assets/7_full.png": "0ffd3dc281eee842266b8bc43ef337e1",
"assets/assets/blood.png": "e01879eff51677b20c32c539ed4f6e73",
"assets/assets/chat.jpeg": "861cab4af05d9c826cac89a81c75f161",
"assets/assets/doctor1.jpg": "2d8b3144df6a7338183032d16d241c97",
"assets/assets/doctor2.jpg": "a0e25b58c4704ae101735597bc36f96d",
"assets/assets/doctor3.png": "3650879c779892502c25465f86891a38",
"assets/assets/doctor4.jpg": "ddbed3a436256663ba58299ac77a9a53",
"assets/assets/doctor5.jpg": "dd00ede4bb5b5ecb6c157a5f4f7823be",
"assets/assets/drugs.jpeg": "4e03919e8de3a67dfaf04ec55bc0e2a6",
"assets/assets/hospital1.jpg": "83fb4ecb369ac6dac02dffd51e310a35",
"assets/assets/hospital2.jpeg": "c5d34302490161dc9d2e856bdc0bef29",
"assets/assets/hospital3.jpg": "62483052d7bb18f282e610663b99feb1",
"assets/assets/loading.gif": "9c30963220d960fe3f79bf42397c0696",
"assets/assets/logo.png": "040037cd511618b3269aaa5d2480ea21",
"assets/assets/medi/buy1.jpg": "48598ab892a4accd419eba9a5f7bad83",
"assets/assets/medi/buy2.jpg": "5da818b2e59fe1b11de11f43d43a9ca9",
"assets/assets/medi/d1.jpg": "ad54ed1ffc95635ef26ce462f7f59e35",
"assets/assets/medi/d2.jpeg": "195b7eeb16861459c56565d89b97de00",
"assets/assets/medi/d3.jpg": "b33bbebecb86a0d90a287ce32d8da6fd",
"assets/assets/medi/d4.jpg": "110e53323a050a9c7a6fb7b1985b1d52",
"assets/assets/medi/d5.jpg": "4c3c1b34397540baefe52bc0aec792ae",
"assets/assets/medi/h1.png": "c643ba8db2f085caf64037356309111e",
"assets/assets/medi/h2.jpeg": "413650de9697ef4c3c65141d8fcf4114",
"assets/assets/medi/h3.png": "9989ebbcb7666ce7e70c2faa0122d3a0",
"assets/assets/medi/med1.jpg": "4a9c7636bb15e09cdb5034afbc93e057",
"assets/assets/medi/med2.jpg": "e6b874f5c0e4ebda431b060cb9af6d87",
"assets/assets/medi/med3.jpg": "fc89abd1b7fea12f3a09016ce4598d08",
"assets/assets/medi/medical1.png": "6dc37efe84c7986e7e2564ffd890d0bb",
"assets/assets/medi/medical2.png": "e7fdb23dbb15d8de844717e8cdddd6af",
"assets/assets/medi/medical3.jpg": "fb1714bbdaa8c0277d798c5f54de150c",
"assets/assets/pharmacy.jpeg": "03da3bdf104f8d9d5b9fb67705c31b51",
"assets/assets/sym.jpeg": "5b5b600a86a414769f0a4c992e0ccbb1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a66129a44748c85a949f2b713ab3f6df",
"assets/NOTICES": "8087bcff2340ff24fd94e6d79ed5bff4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cee5d402f73cabfa3daa77055da583cc",
"/": "cee5d402f73cabfa3daa77055da583cc",
"main.dart.js": "9c3808275a3de35da201f093e6343611",
"manifest.json": "1c2171ac5283a6e3182c88e312294f81",
"version.json": "08e7d180b1144e49e6fccec76aa70200"};
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
