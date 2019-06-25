// installation
self.addEventListener("install", (event)=>{
	event.waitUntil(
    caches.open("restaurant-v1").then((cache)=> {
		return cache.addAll([
      
    ]);
	}))
})
// fetch event
self.addEventListener("fetch", (event) => {
	event.respondWith(caches.match(event.request).then((respons) => {
		return respons || fetch(event.request).then((response) => {
			return caches.open("restaurant-v1").then((cache) => {
				cache.put(event.request, response.clone());
				return response;
			})
		})
	}))
})
