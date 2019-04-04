var myapp = new Vue({
			el: '#app',
			data: {
				
			},
			methods: {
				keypressfunction(event) {
					console.log(event.key);
				},
				keyupfunction(event) {
					console.log(event.key);
				},
				keydownfunction(event) {
					console.log(event.key);
				},
			}
		});