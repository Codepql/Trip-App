<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${comment.totalCount}条评论`">
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{ comment.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="info">
              <div class="title">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
              <div class="star">
                <van-rate v-model="comment.overall" color="#ff9645" size="12" readonly allow-half/>
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comment.subScores" :key="item">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in comment.commentTagVo" :key="index">
            <span class="item" 
            :style="{color: item.color, background: item.background}">
              {{ item.text }}
            </span>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="comment.comment.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ comment.comment.userName }}</div>
              <div class="data">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ comment.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>

defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})
    
</script>

<style lang="less" scoped>

.comment {

  .header {
    display:flex;
    margin-top: 8px;

    .left {
      display: flex;
      width: 50%;

      .text {
        font-size: 50px;
        font-weight: 600;
        line-height: 40px;
      }

      .line {
        border-bottom: 6px solid #ff9854;
        border-radius: 5px;
      }

      .info {
        margin-left: 12px;

        .count {
          font-size: 12px;
          color: #999;
          margin: 2px 0;
        }
      }

    }

    .right {
      flex: 1;
      
      .item {
        color: #666;
        padding-right: 5px;
      }
    }
  }

  .tags {

    line-height: 22px;
    margin: 16px 0;


    .item {
      color: #999;
      margin-right: 20px;

      box-sizing: border-box;

      border-radius: 6px;
      background-color: #eee;
    }

  }

  .content {

    .user {
      display: flex;
      margin-bottom: 20px;

      .avatar {
        margin-right: 8px;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }

      .profile {

        .name {
          font-weight: 600;
          padding-bottom: 3px;
        }

        .data {
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      color: #666;
      line-height: 20px;
    }
  }
}
</style>