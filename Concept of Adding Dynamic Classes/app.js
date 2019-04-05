var myapp = new Vue({
			el: '#app',
			data: {
				isActive: false,
			},
			methods: {
				toggleClass() {
					this.isActive = !this.isActive;
				},
			},
		});