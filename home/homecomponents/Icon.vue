<template>
  <div class="icons">
    <swiper>
       <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src='item.imgUrl' class="contant">
          </div>
          <p class="desc">{{item.desc}}</p>
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
      iconList: [
        {id: '1', imgUrl: '../../../assets/imgs/icon1.png', desc: '故宫'},
        {id: '2', imgUrl: '../../../assets/imgs/icon2.png', desc: '爬长城'},
        {id: '3', imgUrl: '../../../assets/imgs/icon3.png', desc: '北京欢乐谷'},
        {id: '4', imgUrl: '../../../assets/imgs/icon4.png', desc: '水上乐园'},
        {id: '5', imgUrl: '../../../assets/imgs/icon5.png', desc: '野生动物园'},
        {id: '6', imgUrl: '../../../assets/imgs/icon6.png', desc: '蜡像馆'},
        {id: '7', imgUrl: '../../../assets/imgs/icon7.png', desc: '动植物园'},
        {id: '8', imgUrl: '../../../assets/imgs/icon8.png', desc: '景点门票'},
        {id: '9', imgUrl: '../../../assets/imgs/icon9.png', desc: '北京必游'}
      ]
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
