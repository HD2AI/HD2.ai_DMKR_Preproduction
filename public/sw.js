// Service Worker for DMKR.co.uk
// Provides offline functionality and asset caching

const CACHE_NAME = 'dmkr-v1';
const STATIC_CACHE_NAME = 'dmkr-static-v1';
const DYNAMIC_CACHE_NAME = 'dmkr-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/dmkr-logo.png',
  // Add other critical assets
];

// Assets to cache dynamically
const CACHE_STRATEGIES = {
  images: 'cache-first',
  api: 'network-first',
  pages: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests with caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Handle different types of requests
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isApiRequest(request)) {
    event.respondWith(handleApiRequest(request));
  } else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request));
  } else {
    event.respondWith(handleStaticRequest(request));
  }
});

// Helper functions
function isImageRequest(request) {
  return request.destination === 'image' || 
         /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(new URL(request.url).pathname);
}

function isApiRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || 
         url.hostname.includes('supabase') ||
         url.hostname.includes('api.');
}

function isPageRequest(request) {
  return request.mode === 'navigate' || 
         (request.method === 'GET' && request.headers.get('accept').includes('text/html'));
}

// Cache-first strategy for images
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Image request failed', error);
    // Return a fallback image if available
    return caches.match('/dmkr-logo.png') || new Response('Image not available', { status: 404 });
  }
}

// Network-first strategy for API requests
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: API request failed, trying cache', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale-while-revalidate strategy for pages
async function handlePageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    const networkResponsePromise = fetch(request);
    
    if (cachedResponse) {
      // Return cached version immediately, update cache in background
      networkResponsePromise
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const cache = caches.open(DYNAMIC_CACHE_NAME);
            cache.then(c => c.put(request, networkResponse.clone()));
          }
        })
        .catch(() => {
          // Network failed, but we have cached version
        });
      
      return cachedResponse;
    }
    
    // No cached version, wait for network
    const networkResponse = await networkResponsePromise;
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Page request failed', error);
    // Return offline page if available
    return caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// Cache-first strategy for static assets
async function handleStaticRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Static request failed', error);
    throw error;
  }
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued requests that failed when offline
  console.log('Service Worker: Performing background sync');
}