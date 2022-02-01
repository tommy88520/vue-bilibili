import Vue from 'vue'
import App from './App.vue'
import { showName } from './mixin'

Vue.config.productionTip = false
Vue.mixin(showName)
new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')
