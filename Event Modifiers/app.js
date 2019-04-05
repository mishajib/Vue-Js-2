// Event Modifiers
// -Once
// -Prevent
// -Stop
// -Capture


var myapp = new Vue({
			el: '#app',
			data: {
				counter: 0,
			},
			methods: {
				increment() {
					this.counter++;
				},
				submitClick() {
					console.log("Clicking....");
				},
				parentClass() {
					console.log("Parent Class...");
				},
				btnClick() {
					console.log("Button Click...");
				},
			},
		});