import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
Vue.config.productionTip = false
// 太多了不寫

import store from './store'
new Vue({
  // el: '#app',
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
