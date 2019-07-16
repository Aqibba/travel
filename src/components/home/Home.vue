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
// import axios from 'axios'
import HomeHeader from './homecomponents/Header'
import HomeSwiper from './homecomponents/Swiper'
import HomeIcon from './homecomponents/Icon'
import HomeHot from './homecomponents/Hot'
import HomeRecommend from './homecomponents/Recommend'
import HomeWeekend from './homecomponents/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeHot,
    HomeRecommend,
    HomeWeekend
  }
}
/*
mounted () {
    this.gitHomeInfo()
  },
  methods: {
    gitHomeInfo () {
      // 当项目上线是，从服务器获取的数据存放位置，改变访问位置
      // axios.get('/api/index.json').then(this.gitHomeInfoSuccess)
      axios.get('/static/index.json').then(this.gitHomeInfoSuccess)
    },
    gitHomeInfoSuccess (res) {
      // json 文件中的数据
      // console.log(res)
    }
}
*/
</script>
