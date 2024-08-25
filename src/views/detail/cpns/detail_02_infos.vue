<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags">
        <span class="item" 
        v-if="item.tagText"
        :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="all">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="breif">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        {{ topInfos.commentBrief.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position extra">
      <div class="address">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图 周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }


})
    
</script>

<style lang="less" scoped>

.infos {
  padding: 16px;
  background-color: #fff;

  .name {
    font-size: 20px;
    color: #333;
    font-weight: 700;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;
    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .comment {

    .all {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .title {
      font-weight: 700;
      color: #333;
      margin: 0 3px; 
    }
  }

  .position {
  
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
  }

  .right {
    color: #ff9645;
  }
}
</style>