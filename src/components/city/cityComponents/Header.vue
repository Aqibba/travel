<template>
  <div>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
    </div>
    <div class="search">
      <input type="text" placeholder="请输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <!-- 添加 v-show，如果搜索框中有值那么隐藏，反之显示 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <!-- 类下拉列表,循环显示有上面输入框中输入的关键字的城市 -->
        <li v-for="item of citiesList" :key="item.id" class="search-item" @click="handleCity(item.name)">{{item.name}}</li>
        <!-- 添加 v-show 做判断，如果citiesList中的长度是 0 的时候才显示 -->
        <li class="search-item" v-show="!citiesList.length">没找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  data () {
    return {
      keyword: '',
      citiesList: [],
      // 定义一个节流函数提高查找效率
      timer: null
    }
  },
  props: {
    // 接受来自父组件的值
    cities: {}
  },
  methods: {
    handleCity (city) {
      // console.log(city)
      // 将点击后得到的city传递到main.js中
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    // 监听来自 keyword 的值得变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果搜索框中没有数据了 就清空底下的列表数据
      if (!this.keyword) {
        this.citiesList = []
        return
      }
      // 当 keyword 发生改变 100ms 后循环 cities 中的内容
      this.timer = setTimeout(() => {
        var result = []
        // 循环 cities 中的内容
        for (let i in this.cities) {
          // 把 A B C D 键值对中的数组再次遍历，
          this.cities[i].forEach((value) => {
            // 如果能在 spell 或者 name 中搜索到 keyword，就添加到 result中
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        // 存储包含 keyword 的选项
        this.citiesList = result
      }, 100)
    }
  },
  mounted () {
    // 使页面能够滚动，向 better-scroll 传递一个 dom 元素
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    overflow hidden
    background-color $bgcolor
    font-size .32rem
    position relative
    .back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
  .search
    height .72rem
    background $bgcolor
    padding .1rem
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      box-sizing border-box
      padding 0 .1rem
  .search-content
    position absolute
    top 1.68rem
    left 0
    right 0
    bottom 0
    overflow hidden
    z-index 1
    background #eeeeee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
      border-bottom 1px solid #eee
</style>
