<template>
<div class="warpper">
  <!-- 调用计算属性判断 swiperList 的长度, 当没有长度的时候这个swiper是false所以不会创建一个轮播图，当后台传过来数据的时候，有长度了为true时创建一个轮播图,防止轮播图显示的时候显示是从最后一张开始 -->
  <swiper :options="swiperOption" v-if="showSwiper">
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
        pagination: '.swiper-pagination',
        // 循环播放
        loop: true,
        // 多长时间播下一张
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      },
      // 因为 swiper 的初始创建是由一个空数组创建的，所以第一张图片可能会变成最后一张先显示
      swiperList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'swiper'
      this.axios.get(url).then(result => {
        // console.log(result)
        var rows = this.swiperList.concat(result.data.data)
        this.swiperList = rows
      })
    }
  },
  created () {
    this.loadMore()
  },
  /* 添加计算属性, 计算 swiperList 的长度 */
  computed: {
    showSwiper () {
      return this.swiperList.length
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
