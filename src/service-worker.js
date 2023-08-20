self.addEventListener('push', (event) => {
	const data = event.data.json();
	console.log(data);
	event.waitUntil(
		self.registration.showNotification(data.title, {
			body: data.message,
			badge: 'test.png',
			icon: 'test.png',
			requireInteraction: true,
			vibrate: [200, 100, 200, 100, 200, 100, 200]
		})
	);
});

export default null;
