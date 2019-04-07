var myapp = new Vue({
			el: '#app',
			data: {
				
			},
			methods: {
				btnSubmit() {
					console.log(this.$refs);
					console.log("Name: "+this.$refs.txtname.value);
					console.log("Email: "+this.$refs.txtemail.value);
				}
			},
		});