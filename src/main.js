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

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
