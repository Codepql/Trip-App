<template>
  <div class="loading" 
  @click="loadingClick"
  v-if="mainStore.isLoading"
  >
    <div class="ld-icon">
      <img src="@/assets/img/loading_icon.jpg" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/module/main';


const mainStore = useMainStore()

const loadingClick = () => {
  mainStore.isLoading = false
}
    
</script>

<style lang="less" scoped>

.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);

  .ld-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;
    border-radius: 15px;
    background-color: #fff;

    img {
      width: 120px;
      height: 80px;
      margin-bottom: 6px;
    }
  }
}
</style>