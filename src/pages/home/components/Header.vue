<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/经典/游玩主题</div>
    <div class="header-right">城市<span class="iconfont down">&#xe6aa;</span></div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scope>
  .header{
    display flex
    line-height 0.86rem
    background-color #00bcd4
    color #fff
  }
    .header-left{
      width 0.64rem
      float left
    }
      .back {
        text-align center
        margin-top .1rem
        margin-left .2rem
      }
    .header-input{
      flex 1
      heigh .64rem
      line-heigh .64rem
      margin-left 0.2rem
      margin-top 0.06rem
      margin-bottom 0.06rem
      padding-left 0.2rem
      background-color #fff
      border-radius 0.1rem
      color #ccc
    }
    .header-right{
      width 1.24rem
      float right
      text-align center
      margin-top 0.06rem
    }
      .down{
        width 0.1rem
        text-align center
      }
</style>
