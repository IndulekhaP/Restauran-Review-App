navigator.serviceWorker.register('/sw.js').then(function(register) {
	console.log("Service Worker registered successfully.");
}).catch((e) => {
	console.log("Service worker registration failed.", e);
});
