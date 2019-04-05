var myapp = new Vue({
			el: '#app',
			data: {
				isActive: false,
				count: 0,
			},
			methods: {
				incCount() {
					this.count++;
				},
				decCount() {
					this.count--;
				},
			},
		});