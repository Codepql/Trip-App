<template>
  <div class="search">
    <div class="slect-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键词/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search">
        <img src="@/assets/img/icon_search.webp" alt="">
      </i>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/module/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { formatMonthDay } from "@/utils/format_date";


const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
    
</script>

<style lang="less" scoped>

.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;


  padding: 0 10px;
  font-size: 14px;
  color: #999;

  border-radius: 6px;
  background-color: #f2f4f6;

  .selct-time {
    display: flex;
    flex-direction: column;


    // .end .date::after {
    //   content: " ";
    //   width: 0;
    //   height: 0;
    //   border: 4px solid #666;
    //   border-color: rgba(0, 0, 0, 0) rgba(0, g0, 0, 0) rgba(0, g0, 0, 0) #666;
    //   -webkit-border-radius: 3px;
    //   border-radius: 3px;
    //   -webkit-transform: rotate(454deg);
    //   -ms-transform: rotate(454deg);
    //   transform: rotate(45deg);
    //   position: absolute;
    //   bottom: 0px;
    //   right: -12px;
    // }
  }

  .item {
      display: flex;
      flex-direction: row;
      align-items: center;;
      line-height: normal;
      font-size: 10px;

      .date {
        position: relative;
        color: #333;
        margin: 0 10px 0 3px;
        font-weight: 500;

      }

      .date {
        padding-top: 2px;
      }
    }


  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }
  }


  .icon-search {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }

}

</style>