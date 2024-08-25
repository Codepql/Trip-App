<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <div class="location">
      <div class="city">福州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue';
    
</script>

<style lang="less" scoped>

.banner{
  img {
    width: 100%;
  }
}

.location{
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    display: flex;
    width: 74px;
    align-items: center;

    .text {
      font-size: 12px;
    }

    img {
      width: 26px;
      height: 26px;
    }
  }
}

</style>