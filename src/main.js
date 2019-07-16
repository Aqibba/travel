// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 reset.css 重置页面
import 'styles/reset.css'

// 引入 border.css 解决 1px 边框问题
import 'styles/border.css'

// 引入 iconfont 文件
import 'styles/iconfont.css'

// 引入 fastclick 文件, 解决移动端 300ms 点击延迟事件
import fastClick from 'fastclick'

// 引入  vue-awesome-swiper@2.6.7
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 引入 axios.js 文件
import axios from 'axios'

Vue.config.productionTip = false
fastClick.attach(document.body)

// 注册并使用
Vue.use(VueAwesomeSwiper)

axios.defaults.withCredentials = true
// 设置session基础路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
