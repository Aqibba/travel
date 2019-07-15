<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 循环的信息写在这里 -->
      <li class="item border-bottom">
        <div class="img-wrapper">
          <img src="../../../assets/imgs/recommend.jpg" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">故宫</p>
          <p class="item-desc">世界五大宫之首，穿越与您近在咫尺</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id: '1', imgUrl: '../../../assets/imgs/recommend.jpg'},
        {id: '2', imgUrl: '../../../assets/imgs/recommend1.jpg'},
        {id: '3', imgUrl: '../../../assets/imgs/recommend2.jpg'},
        {id: '4', imgUrl: '../../../assets/imgs/recommend3.jpg'},
        {id: '5', imgUrl: '../../../assets/imgs/recommend4.jpg'},
        {id: '6', imgUrl: '../../../assets/imgs/recommend5.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height .4rem
    background-color #ccc
    text-indent .2rem
    margin-top .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      min-width 0
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        overflow hidden
        text-overflow ellipsis
        -o-text-overflow ellipsis
        white-space nowrap
      .item-desc
        line-height .4rem
        color #cccccc
        overflow hidden
        text-overflow ellipsis
        -o-text-overflow ellipsis
        white-space nowrap
</style>
