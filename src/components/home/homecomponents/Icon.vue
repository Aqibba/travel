<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="contant">
          </div>
          <p class="desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <!-- 轮播图上面的小圆点 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="icon-bottom">
      <ul>
        <li class="location">
          <span>
            <span class="iconfont">&#xe604;</span> 定位失败
          </span>
        </li>
        <li class="travel-list">
          <span>
            <span class="iconfont">&#xe844;</span> 必游榜单
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 0
      },
      iconList: []
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    loadMore () {
      var url = 'icon'
      this.axios.get(url).then(result => {
        // console.log(result)
        var rows = this.iconList.concat(result.data.data)
        this.iconList = rows
      })
    }
  },
  created () {
    this.loadMore()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  /* 样式穿透 warpper 下的所有 这个 active 类全都是这个样式 */
  .icons >>> .swiper-pagination-bullet-active
    background-color #33bfcb
  .icons >>> .swiper-container
    height .4rem
    padding-bottom 50%
  .icons
    background #ffffff
    .icon
      float left
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      position relative
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .contant
          display block
          height 100%
          margin 0 auto
      .desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color $textcolor
        text-align center
        overflow hidden
        text-overflow ellipsis
        -o-text-overflow ellipsis
        white-space nowrap
    .icon-bottom
      height 1.3rem
      width 100%
      border-top 1px solid #f5f5f5
      .location
        height .98rem
        line-height .98rem
        float left
        width 50%
        text-align center
        box-sizing border-box
        border-right 1px solid #f5f5f5
      .travel-list
        height .98rem
        line-height .98rem
        float right
        width 50%
        text-align center
</style>
