<template>
  <div class="detail">
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
      <detail_08_buy/>
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
import detail_08_buy from './cpns/detail_08_buy.vue';



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

</style>