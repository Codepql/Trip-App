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
          <template v-for="(item, index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
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

.landlord {

  .top {

    img {
      width: 100%;
      border-radius: 3px;
    }
  }

  .header {
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
    align-items: center;
  
    .left {
      display: flex;

      .avatar {
        img {
          width: 60px;
        }
      }

      .info {
        width: 200px;
        margin-top: 10px;
        
        .name {
          font-size: 16px;
          font-weight: 700;
        }

        .tags {
          display: flex;
          font-size: 12px;
          color: #999;
          margin-top: 6px;

          .divider {
            margin: 5px;
          }
        }
      }
    }

    .right {
      width: 70px;
      height: 25px;
      border-radius: 6px;
      background-color: #ff9854;

      .contact {
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 25px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    margin: 30px 0;

    .item {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 700;

      .title {
        color: #999;
      }

      .score {
        padding: 5px 0;
        font-size: 16px;
      }
      
      .desc {
        color: #999;
      }
    }


  }
}
</style>