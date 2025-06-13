<template>
  <router-link :to="path" class="more">
    <span>查看全部</span>
    <i class="iconfont icon-arrow-right"></i>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
defineOptions({
  name: 'AppMore'
})

const props = defineProps({
  path: {
    type: String,
    default: '/'
  }
})

</script>

<style lang="less" scoped>
.more {
  span {
    font-size: 16px;
    color: #999;
  }
  .i {
    font-size: 14px;
    color: #cccc;
  }
}
</style>