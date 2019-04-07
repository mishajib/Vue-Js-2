var myapp = new Vue({
			el: '#app',
			data: {
				fname: "",
				lname: "",
				channelName: "MI SHAJIB",
			},
			methods: {
				
			},
			computed: {
				fullname: {
					get() { //getter function of computed fullname function
						return this.fname+" "+this.lname;
					},
					set() { //setter function of computed fullname function
						return this.channelName = "Updated MI";
					},
				},
			},
		});