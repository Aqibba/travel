<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-hot></home-hot>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './homecomponents/Header'
import HomeSwiper from './homecomponents/Swiper'
import HomeIcon from './homecomponents/Icon'
import HomeHot from './homecomponents/Hot'
import HomeRecommend from './homecomponents/Recommend'
import HomeWeekend from './homecomponents/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeHot,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city: ''
    }
  },
  methods: {
    // 创建一个函数用户使用ajax获取后台数据
    getHomeInfo () {
      axios.get('http://localhost:8080/static/mock/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      // console.log(res.data)

      res = res.data
      // 如果后端返回结果并且有数据，那么这个传出的 city 就是后台传出的 city
      // if (res.ret && res.data) {
      //   this.city = res.data.city
      // }
    }
  },
  mounted () {
    // console.log(11111)
    this.getHomeInfo()
  },
  activated () {
    // console.log(22222)
  }
}
</script>
