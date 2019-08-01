<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 循环的信息写在这里 -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="img-wrapper">
          <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'weekend'
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
    height .8rem
    line-height .6rem
    text-indent .2rem
    margin-top .2rem
  .img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .2rem
    .item-title
      line-height .54rem
      font-size .3rem
      color #212121
      overflow hidden
      text-overflow ellipsis
      -o-text-overflow ellipsis
      white-space nowrap
    .item-desc
      line-height .4rem
      font-size .2rem
      color #616161
      overflow hidden
      text-overflow ellipsis
      -o-text-overflow ellipsis
      white-space nowrap
</style>
