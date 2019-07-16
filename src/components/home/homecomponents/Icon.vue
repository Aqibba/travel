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
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      // 调用组个组件的时候 Icon区域会自动轮播,使 Icon 不会自动轮播
      swiperOption: {
        autopaly: 0
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
        // console.log(result.data)
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
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin .1rem
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
</style>
