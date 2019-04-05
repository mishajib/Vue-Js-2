/*
About Computed Properties
============================
Computer Properties can be used to do quick calculations of properties that are 
displayed in the view. These calculations will be cached and will only update when needed.

Computer properties allow us to have model-specific, complex values computed 
for the view. These values will be bound to the dependency values and only update when required.
*/


/*
	What is the difference between Computer Properties Vs Methods ?
		
		-Method: Using this syntax, the functionName() method 
		gets executed every time the page renders (ie: with every change).

		-Computer Property: Vue remembers the values that the computed property is dependent on.

*/

var myapp = new Vue({
			el: '#app',
			data: {
				firstName:"",
				lastName:"",
				meter:"",
				maths:0,
				science:0,
				english:0,
			},
			methods: {
				runme() {
					console.log("this is first method..");
					return "I am a Method...";
				}
			},
			computed: {
				getFullName() {
					return this.firstName+ " "+this.lastName;
				},
				convertToCentimeter() {
					return this.meter*100; //1m = 100cm
				},
				totalSubjectMarks() {
					return parseInt(this.maths) + parseInt(this.science) + parseInt(this.english);
				},
			},
		});