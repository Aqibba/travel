<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <!-- 循环的信息写在这里 -->
      <li v-for="item of weekendList" :key="item.id" class="item border-bottom">
        <div class="img-wrapper">
          <img :src=" 'http://127.0.0.1:3000/imgs/' + item.imgUrl " class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">故宫</p>
          <p class="item-desc">世界五大宫之首，穿越与您近在咫尺</p>
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
      weekendList: []
    }
  },
  methods: {
    loadMore () {
      var url = 'weekend'
      this.axios.get(url).then(result => {
        // console.log(result)
        var rows = this.weekendList.concat(result.data.data)
        this.weekendList = rows
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
    line-height .4rem
    background-color #ccc
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
