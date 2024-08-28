<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section data-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入店</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
    v-model:show="showCalendar" 
    type="range" 
    :round="false"
    color="#ff9854"
    :show-confirm="false"
    @confirm="onConfirm" />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests " :key=index>
        <div 
        class="item"
        :style="{color: item.tagText.color, background: item.tagText.background.color}"
        >{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 搜索框 -->
    <div class="section search-btn" @click="searchBtnClick">
      <div class="btn">开始搜索</div>
    </div>


  </div>




</template>

<script setup>
import { computed, ref } from "vue";
import useCityStore from "@/stores/module/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import useHomeStore from "@/stores/module/home";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";
import useMainStore from "@/stores/module/main";


const router = useRouter()


// 位置/城市
  const cityClick = () => {
    router.push("/city")
  }

  const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功：", res)
    }, err => {
      console.log("获取位置失败：", err)
    }, {
      enableHighAccuray: true,
      timeout: 3000,
      maximumAge: 0
    })
  }

  // 当前城市
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)

  // 日期范围的处理
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)

  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = ref(getDiffDays(startDate.value, endDate.value))

  const showCalendar = ref(false)
  const onConfirm = (value) => {
    // 设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate

    stayCount.value = getDiffDays(selectStartDate, selectEndDate)

    // 隐藏窗口
    showCalendar.value = false
  }

  // 热门建议
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 搜索框
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>

.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333
  }

  .position {
    display: flex;
    width: 74px;
    align-items: center;

    .text {
      font-size: 12px;
      color: #666;
    }

    img {
      width: 26px;
      height: 26px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    align-items: center;

    .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    padding-left: 30px;
    
  }
  }

  .end {
    min-width: 30%;
    padding-left: 20px
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.price-count {

  .start {
    border-bottom: 1px solid #f6f7f8;
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 3px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {

  .btn {
    width: 324px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

</style>