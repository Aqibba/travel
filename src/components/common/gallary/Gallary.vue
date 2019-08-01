<template>
  <div class="container" @click="gallaryClick()">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- 轮播图 -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" class="gallaryImg">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    // 当点击了画廊的大图片之后触发一个父组件中的 close 事件
    gallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000000
    z-index 9
    display flex
    flex-direction column
    justify-content center
    .wrapper
      width 100%
      padding-bottom 68%
      // overflow hidden
      height 0
      background #FFFFFF
      .gallaryImg
        width 100%
      .swiper-pagination
        color #FFFFFF
        bottom -.5rem
</style>
