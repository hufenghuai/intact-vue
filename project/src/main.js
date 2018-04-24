import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclcik from 'fastclick'
import 'common/stylus/index.styl'

fastclcik.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
