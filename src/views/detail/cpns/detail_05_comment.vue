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

</style>