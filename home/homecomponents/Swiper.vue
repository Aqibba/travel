<template>
<div class="warpper">
  <swiper :options="swiperOption">
    <!-- 轮播图 -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img :src="item.imgUrl" class="slideImg">
    </swiper-slide>
    <!-- 轮播图上面的小圆点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '1', imgUrl: '../../../assets/imgs/banner.jpg'},
        {id: '2', imgUrl: '../../../assets/imgs/banner1.jpg'},
        {id: '3', imgUrl: '../../../assets/imgs/banner2.jpg'},
        {id: '4', imgUrl: '../../../assets/imgs/banner3.jpg'},
        {id: '5', imgUrl: '../../../assets/imgs/banner4.jpg'},
        {id: '6', imgUrl: '../../../assets/imgs/banner5.jpg'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  /* 样式穿透 warpper 下的所有 这个 active 类全都是这个样式 */
  .warpper >>> .swiper-pagination-bullet-active
    background-color #fff
  .warpper
    overflow hidden
    width 100%
    height 0
    padding-bottom 27.25%
    background-color #eeeeee
    .slideImg
      width 100%
</style>
