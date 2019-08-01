<template>
  <div>
    <div class="title">
      <img src="../../../assets/imgs/like.png" class="like">
      猜你喜欢
    </div>
    <ul class="ulbgc">
      <!-- 循环的信息写在这里 -->
        <router-link tag="li" class="item border-bottom" v-for="item of recommendList" :key="item.id" :to=" '/detail/' + item.id">
          <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="item-img">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">
              <span class="item-star iconfont" style="color:#ffb436;font-size:12px">&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;</span>
              <span>{{item.comment}}条评论</span>
            </p>
            <div class="item-price-wrapper">
              <span class="item-icon">¥</span>
              <span class="item-price">{{item.price}}</span>
              起
              <span class="item-area">{{item.area}}</span>
            </div>
            <div class="item-description-wrapper">
              <p class="item-description">{{item.description}}</p>
            </div>
          </div>
        </router-link>
    </ul>
    <button class="btn">查看所有产品</button>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'recommend'
      this.axios.get(url).then(result => {
        // console.log(result)
        var rows = this.recommendList.concat(result.data.data)
        this.recommendList = rows
      })
    }
  },
  created () {
    this.loadMore()
  }
}
</script>

<style lang="stylus" scoped>
  .title
    height 1rem
    line-height 1rem
    background-color #ffffff
    text-indent .2rem
    margin-top .2rem
    padding-top .2rem
    padding-left .1rem
    font-size .32rem
    .like
      width .4rem
      height .4rem
      margin-bottom .1rem
  .ulbgc
    background #ffffff
    padding-left .15rem
  .item
    display flex
    // height 1.9rem
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
        padding-top .1rem
        overflow hidden
        text-overflow ellipsis
        -o-text-overflow ellipsis
        white-space nowrap
      .item-price-wrapper
        color #616161
        padding-top .1rem
        font-size .2rem
        position relative
        .item-icon
          color #ff8300
        .item-price
          font-size .4rem
          color #ff8300
        .item-area
          position absolute
          top 48%
          right 2%
      .item-desc
        line-height .4rem
        color #cccccc
        margin-top .15rem
        overflow hidden
        text-overflow ellipsis
        -o-text-overflow ellipsis
        white-space nowrap
      .item-price
        margin-top .2rem
      .item-description-wrapper
        background #fff9f9
        display inline-block
        margin-top .4rem
        .item-description
          color #ff5555
          font-size .1rem
  .btn
    width 100%
    height .8rem
    text-align center
    border-top 1px solid #f5f5f5
    background #ffffff
    color #00afc7
</style>
