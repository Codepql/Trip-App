<template>
  <div class="tab-bar">
    <!-- 基本路由切换 -->
    <!-- <router-view/>
    <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->

    <!-- 使用组件库vant -->
    <van-tabbar v-model="curryIndex" active-color="#ff9854" :route="true">
      <van-tabbar-item to="/home">
        <!-- 自定义图标 -->
        <span>首页</span>
        <template #icon>
          <van-icon name="home-o" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/favor" icon="shop-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/order" icon="cart-o">订单</van-tabbar-item>
      <van-tabbar-item to="/message" icon="chat-o">消息</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const curryIndex = ref(0)
    
</script>

<style lang="less" scoped>

// 自定义封装时的css
// .tab-bar {
//   position:fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;

//   border-top: 1px solid #f3f3f3;

//   // .tab-bar-item {
//   //   flex: 1;
//   //   display: flex;
//   //   justify-content: center;
//   //   align-items: center;

//   // }
// }

.tab-bar {
  // 局部修改变量，改变vant变量
  --van-tabbar-item-icon-size: 20px;
}

</style>