var myapp1 = new Vue({
			el: '#app1',
			data: {
				title: "MI SHAJIB",
			},
			methods: {
				firstApp() {
					return "This is first Instances";
				},
				shareMethod() {
					return "This is shared method";
				},
			},
			computed: {
				sharedComputerMethod() {
					return this.title;
				}
			},
		});

var myapp2 = new Vue({
			el: '#app2',
			data: {
				title: myapp1.title,
				author: "SHAJIB",
			},
			methods: {
				secondApp() {
					return "This is second Instances";
				},
				receiveMethod() {
					return myapp1.shareMethod();
				},
				accessComputed() {
					return myapp1.sharedComputerMethod;
				},

			},
		});