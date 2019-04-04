var myapp = new Vue({
			el: '#app',
			data: {
				counter: 0,
				x:0,
				y:0,
			},
			methods: {
				increment(inc) {
					this.counter += inc;
				},
				decrement(dec) {
					this.counter -= dec;
				},
				movefunction(event) {
					this.x = event.offsetX;
					this.y = event.offsetY;
				},
				mouseoverfunction() {
					console.log("This is due to mouse over.");
				},
				mouseoutfunction() {
					console.log("Due to mouse out.");
				},
			}
		});