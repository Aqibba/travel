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

// 引入  vue-awesome-swiper@2.6.7 做轮播效果
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 引入 axios 解决跨域问题
import axios from 'axios'

// 引入 vuex 共享公共数据
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
// 创建一个公共的仓库,存放数据
var store = new Vuex.Store({
  // 储存的城市
  state: {
    // 城市定位的首选项先找本地存储中是否有存储的数据,如果没有就按默认值北京显示
    city: localStorage.city || '北京'
  },
  // 异步操作,接收点击事件 handleCity 中传递来的城市数据
  actions: {
    changeCity (ctx, city) {
      // console.log(city)
      // 调用mutations
      ctx.commit('changeCity', city)
    }
  },
  // 改变state中的值
  mutations: {
    changeCity (state, city) {
      state.city = city
      // 调用本地存储,存储刚刚点击过的城市
      localStorage.city = city
    }
  }
})

Vue.config.productionTip = false
// 300ms 延迟解决引用
fastClick.attach(document.body)

// axios
// 发送请求时保存session信息
axios.defaults.withCredentials = true
// 设置session基础路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
// 注册 axios vue实例
Vue.prototype.axios = axios

// 使用swiper插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
