<template>
  <div id="app">
    <!-- keep-alive
    当路由的内容被加载过一次以后,把加载过的内容放入内存中,
    下次加载时不需要重新加载,减少页面向服务器递交请求的次数,
    提高响应速度-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
