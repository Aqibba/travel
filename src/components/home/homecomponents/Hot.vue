<template>
  <div class="all-wrapper">
    <div class="week-hot">
      <img src="../../../assets/imgs/hot.png" class="hot-icon">
      <span class="hot-text">本周最热</span>
      <span class="more">查看更多>></span>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in hotList" :key="item.id" class="img-wrapper">
        <div class="img-container">
          <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="item-img">
          <p class="img-title">{{item.title}}</p>
          <div class="img-price-wrapper">
            <span class="img-price">¥{{item.price}}</span> 起
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-scrollbar',
        slidesPerView: '3',
        autoResize: false
      },
      hotList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'hot'
      this.axios.get(url).then(result => {
        // console.log(result)
        var rows = this.hotList.concat(result.data.data)
        this.hotList = rows
      })
    }
  },
  created () {
    this.loadMore()
  }
}
</script>

<style lang="stylus" scoped>
// 利用样式穿透设置横向滚动条的样式
.all-wrapper >>> .swiper-scrollbar
  left 2%
  width 96%
  background #ffffff
  padding-bottom .15rem
.all-wrapper >>> .swiper-pagination-bullet
  width 1.2rem !important
  height 0.05rem !important
  margin 0
  margin-bottom .15rem
  margin-top .15rem
  border-radius 0
  background #ffffff
.all-wrapper >>> .swiper-pagination-bullet-active
  background #cccccc
.all-wrapper
  border-bottom 1px solid #eeeeee
  .week-hot
    height .5rem
    line-height .5rem
    background #fff
    color #000
    font-size .35rem
    font-weight 0
    .hot-icon
      width .3rem
      height .3rem
      margin-left .35rem
    .hot-text
      font-size .3rem
    .more
      float right
      font-size .25rem
      color #616161
      margin-right .35rem
  .swiper-container
    height 3.7rem
    background #fff
    .swiper-wrapper
      width 100%
      height 3.2rem !important
      .swiper-slide
        display block
        width 2.5rem !important
      .img-wrapper
        display flex
        height 2.3rem
        .img-container
          text-align center
          .item-img
            display block
            width 2.2rem
            height 2.3rem
            padding-top .2rem
            padding-left .2rem
            margin-bottom .15rem
          .img-title
            margin-bottom .1rem
          .img-price-wrapper
            padding-top .1rem
            font-size .25rem
            .img-price
              color #ff8300
</style>
