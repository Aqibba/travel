<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
  </div>
</template>
<script>
import HomeHeader from './homecomponents/Header'
import HomeSwiper from './homecomponents/Swiper'
import HomeIcon from './homecomponents/Icon'
import HomeRecommend from './homecomponents/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  data () {
    return {}
  }
}
</script>
