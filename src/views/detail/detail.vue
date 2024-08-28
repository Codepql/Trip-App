<template>
  <div class="detail">
    <div class="tab-control">
      <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab v-for="index in ['abc', 'cba', 'nba', 'bca', 'bba']" :title="index">
          {{ index }}
        </van-tab>
      </van-tabs>
    </div>
    <div class="nav-bar">
      <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos :top-infos="mainPart.topModule"/>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice :orderRules="mainPart.dynamicModule.rulesModule"/>
      <detail-map :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :priceIntro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.webp" alt="">
      <div class="text">念转旅途，永无止境！</div>
    </div>
  </div>
</template>

<script setup>
import {  ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/serviecs';

import DetailSwipe from './cpns/detail_01_swipe.vue';
import DetailInfos from './cpns/detail_02_infos.vue';
import DetailFacility from './cpns/detail_03_facility.vue'
import DetailLandlord from './cpns/detail_04_landlord.vue';
import DetailComment from './cpns/detail_05_comment.vue';
import DetailNotice from './cpns/detail_06_notice.vue';
import DetailMap from './cpns/detail_07_map.vue';
import DetailIntro from './cpns/detail_08_intro.vue';



const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// 发送网络请求数据
const detailInfos = ref({})

getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})
const mainPart = computed(() => detailInfos.value.mainPart )
// 监听返回按钮点击
const onClickLeft = () => {
  router.back()
}


    
</script>

<style lang="less" scoped>


.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}

</style>