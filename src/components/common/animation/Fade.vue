<template>
  <transition>
    <!-- 插槽,将banner页面中的fade标签包裹的数据插入到这个动画效果中 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity 2s
</style>
