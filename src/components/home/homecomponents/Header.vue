<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;<input type="text" placeholder="输入城市/游玩/景点/主题"></span>
    </div>
    <router-link to="/city">
      <div class="header-right area">{{$store.state.city}}<span class="iconfont">&#xe6aa;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeder',
  data () {
    return {}
  }
  // 从父组件中获取数据
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height 0.86rem
    background-color $bgcolor
    color #ffffff
    .header-left
      width 0.64rem
      float left
      .back
        padding-left .2rem
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #ffffff
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #cccccc
      border-radius .1rem
    .header-right
      min-width 1.04rem
      padding-left .1rem
      float right
      text-align center
      color #ffffff
      .area
        font-size .24rem
        margin-left -0.4rem
</style>
