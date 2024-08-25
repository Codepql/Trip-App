<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!route.meta.hideTabBar"/>
    <!-- <tab-bar/> -->
    <loading/>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import loading from '@/components/loading/loading.vue';


const route = useRoute()
    
</script>

<style lang="less" scoped>



</style>