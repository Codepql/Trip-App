<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <home-search-box />
    <home-categories/>

    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar/>
    </div>

    <home-content/>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useHomeStore from '@/stores/module/home';
import HomeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll';
import searchBar from '@/components/search-bar/search-bar.vue';




// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()


// 监听windows创建滚动
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})
 
// 搜索框显示控制
const isShowSearchBar = ref(false)
watch(scrollTop, (newTop) => {
  isShowSearchBar.value = newTop > 200
})

</script>

<style lang="less" scoped>

.home {
  padding-bottom: 60px;
}

.banner{
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color:white;
}


</style>