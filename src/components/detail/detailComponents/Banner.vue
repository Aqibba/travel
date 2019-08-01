<template>
  <div>
    <div class="banner" @click="bannerClick()">
      <img src="../../../assets/imgs/detail_banner1.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">北京欢乐谷(AAAA景区)</div>
        <div class="banner-num"><span class="iconfont pic">&#xe634;</span>27</div>
      </div>
    </div>
    <!-- 画廊在不点击的时候是隐藏的 -->
    <fade>
      <gallary :imgs="imgs" v-show="showGarllary" @close="gallaryClose"></gallary>
    </fade>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/animation/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      // 画廊区域的图片在不点击的时候是隐藏的状态
      showGarllary: false,
      imgs: [
        // 本地的资源文件需要用 require 才能得到
        require('../../../assets/imgs/detail_banner2.jpg'),
        require('../../../assets/imgs/detail_banner3.jpg'),
        require('../../../assets/imgs/detail_banner4.jpg'),
        require('../../../assets/imgs/detail_banner5.jpg')
      ]
    }
  },
  components: {
    Gallary,
    Fade
  },
  methods: {
    bannerClick () {
      this.showGarllary = true
    },
    gallaryClose () {
      this.showGarllary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 5%
      bottom 5%
      line-height .6rem
      display flex
      .banner-title
        flex 1
        color #FFFFFF
        font-size .36rem
        text-shadow 0 1px 2px rgba(0, 0, 0, .7)
      .banner-num
        position absolute
        bottom 90%
        padding 0 .4rem
        line-height .4rem
        height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .5)
        color #FFFFFF
        .pic
          padding-right .3rem
</style>
