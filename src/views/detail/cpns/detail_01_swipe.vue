<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <!-- <div class="indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span class="item" 
            :class="{ active: swipeData[active]?.enumPictureCategory == key}">
            <span class="text">{{ getName(value[0].title) }}</span>
            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
              {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
            </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 对数据进行转换
const swipeGroup = {}

for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]

  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }

  valueArray.push(item)
}


// 定义数据转换方法
const getName = (name) => {
  return name.replace("：","")
}

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
    
</script>


<style lang="less" scoped>

.swipe {

  .swipe-list {

    .item {
      img {
        width: 100%;
      }
    }
  }
}


.indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 3px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.8);

  .item {
    margin: 0 ;

    &.active {

      border-radius: 3px;
      color: #333;
      background-color: #fff;
    }

    .count {
      padding: 0 3px 0 0;
    }
  }

}
</style>