<template>
  <div class="skeleton" :style="{width, height, background: bg}">
  </div>
</template>

<script setup>
defineOptions({
  name: "AppSkeleton"
})
defineProps({
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '30px'
  },
  bg: {
    type: String,
    default: 'blue'
  }
})
</script>

<style lang="less" scoped>
</style>