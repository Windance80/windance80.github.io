'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"1788-09-cleanroom_ultrasonic_humidifier_manual.pdf": "1fa70786ae1986c6a92cc156a7e9c18e",
"assets/AssetManifest.bin": "a518950e3f41734aed269593ac85ca98",
"assets/AssetManifest.json": "3aea08f84fa0c9f529281821776d19d2",
"assets/assets/images/11-scaled-e1671069235416-1200x900.jpeg": "acee82d89c2c96d7d02d7420a6e44285",
"assets/assets/images/Beta-1-scaled.jpg": "610df6b772ce40c908aee3e5fefb4ead",
"assets/assets/images/boge-compressor-110kw.png": "bc27d87f7c232af377c2e9b801a1965a",
"assets/assets/images/boge-logo-01-1200x220.png": "ae8709cf847c538455051fd6b9e27ccf",
"assets/assets/images/boge-s-4-compressor-110kw.png": "c33ad6caae687fd0b8de996b57fd4bf7",
"assets/assets/images/cc-about-team-1.jpg": "183cb3bc8504c94caae8b93ed6c9f6c9",
"assets/assets/images/cc-about-vision.jpg": "2a38c6738652d729a68dc5b841daa6ce",
"assets/assets/images/cc-atlas-copco-ga160-electric-air-compressor-1000v.jpg": "0c9c9894c0b9cfa934504e1b48f6f546",
"assets/assets/images/cc-boge-c-l-screw-compressor-15kw.png": "b2a884e387820f60ce27eefa351ed13b",
"assets/assets/images/cc-boge-c-l-screw-compressor-5.5kw.png": "1b2e180c6fcbe10ca91b5f548e337f25",
"assets/assets/images/cc-boge-c-ldr-screw-compressor-15kw-1.png": "1a72dbbf15f1c672c7a44fe1b5598c9c",
"assets/assets/images/cc-boge-c-lr-screw-compressor-5.5kw.png": "096e0c241283af0e3001c27b0d883ab3",
"assets/assets/images/cc-boge-c-r-screw-compressor-7.5kw.png": "30e287eec40c21b652daa9eb5f733cc7",
"assets/assets/images/cc-boge-k-piston-booster-compressor-11kw.png": "dfe397c8dc15d6555b7571eb285e4ffb",
"assets/assets/images/cc-boge-po-ltr-piston-compressor-1.5kw.png": "a7a810dc59ac1338e6e2d0be32f10fcc",
"assets/assets/images/cc-boge-s-4-lf-screw-compressor-110kw.png": "c33ad6caae687fd0b8de996b57fd4bf7",
"assets/assets/images/cc-boge-sd-screw-compressor-110kw.png": "bc27d87f7c232af377c2e9b801a1965a",
"assets/assets/images/cc-boge-srhv-piston-booster-compressor-15kw.png": "bc854ae5aa3ae59f1c64139e5a01b351",
"assets/assets/images/cc-home-about.jpg": "89360dd83d6ab331f4d7eeb54b5de53f",
"assets/assets/images/cc-parker-brand-logo-1200x451.png": "d47fdc6229d6591e685ee0c4198c35ad",
"assets/assets/images/cc-parker-transair-condition-monitoring-sensors-and-hardware.png": "5195e4e0e2c06d3567c798f300566d10",
"assets/assets/images/cc-parker-transair-logo-01-1200x257.png": "c571011b102f54fdc8a5482ae26bbd24",
"assets/assets/images/cc-parker-transair-wireless-technology-powered-by-scout.png": "efb4f37b876815e87b99f35a0ff44721",
"assets/assets/images/cc-projects-chevron.png": "eefcffc8ee3bcded76941457a985b2b3",
"assets/assets/images/cc-projects-citic-pacific.png": "d7802af1a375df1d28090e681f73e119",
"assets/assets/images/cc-projects-civmec.png": "19769bcec05e25dbea75dfdb398a3917",
"assets/assets/images/cc-projects-feature.jpg": "77169459097e0c4f519a3e65e9b9d1e0",
"assets/assets/images/cc-projects-ge-oil-gas.png": "f5b34c7b524c8966c6aaee3272d3b51d",
"assets/assets/images/cc-projects-halliburton.png": "e4485b1e83224fe81911a572dc41e8c9",
"assets/assets/images/cc-projects-houghtons.jpg": "17533ff9af5c9ba426b4f46a0880f528",
"assets/assets/images/cc-projects-perth-childrens-hospital.png": "0cf44d1c5f49295d2ad7c65f8dc77394",
"assets/assets/images/cc-services-auditing-1200x800.jpg": "8c60be56f70572ae420138e73e099972",
"assets/assets/images/cc-services-auditing-running-audit.jpg": "921f3c3826d776564759b1bd0a51dbf8",
"assets/assets/images/cc-services-auditing.jpg": "bbf32a38dd2bb1ad57d11255459ca8f5",
"assets/assets/images/cc-services-customised-solutions-containers.jpg": "641c82d8e374c375141f91b4c98a6529",
"assets/assets/images/cc-services-feature.jpg": "5766d170358b8b749a15bee1cb4c8f82",
"assets/assets/images/cc-services-installation-compressor-system-1200x800.jpg": "bdc04cf3fbfafa769ed805fe65789f7c",
"assets/assets/images/cc-services-installation-compressor-system.jpg": "f20db673a8598a597095d1e3ee5be9d4",
"assets/assets/images/cc-services-installation-feature-1200x800.jpg": "e93cc90ee42dca523cff1c1ce7d6f358",
"assets/assets/images/cc-services-installation-feature.jpg": "1b4c4e04eba1dc9048be4ff44ce3e216",
"assets/assets/images/cc-services-installation-multiple-compressor-workshop.jpg": "14e6e282d9a385ec23be90724f28552a",
"assets/assets/images/cc-services-installation-two-technicians-1200x800.jpg": "eb7570eb77792fb558dc52a6f417c8d6",
"assets/assets/images/cc-services-installation-two-technicians.jpg": "d44113841216e5046140b21cb43b8f81",
"assets/assets/images/cc-services-installation-workshop.jpg": "54d46bc98f5b77828d831c4b61fbec30",
"assets/assets/images/cc-services-servicing-feature-1200x800.jpg": "e97aed2c263ad569b38355cc9131f025",
"assets/assets/images/cc-services-servicing-feature.jpg": "3245db6c1c39b159a26d1927971c47b8",
"assets/assets/images/cc-services-servicing-prevention.jpg": "a778eecad4852732e44993df22706ee6",
"assets/assets/images/cc-services-servicing-servicing-contract.jpg": "e9efd62f7165a7c9ef01b6ab0df4987c",
"assets/assets/images/cc-services-servicing-understand-usage.jpg": "bffa55260a142a531381412e2a1e2ddb",
"assets/assets/images/cc-transair-powered-by-scout-lifestyle.png": "ee3f313d90d4daa68e65990f3906cb4a",
"assets/assets/images/cleanroom_air_handlers-a4.jpg": "ebef343941d100b3375b2acf829ebf9a",
"assets/assets/images/cleanroom_dehumidifier-a4.jpg": "0ab31e5d630b6a1d38f36f3861344985",
"assets/assets/images/cleanroom_with_ac_ffu_and_ducting_HV8A0631.jpg": "efa9d740531b8732ce3e7ca6ab7fb37a",
"assets/assets/images/Electrostatic-prefilter-cleanroom-air-shower.jpg": "3869e56f547dd2eec5bc0efab56bcac9",
"assets/assets/images/fb-usp-800-biosafe-cleanroom-exhaust-plenum_2.jpg": "a82835af554aa07a00ff0e993a9ad5df",
"assets/assets/images/home-feature.jpg": "903bcf856ab5b7fac8cb690e8b765566",
"assets/assets/images/HVAC.jpg": "81e1b69bfdb0d4b7dfc097e8523e6371",
"assets/assets/images/IMG_20230620_121829-2-1200x901.jpg": "926820126f76fa4753c36646850e4d5f",
"assets/assets/images/IMG_20230620_121829-2.jpg": "3d4e5d7a74e80d86799b967d8ce8e6fa",
"assets/assets/images/my_logo.png": "546f31339da4ce5754c19740d25d3bf5",
"assets/assets/images/nw4.gif": "381e40f444b92f7a52eebe55ae75c93f",
"assets/assets/images/our-services.jpg": "bffa55260a142a531381412e2a1e2ddb",
"assets/assets/images/polypro-vertical-air-return-84H-161108-HV8A1104-a4.jpg": "13db5f0f0642e37d361a335766472ae9",
"assets/assets/images/prodotti_ferrovie_1_pop.jpg": "dbbbe9d433cc48024a75257f5ea485d2",
"assets/assets/images/prodotti_ferrovie_2_pop.jpg": "4aaf0824eeee041f2d45a8e209d65bc3",
"assets/assets/images/prodotti_ferrovie_3_pop.jpg": "3823b65c4c828b9e43dbbd3b8953b47f",
"assets/assets/images/prodotti_ferrovie_4_pop.jpg": "3019c47ae18c20e3107b1973b615a649",
"assets/assets/images/prodotti_ferrovie_5_pop.jpg": "f3f9464c82b74da6edfc82eaacd62b50",
"assets/assets/images/prodotti_ferrovie_6_pop.jpg": "ef53eb4cf134b0a5544687420f766884",
"assets/assets/images/prodotti_ferrovie_7_pop.jpg": "575f2b26369abe542e069e22762ba536",
"assets/assets/images/prodotti_ferrovie_8_pop.jpg": "c116731b92183ed41f48d78063301631",
"assets/assets/images/sm-condenser-2.gif": "a036a4aac2f5bbcf575cd76c1c5d4f85",
"assets/assets/images/sm-condenser-3.gif": "af21c315fb02d4a395e886ce88255861",
"assets/assets/images/ultrasonic_humidifier_stainless_steel_mp15.jpg": "af596f4df7b01b63524dd0a2927bf6be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "941e604abec1812a5b78756329ea2621",
"assets/NOTICES": "fb3b11c8b132051de286117c1c4dca43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"Atlas-Copco-GA160-Electric-Air-Compressor.pdf": "e1819c40d4fd0e71a26ae49dd6bc9134",
"BOGE-piston-compressor-K-BOOSTER-brochure.pdf": "ecb760a5ddcd8e58f1db5a8fb17f85e6",
"BOGE-piston-compressors-po-series-brochure.pdf": "1720d33254f82bba93f8443d3ab760c2",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"gowning_protocol.pdf": "8204c31d4de8a738aa4d43672395d346",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21f8123a3360aaac196afd367ec49bbe",
"/": "21f8123a3360aaac196afd367ec49bbe",
"main.dart.js": "64a97641e3be16965cd0148ce65c1c83",
"manifest.json": "d7abe1f6c8d88cf85194f27c0e17ffad",
"owners-manual-valuline-cleanroom-air-conditioning-unit-hvac.pdf": "87ee902565c4837b35dfed1c5dccbd9b",
"TERRA%20AC%20RAILWAY.pdf": "78b23fc4b9ff9032e70fd233f7a73e77",
"version.json": "c918a29a9360c8e35c66885f0d6e1013"};
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
