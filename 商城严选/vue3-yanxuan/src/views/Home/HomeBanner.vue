<template>
  <div>
    <!-- 全局组件 -->
     <AppBanner :list="list"></AppBanner>
  </div>
</template>

<script setup>
import { getBannerList } from '@/api';
import { ref } from 'vue';

const list = ref([]);

getBannerList().then(res => {
  console.log(res);
  if (res.msg=='操作成功') {
    list.value = res.result
  }
})

</script>

<style lang="less" scoped>

</style>