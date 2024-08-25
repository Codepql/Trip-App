<template>
  <div class="city top-page">
    <div class="top">
          <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="城市/区域/位置"
        @cancel="cancelClick"
      />
    </form>
    <!-- tab -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    </div>
    <div class="content">
      <!-- 默认传参 父传子  缺点：数据加载较慢-->
      <!-- <city-group :group-data="currentGroup"/> -->

      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value"/>
      </template>
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia";
import  useCityStore  from "@/stores/module/city"
import cityGroup from "./cpns/city-group.vue";



const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}
    
// tab的切换
const tabActive = ref()

// 网络请求：请求城市数据
// import NzRequest from "@/serviecs/request"
// NzRequest.get({
//   url: "/city/all"
// }).then(res => {
//   console.log(res)
// })

// import { getCityAll } from "@/serviecs"
// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data
// })

// 从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 目的：获取选中标签后的数据
// 1.获取正确的key, 将tabs中绑定的tabActive绑定正确的值
// 2.根据key 在allcities获取数据, 默认直接获取的值不是响应式的，所以要包裹computed
const currentGroup = computed(() => allCities.value[tabActive.value])



</script>

<style lang="less" scoped>
.city {

  .top {
    position: relative;
    z-index: 9;
  }
  
  // 隐藏tab-bar的方法
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>