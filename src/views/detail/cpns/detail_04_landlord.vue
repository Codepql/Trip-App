<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags">
                  <div class="item">
                    <span>{{ item.tagText.text }}</span>
                    <span v-if="index !== landlord.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlord.hotelSummary">
            <div class="title">{{ item.title }}</div>
            <div class="score">{{ item.introduction }}</div>
            <div class="desc">{{ item.tip }}</div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
  
defineProps({
  landlord: {
    type: Object,
    defalut: () => ({})
  }
})
    
</script>

<style lang="less" scoped>

.intro {

  .top {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
}
</style>