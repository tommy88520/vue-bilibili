import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 太多了不寫
new Vue({
  // el: '#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
