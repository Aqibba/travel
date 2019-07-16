<template>
<div class="warpper">
  <swiper :options="swiperOption">
    <!-- 轮播图 -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="slideImg">
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
        // 元素小白点
        pagination: '.swiper-pagination',
        //  是否可以滑动回来
        loop: true,
        // 自动轮播的时间
        autoplay: 5000,
        autoplayDisableOnInteraction: false
      },
      swiperList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'swiper'
      this.axios.get(url).then(result => {
        var rows = this.swiperList.concat(result.data.data)
        this.swiperList = rows
      })
    }
  },
  created () {
    this.loadMore()
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
