<template>
  <div class="notice">
    <detail-section title="预订须知">
      <div class="notice-inner">
        <template v-for="(item, index) in orderRules.orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="text">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>

defineProps({
  orderRules: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="less" scoped>

</style>