import Vue from 'vue'
import App from './App'
// import router from './router'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // 下面的表示的就是一个element create 方法
  render: h => h(App)
})
