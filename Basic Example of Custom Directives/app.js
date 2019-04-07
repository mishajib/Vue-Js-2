Vue.directive('test', function(el, binding){
	console.log(el);
	console.log(binding);


	var dir_arg = binding.arg;
	if (dir_arg == "blue") {
		var mod = binding.modifiers.change;
		if (mod == true) {
			el.style.backgroundColor = "orange";
			el.style.fontSize = "20px";
			el.style.color = "white";
		}else{
			el.style.backgroundColor = "blue";
			el.style.fontSize = "20px";
			el.style.color = "white";
		}
	}
	if (dir_arg == "green") {
		el.style.backgroundColor = "green";
		el.style.fontSize = "20px";
		el.style.color = "white";
	}
});

var myapp = new Vue({
			el: '#app',
			data: {
				channelName: "MI SHAJIB",
			},
			methods: {
				
			},
		});