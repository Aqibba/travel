<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="contant"><detail-list :list="list"></detail-list></div>
  </div>
</template>

<script>
import DetailBanner from './detailComponents/Banner.vue'
import DetailHeader from './detailComponents/Header.vue'
import DetailList from './detailComponents/List.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{ title: '成人三馆联票 - 某售票处' }]
          }, {
            title: '成人五馆联票'
          }]
        },
        {title: '学生票',
          children: [{
            title: '学生三馆联票',
            children: [{ title: '学生三馆联票 - 某售票处' }]
          }, {
            title: '学生五馆联票'
          }]
        },
        {title: '儿童票',
          children: [{
            title: '儿童三馆联票',
            children: [{ title: '儿童三馆联票 - 某售票处' }]
          }, {
            title: '儿童五馆联票'
          }]
        },
        {title: '特惠票',
          children: [{
            title: '特惠三馆联票',
            children: [{ title: '特惠三馆联票 - 某售票处' }]
          }, {
            title: '特惠五馆联票'
          }]
        },
        {title: '老年票',
          children: [{
            title: '老年三馆联票',
            children: [{ title: '老年三馆联票 - 某售票处' }]
          }, {
            title: '老年五馆联票'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.contant
  // height 30rem
</style>
