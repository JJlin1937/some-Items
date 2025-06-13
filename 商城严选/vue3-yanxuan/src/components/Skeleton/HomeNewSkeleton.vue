<template>
  <div>
    <ul class="goods-list">
      <li class="item" v-for="item in 4" :key="item">
        <!-- 图片 -->
        <AppSkeleton width="265px" height="265px" bg="#999"/>
        <!-- 名称 -->
        <AppSkeleton width="265px" height="100px" bg="#ccc"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  .item {
    width: 265px;
    height: 365px;
  }
}
</style>