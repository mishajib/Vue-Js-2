var app = new Vue({
			el: '#app',
			data: {
				message: "Hello Vue.js",
			},
			methods: {
				run(message, name) {
					return message + name;
				},
				welcome() {
					return "Welcome To Our App";
				},
				valueAccess() {
					return this.message;
				}
			}
		});