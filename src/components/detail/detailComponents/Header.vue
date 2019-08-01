<template>
  <div>
    <router-link tag="div" to="/" class="header" v-show="showHeader">
      <span class="iconfont back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" :style="opacityStyle" v-show="!showHeader">
      <router-link to="/">
        <span class="iconfont back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // 滑动屏幕事件
    handleScroll () {
      let top = document.documentElement.scrollTop
      // console.log(top)
      if (top > 30) {
        this.showHeader = false
        // 背景颜色的渐隐渐现
        // 得到向下滑动了多少距离,将这个滑动的距离再一次赋值给透明度
        let opacity = top / 200
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showHeader = true
      }
    }
  },
  // 创建钩子函数,监听页面滚动事件
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 销毁生命周期钩子函数,防止全局都被绑定此事件
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position absolute
    left .15rem
    top .15rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .5)
    .back
      color #FFFFFF
      font-size .4rem
  .header-fixed
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    overflow hidden
    background-color $bgcolor
    font-size .32rem
    position fixed
    top 0
    left 0
    right 0
    z-index 3
    .back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>
