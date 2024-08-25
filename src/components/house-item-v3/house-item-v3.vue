<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/location_on_icon.png" alt="">
          <span>{{ houseData.location }}</span>
        </div>
        <div class="name">{{ houseData.houseName }}</div>
        <div class="summary">{{ houseData.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{ houseData.finalPrice }}</div>
          <div class="old">￥{{ houseData.productPrice }}</div>
          <div class="tip">{{ houseData?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
  houseData: {
    type: Object,
    defualt: () => ({})
  }
})
  
const itemStore = computed(() => {
  return Number(props.houseData.commentScore)
})
    
</script>

<style lang="less" scoped>

.house-item {
  width: 50%;

  .item-inner {
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      padding: 8px 10px;
      color: #fff;
    }

    .location {
      font-size: 12px;
      color: #666;

      img {
        margin-top: 2px;
        width: 12px;
        height: 12px;
      }
    }

    .name {
      margin: 5px 0;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .summary {
      font-size: 12px;
      color: #666;
    }

    .price {
      display: flex;
      font-size: 12px;
      margin-top: 10px;

      .new {
        color: #ff9854;
      }

      .old {
        color: #777;
        text-decoration: line-through;
      }

      .tip {
        margin: 0 6px;
        padding: 2px 5px;
        font-size: 10px;
        border-radius: 10px;
        background-color: #f66;
      }
    }


  }
}
</style>