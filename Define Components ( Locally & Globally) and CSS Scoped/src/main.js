import Vue from 'vue'
import App from './App.vue'

//Globally define component (first import vue files into main.js)
import Student from './components/Student.vue'

//Globally define component (register the component here)
Vue.component("student", Student)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
