<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">热门城市</div>
        <ul class="area-list">
          <li class="area-item border" v-for="item of hot" :key="item.id" @click="handleCity(item.name)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="word">
        <div class="title">字母排序</div>
        <ul class="word-list">
          <li class="word-item" v-for="(item, index) of cities" :key="index" @click="wardSelect">
            <a href="javascript:;">{{index}}</a>
          </li>
        </ul>
      </div>
      <!-- 字母查找 -->
      <div class="area" v-for="(item, index) of cities" :key="index" :ref="index">
        <div class="title" :id="index">{{index}}</div>
        <ul class="area-list">
          <li class="area-item border" v-for="item of item" :key="item.id"  @click="handleCity(item.name)">
            <a href="javascript:;" class="innerWard">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 better-scroll 插件，使滑动时更带感
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    // 定义并使用 better-scroll
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    hot: {},
    cities: {}
  },
  methods: {
    // 定义一个函数但即使查找点击了那个字母
    wardSelect (e) {
      // e 触发这个事件, 获取这个被点击的字母并且放入data中
      this.selectWard = e.target.innerText
      // console.log(this.selectWard)
    },
    // 点击时传出的city
    handleCity (city) {
      // console.log(city)
      // 将点击后得到的city传递到main.js中
      this.$store.dispatch('changeCity', city)
      // 利用vue-router进行页面跳转,vue的编程式导航
      this.$router.push('/')
    }
  },
  data () {
    return {
      selectWard: ''
    }
  },
  // 监听事件, 监听 data 中 selectWard 的变化
  watch: {
    selectWard () {
      // console.log(this.selectWard)
      // better-scroll 中的写法，判断是否监听了对象，如果有监听到 selectWard 数据中的变化，那么就滚动到这个数据所对应的 class 下
      if (this.selectWard) {
        // 监听得到的数据是一个数组，只有数组的第一位是所需要的数据，将他存到一个变量中，当跳转时跳转此处
        var elem = this.$refs[this.selectWard][0]
        // console.log(elem)
        this.scroll.scrollToElement(elem)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  // 设置全局的border属性
  .border
    &:before
      border-color #777
      border-radius .2rem
    &:after
      border-color #777
      border-radius .5rem
  .list
    position absolute
    top 1.68rem
    left 0
    bottom 0
    right 0
    overflow hidden
    .title
      height .3rem
      background #f5f5f5
      padding .25rem 0 .25rem .3rem
      color #666
      font-size .3rem
    // 热门城市和字母排序
    .area-list
      background #fff
      overflow hidden
      .area-item
        float left
        width 30%
        margin .1rem 0 .1rem .2rem
        height .6rem
        line-height .6rem
        font-size .28rem
        text-align center
        .innerWard
          display inline-block
          width 2rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
    .area-list
        &:after
          content ''
          display block
          clear both
    // 按字母查找样式
    .word
      .word-list
        padding .3rem
        background-color #fff
        .word-item
          float left
          width 16%
          height .9rem
          line-height .9rem
          font-size .28rem
          text-align center
      // 清除浮动
      .word-list
        &:after
          content ''
          display block
          clear both
</style>
