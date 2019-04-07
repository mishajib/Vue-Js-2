Vue.component("test", {
	template: `<p>This is called test markup Name: {{ name }}, 
	Author: {{ author }}, Methods: {{ method1() }}, Computed: {{ computed1 }}</p>`,
	data() {
		return{
			name: "MI SHAJIB",
			author: "Shajib",
		}
	},
	methods: {
		method1() {
			return "This is method1";
		}
	},
	computed: {
		computed1() {
			return "This is test Computed on Component";
		}
	},
});


var myapp1 = new Vue({
			el: '#app1',
			data: {
				
			},
			methods: {
				
			},
			computed: {
				
			},
		});


var myapp2 = new Vue({
			el: '#app2',
			data: {
				
			},
			methods: {
				
			},
			computed: {
				
			},
		});