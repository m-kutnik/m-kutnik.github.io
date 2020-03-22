import Vue from 'vue'
import '@/assets/dwarf.css'
import '@/plugins/composition-api'
import '@/plugins/icons'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
