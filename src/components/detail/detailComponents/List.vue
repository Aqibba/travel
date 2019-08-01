<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="title-icon"></span>{{item.title}}
      </div>
      <!-- 递归组件 -->
      <!-- 如果这个传来的item有children这个属性, 就把这个属性当做list再次传递给自己进行下一步的循环 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: ''
  }
}
</script>

<style lang="stylus" scoped>
  .title-icon
    display inline-block
    width .36rem
    height .36rem
    background url(../../../assets/imgs/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
    position relative
    left .06rem
    top .08rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
