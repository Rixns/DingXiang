import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import "./assets/css/base.css"
import "./assets/js/phone"
import "../src/plugins/vant"

import echarts from '@/plugins/echarts'
Vue.use(echarts)

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router
}).$mount('#app')
