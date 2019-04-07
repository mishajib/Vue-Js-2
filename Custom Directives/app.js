Vue.directive('test', {
	bind(el, binding, vnode) {
		console.log(el); //refers to dom element
		el.style.backgroundColor = "blue";
		el.style.fontSize = "20px";
		el.style.color = "white";
		el.title = "This is now updated";
		console.log(binding); //refers to properties of directive
		console.log("Value: "+binding.value);
		console.log("NAME: "+binding.value.name);
	},
	update(object1, object2) {
		console.log("Running...");
		var data = JSON.parse(JSON.stringify(object2));
		console.log(data);
	},
	unbind() {

	}
});

var myapp = new Vue({
			el: '#app',
			data: {
				message: "This is custom directive call",
			},
			methods: {
				updateValue() {
					console.log("update...");
					this.message = "Value has been updated now";
				}
			},
		});