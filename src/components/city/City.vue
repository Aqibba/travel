<template>
  <div>
    <city-header :cities="cities"></city-header>
    <!-- 父组件向子组件传值 -->
    <city-list :cities="cities" :hot="hotCities"></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './cityComponents/Header'
import CityList from './cityComponents/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  // 创建生命周期函数
  mounted () {
    this.getCityInfo()
  },
  // 调用生命周期函数中创建的函数
  methods: {
    getCityInfo () {
      // 使用 ajax 获得后台传来的 json 数据
      axios.get('http://localhost:8080/static/mock/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      // console.log(res)
      if (res.data.ret && res.data.data) {
        this.cities = res.data.data.cities
        // console.log(this.cities)
        this.hotCities = res.data.data.hotCities
        // console.log(this.hotCities)
      }
    }
  }
}
</script>
