<template>

  <div class="child">
    <h3>我是子组件1</h3>
    <GrandChild></GrandChild>
  </div>

</template>

<script setup lang='ts'>
// 引入子组件
import GrandChild from './GrandChild.vue';

</script>
<style scoped>
.child {
  width: 400px;
  height: 300px;
  background-color: lightgreen;
}
</style>