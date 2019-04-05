/*
Two way Data Binding Code
for two way data binding you have to use
v-model="" directive
*/

var myapp = new Vue({
			el: '#app',
			data: {
				character: "",
				name: "MI SHAJIB",
				email: "mishajib222@gmail.com",
			},
			methods: {
				keypressFunction(event) {
					console.log(event);
					this.character = event.key;
				},
			},
		});