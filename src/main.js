import Vue from 'vue'
Vue.config.devtools = true
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './theme.css'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
